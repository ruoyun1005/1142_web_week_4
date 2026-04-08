"use client";
import { useState } from "react";
import BackHomeButton from "../components/BackHomeButton";



export default function Game() {

  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
       <div className = "flex  flex-col lg:flex-row gap-6 lg:gap-10 w-full overflow-y-auto p-8">
       <BackHomeButton/>
        
        <div className="w-full">
        <div className="section-title">3D UNITY GAME</div>
        <div className="w-full bg-[#F2F6FF] outline-6 outline-[#E1E9FC] rounded-4xl relative p-6 mr-8 box-shadow mt-4"> 
 
            <div className="flex flex-col">
              <div className="text font-zh font-bold mb-4 text-base leading-relaxed">雙人合作闖關遊戲｜戰鬥關卡 × 益智關卡</div>
            </div>
            
            <div className="w-full max-w-[900px] justify-center rounded-4xl overflow-hidden inline-block mx-auto">
              <button
                type="button"
                onClick={() => setOpenVideo(true)}
                className="w-full max-w-[900px] rounded-4xl overflow-hidden mx-auto block cursor-pointer"
              >
                <img
                  src="/media/game-poster.png"
                  alt="Super Bob poster"
                  className="block w-full h-auto transition-transform duration-300 hover:scale-[1.02]"
                />
              </button>
            </div>
            <span className="text font-zh mt-6 tracking-widest">《Super Bob》是一款雙人本地合作 3D 闖關遊戲，結合戰鬥與益智解題兩種獨立關卡。玩家需要透過角色分工、互相配合與技能成長，完成不同關卡目標，並在大廳、金幣、技能升級與星等評分系統之間形成完整的遊玩循環。</span>
            <span></span>
          </div> 
        </div> 
       
        {openVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 text-black text-xl"
            >
              ×
            </button>

            <video
              src="/media/game-video.mp4"
              controls
              autoPlay
              className="block w-full h-auto"
            />
          </div>
        </div>
      )}
       
       </div>
      

      
      
      
      
    </>
  );
}