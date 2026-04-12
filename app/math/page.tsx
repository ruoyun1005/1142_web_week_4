'use client';
import { useState } from 'react';
import BackHomeButton from "../components/BackHomeButton";

export default function Math() {
  const [open, setOpen] = useState<number | null>(null);

  const projects = [
    {
      num: '1',
      title: 'Mathematical Structure and Geometric Foundations of Bézier Curves',
      desc: '探討 Bézier 曲線背後的數學結構，從仿射幾何出發，推導出 de Casteljau 演算法與一般 Bézier 曲線公式，並實作互動視覺化工具驗證幾何性質。',
      tags: ['Curves', 'Geometry', 'Visualization'],
      demo: 'https://ruoyun1005.github.io/CAGD-Bezier-Curve-Visualization/',
      poster: '/media/math-poster.png',
    },
    {
      num: '2',
      title: 'Bézier Surface — In Progress',  // 改成你的標題
      desc: '將 Bézier 曲線的數學結構延伸至三維曲面，探討雙變數 Bernstein 多項式與曲面連續性條件。',  // 改成你的描述
      tags: ['Surface', '3D', 'Geometry'],
      demo: '#',
      poster: null,  // 還沒有海報就放 null
    },
  ];

  return (
    <>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/media/math-bg.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1200px",
        }}
      />

      {/* Lightbox */}
      {open !== null && projects[open].poster && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setOpen(null)}
        >
          <img
            src={projects[open].poster!}
            alt="Research Poster"
            className="max-h-full max-w-full rounded-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      <div className="relative z-10 w-full overflow-y-auto p-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 w-full h-full">
          <BackHomeButton />

          <div className="w-full h-full flex flex-col gap-4">

            {projects.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm shadow-blue-500/20 relative overflow-hidden outline-2 outline-[#E1E9FC] ">
                {/* 背景大數字 */}
                <div className="absolute right-6 top-1/2 -translate-y-1/4 font-en font-bold text-[120px] leading-none text-[#C9D4EE]/20 select-none pointer-events-none">
                  {p.num}
                </div>

                <div className="relative z-10 max-w-2xl">
                  <div className="section-title uppercase">Mathematical Project</div>
                  <h2 className="font-en font-bold text-xl text-[#3D4A6B] leading-snug tracking-widest mt-2 mb-3">
                    {p.title}
                  </h2>
                  <p className="font-zh text-sm text-[#6B7280] leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(t => (
                      <span key={t} className="font-en text-[10px] tracking-[0.2em] uppercase border border-[#C9D4EE] rounded-full px-3 py-1 text-[#8A97BF]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-2 font-en font-bold text-[16px] tracking-wider border-2 border-[#C9D4EE] rounded-lg px-4 py-2 text-[#4A5568] hover:bg-[#F2F6FF] hover:text-[#3D4A6B] transition-all duration-200"
                    >
                      → Open Interactive Demo
                    </a>
                    {p.poster && (
                      <button
                        onClick={() => setOpen(i)}
                        className="inline-flex items-center gap-2 font-en font-bold text-[16px] tracking-wider border-2 border-[#C9D4EE] rounded-lg px-4 py-2 text-[#4A5568] hover:bg-[#F2F6FF] hover:text-[#3D4A6B] transition-all duration-200"
                      >
                        → View Research Poster
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            
          </div>
        </div>
        {/* Meta */}
        <div className="h-px bg-[#C9D4EE]"/>
        <div className="px-2 pb-2  flex justify-center items-end mt-2">
              <div className="font-mono text-[10px] text-[#A7B2CC] flex flex-wrap gap-x-12 gap-y-1">
                <span>Student ── Ru-Yun Luo</span>
                <span>Advisor ── Prof. Pu-Zhao Kow</span>
                <span>NCCU Department of Mathematical Science</span>
              </div>
            </div>

      </div>
    
    </>
  );
}