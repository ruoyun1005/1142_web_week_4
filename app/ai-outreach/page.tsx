import Image from "next/image";
import CountUp from "../components/CountUp";

export default function Home() {
  return (
    <>
      <div className="h-full w-full pl-4 flex flex-col">
        <section>
          <div className="section-title font-en mt-2">AI OUTREACH CAMPAIGN</div>
          <div className="font-zh text ">此專案為一項以推廣 AI 知識為核心的校園計畫，透過講座、工作坊與影音傳播，提升大眾對 AI 的理解與參與。</div>
          <div className="font-zh text">在此專案中，我負責將整體企劃轉化為一致的視覺與溝通系統，包含品牌視覺、海報設計與產品設計。</div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="w-[400px] h-[200px]  relative overflow-auto rounded-2xl">
              <img src="/media/youtube-bg.png" className="absolute inset-0 object-cover" />
              <div className="absolute inset-0 bg-[#60606D]/85 inset-shadow-sm shadow-[inset_0_0_20px_rgba(45,45,55,0.8)]" />

              <div className="absolute inset-0 py-4 px-8 ">

                <div className="gap-4 flex items-center flex-row">
                  <img src="/media/youtube-icon.svg"/>
                  <div className="text-[#A7B2CC] flex items-center gap-1">
                    <span className="font-zh text font-bold">呆一布呀 </span>
                    <span className="font-en text font-bold">Diveai </span>
                    <span className="font-zh text font-bold"> 頻道</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-12 mt-2">
                  <div className="text-[#FBFCFE] font-zh text font-bold">訂閱人數</div>
                  <div className="font-en text-[#FBFCFE] text-[96px] font-bold leading-none">< CountUp end = {900}/>+</div>
                  
              </div>

              <div className="flex justify-end mt-2">
                <div className="font-zh text text-[#A7B2CC]">累計 16 部影片</div>
              </div>  
            </div>
            </div>
            

            <div className="w-[400px] h-[200px] relative overflow-auto rounded-2xl">
              <img src="/media/presentation-bg.png" className="absolute inset-0 object-cover" />
              <div className="absolute inset-0 bg-[#60606D]/85 inset-shadow-sm shadow-[inset_0_0_20px_rgba(45,45,55,0.8)]" />

              <div className="absolute inset-0 py-4 px-8 ">

                <div className="gap-4 flex items-center flex-row">
                  <img src="/media/presentation-icon.svg"/>
                  <div className="text-[#A7B2CC] flex items-center gap-1">
                    <span className="font-zh text font-bold">⟪奇異點工作坊⟫講座</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-10 mt-2">
                  <div className="text-[#FBFCFE] font-zh text font-bold whitespace-nowrap">參與人數</div>
                  <div className="font-en text-[#FBFCFE] text-[96px] font-bold leading-none">1000+</div>
              </div>

              <div className="flex justify-end mt-2">
                <div className="font-zh text text-[#A7B2CC]">累計 10 場講座</div>
              </div>
            </div>
            </div>
            </div>
        </section>
        
        <div className="h-px bg-[#C9D4EE] my-6" />
        
        <section>
          <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr] gap-16">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <div className="section-title">VISUAL IDENTITY</div>
                
                <div className="group  w-[260px] h-[175px] mt-4 bg-[#90D5DA] rounded-2xl relative overflow-hidden box-shadow">
                  <div className="absolute inset-0 flex justify-center items-center flex-col">
                    
                    <img src="/media/diveai-icon.svg" className="relative z-10"/>
                    <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#57A3A9] to-[#90D5DA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 w-full flex justify-center gap-1  text-[14px] text-[#FBFCFE] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-zh">呆一布呀</span>
                      <span className="font-en">YouTube</span>
                      <span className="font-en">頻道</span>
                      <span className="font-en">LOGO</span>
                    </div>
                  </div>
                </div>

                <div className="group w-[260px] h-[175px] mt-4 bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  
                  <img src="/media/shorts-icon.svg" className="relative z-10" />
                  <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#A76B58] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                    <span className="font-en text-[14px]">AI</span>
                    <span className="font-zh text-[14px]">知識快問快答短影音企劃</span>
                    <span className="font-en text-[14px]">LOGO</span>
                  </div>
                </div>

                </div>
              </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <div className="section-title">PRODUCT DESIGN</div>

                <div className="w-[260px] h-[210px] relative overflow-hidden rounded-2xl box-shadow">
                  <img src="/media/coffee-bg.png" className="absolute inset-0 object-cover"/>
                </div>
                
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
          <div className="section-title">POSTER DESIGN</div>
          </div>
            </div>

        </section>
      </div>
      

      
      
      
      
    </>
  );
}