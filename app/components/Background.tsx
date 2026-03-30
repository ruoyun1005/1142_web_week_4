"use client";

import { useEffect, useRef } from "react";

type MouseState = {
  x: number;
  y: number;
  inside: boolean;
};

export default function RippleHeroBackground() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const gridCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const glowCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const gridCanvas = gridCanvasRef.current;
    const glowCanvas = glowCanvasRef.current;

    if (!wrapper || !gridCanvas || !glowCanvas) return;

    const gridCtx = gridCanvas.getContext("2d");
    const glowCtx = glowCanvas.getContext("2d");

    if (!gridCtx || !glowCtx) return;

    const mouse: MouseState = {
      x: 0,
      y: 0,
      inside: false,
    };

    let animationId = 0;
    let time = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resizeCanvas = () => {
      const rect = wrapper.getBoundingClientRect();

      [gridCanvas, glowCanvas].forEach((canvas) => {
        canvas.width = rect.width * DPR;
        canvas.height = rect.height * DPR;
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
      });

      gridCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
      glowCtx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.inside = true;
    };

    const handleMouseLeave = () => {
      mouse.inside = false;
    };

    const drawBackground = (w: number, h: number) => {
      gridCtx.clearRect(0, 0, w, h);
      gridCtx.fillStyle = "#FBFCFE";
      gridCtx.fillRect(0, 0, w, h);
    };

    const drawGrid = (w: number, h: number) => {
      const spacing = 28;
      const radius = 300;
      const amplitude = 1; // 鈄動係數

      gridCtx.strokeStyle = "rgba(160, 168, 185, 0.12)";
      gridCtx.lineWidth = 1;

      for (let x = 0; x <= w + spacing; x += spacing) {
        gridCtx.beginPath();

        for (let y = 0; y <= h + 8; y += 8) {
          let offsetX = 0;

          if (mouse.inside) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / radius);

            offsetX =
              Math.sin(dist / 18 - time * 2.8) * amplitude * influence;
          }

          const drawX = x + offsetX;

          if (y === 0) {
            gridCtx.moveTo(drawX, y);
          } else {
            gridCtx.lineTo(drawX, y);
          }
        }

        gridCtx.stroke();
      }

      for (let y = 0; y <= h + spacing; y += spacing) {
        gridCtx.beginPath();

        for (let x = 0; x <= w + 8; x += 8) {
          let offsetY = 0;

          if (mouse.inside) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const influence = Math.max(0, 1 - dist / radius);

            offsetY =
              Math.sin(dist / 18 - time * 2.8) * amplitude * influence;
          }

          const drawY = y + offsetY;

          if (x === 0) {
            gridCtx.moveTo(x, drawY);
          } else {
            gridCtx.lineTo(x, drawY);
          }
        }

        gridCtx.stroke();
      }
    };

    const drawGlowNoise = () => {
        const rect = wrapper.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
      
        glowCtx.clearRect(0, 0, w, h);
      
        if (!mouse.inside) return;
      
        const r = 220;
      
        // 第一層：主墨水暈染
        const gradient1 = glowCtx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          r
        );
        gradient1.addColorStop(0, "rgba(120, 170, 255, 0.16)");
        gradient1.addColorStop(0.35, "rgba(144, 213, 218, 0.12)");
        gradient1.addColorStop(0.75, "rgba(247, 195, 150, 0.05)");
        gradient1.addColorStop(1, "rgba(255,255,255,0)");
      
        glowCtx.fillStyle = gradient1;
        glowCtx.beginPath();
        glowCtx.arc(mouse.x, mouse.y, r, 0, Math.PI * 2);
        glowCtx.fill();
      
        // 第二層：偏移一點，做不規則暈開
        const gradient2 = glowCtx.createRadialGradient(
          mouse.x + 18,
          mouse.y - 12,
          0,
          mouse.x + 18,
          mouse.y - 12,
          r * 0.9
        );
        gradient2.addColorStop(0, "rgba(170, 150, 255, 0.10)");
        gradient2.addColorStop(0.45, "rgba(120, 200, 255, 0.08)");
        gradient2.addColorStop(1, "rgba(255,255,255,0)");
      
        glowCtx.fillStyle = gradient2;
        glowCtx.beginPath();
        glowCtx.arc(mouse.x + 18, mouse.y - 12, r * 0.9, 0, Math.PI * 2);
        glowCtx.fill();
      
        // 第三層：再一層更淡的暖色，讓像墨水擴散
        const gradient3 = glowCtx.createRadialGradient(
          mouse.x - 22,
          mouse.y + 16,
          0,
          mouse.x - 22,
          mouse.y + 16,
          r * 0.75
        );
        gradient3.addColorStop(0, "rgba(255, 190, 150, 0.08)");
        gradient3.addColorStop(0.5, "rgba(255, 220, 180, 0.04)");
        gradient3.addColorStop(1, "rgba(255,255,255,0)");
      
        glowCtx.fillStyle = gradient3;
        glowCtx.beginPath();
        glowCtx.arc(mouse.x - 22, mouse.y + 16, r * 0.75, 0, Math.PI * 2);
        glowCtx.fill();
      
        // 雜訊點：範圍更大，像噴散的顆粒
        for (let i = 0; i < 500; i++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.pow(Math.random(), 1.6) * r; // 讓點比較集中但仍有外擴
          const x = mouse.x + Math.cos(angle) * dist;
          const y = mouse.y + Math.sin(angle) * dist;
      
          const alpha = Math.max(0, 0.12 - dist / r / 10);
          const hue = 190 + Math.random() * 50;
          const size = Math.random() * 1.8 + 0.4;
      
          glowCtx.fillStyle = `hsla(${hue}, 100%, 72%, ${alpha})`;
          glowCtx.fillRect(x, y, size, size);
        }
      };
    const render = () => {
      time += 0.016;

      const rect = wrapper.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      drawBackground(w, h);
      drawGrid(w, h);
      drawGlowNoise();

      animationId = requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    window.addEventListener("resize", resizeCanvas);
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <canvas ref={gridCanvasRef} className="absolute inset-0" />
      <canvas ref={glowCanvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),rgba(190,198,214,0.1))]" />
    </div>
  );
}