import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";
import CountUp from "../components/CountUp";

export default function aioutreach() {
  return (
    <>
      <div className = "flex  flex-col lg:flex-row gap-6 lg:gap-10 w-full overflow-y-auto p-8">
          <BackHomeButton/>

          <div className="">
            <div className="section-title font-en">AI OUTREACH CAMPAIGN</div>
          <div className="font-zh text ">此專案為一項以推廣 AI 知識為核心的校園計畫，透過講座、工作坊與影音傳播，提升大眾對 AI 的理解與參與。</div>
          <div className="font-zh text">在此專案中，我負責將整體企劃轉化為一致的視覺與溝通系統，包含品牌視覺、海報設計與產品設計。</div>
            
          <section>
            <div className="grid grid-cols-1 min-[1250px]:grid-cols-2 gap-6 mt-6 justify-items-center">
              <div className="w-[400px] h-[200px]  relative overflow-auto rounded-2xl hover:scale-105 duration-300">
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
              

              <div className="w-[400px] h-[200px] relative overflow-auto rounded-2xl hover:scale-105 duration-300">
                <img src="/media/presentation-bg.png" className="absolute inset-0 object-cover" />
                <div className="absolute inset-0 bg-[#60606D]/85 inset-shadow-sm shadow-[inset_0_0_20px_rgba(45,45,55,0.8)]" />

                <div className="absolute inset-0 py-4 px-8 ">

                  <div className="gap-4 flex items-center flex-row">
                    <img src="/media/presentation-icon.svg"/>
                    <div className="text-[#A7B2CC] flex items-center gap-1">
                      <span className="font-zh text font-bold">⟪奇異點工作坊⟫ 講座</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-10 mt-2">
                    <div className="text-[#FBFCFE] font-zh text font-bold whitespace-nowrap">參與人數</div>
                    <div className="font-en text-[#FBFCFE] text-[96px] font-bold leading-none">< CountUp end = {1000}/>+</div>
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
          <div className="grid grid-cols-1 min-[900px]:grid-cols-[260px_1fr] gap-16 justify-items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <div className="section-title">VISUAL IDENTITY</div>
                
                <div className="group  w-[260px] h-[175px] mt-4 bg-[#90D5DA] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                  <div className="absolute inset-0 flex justify-center items-center flex-col">
                    
                    <img src="/media/diveai-icon.svg" className="relative z-10"/>
                    <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#57A3A9] to-[#90D5DA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 w-full flex justify-center gap-1  text-[14px] text-[#FBFCFE] font-bold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-zh">呆一布呀</span>
                      <span className="font-en">YouTube</span>
                      <span className="font-en">頻道</span>
                      <span className="font-en">LOGO</span>
                    </div>
                  </div>
                </div>

                <div className="group w-[260px] h-[175px] mt-8 bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">   
                    <img src="/media/shorts-icon.svg" className="relative z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#A76B58] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-en">AI</span>
                      <span className="font-zh">知識快問快答短影音企劃</span>
                      <span className="font-en">LOGO</span>
                    </div>
                  </div>
                </div>

              </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <div className="section-title">PRODUCT DESIGN</div>

                <div className="group w-[260px] h-[210px] mt-4 bg-[#8a8a8a] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/media/coffee-bg.png" className="relative" />
                    <div className="absolute  bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#343f60]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-zh font-bold text-[14px]">聯名咖啡包製作</span>
                    </div>
                  </div>
                </div>

                
                <div className="group w-[260px] h-[175px] my-8 bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">   
                    <img src="/media/sticker-bg.png" className="relative"/>
                    <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-zh">呆一布貼圖製作</span>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-8">
          <div className="section-title">POSTER DESIGN</div>

          <div className="grid grid-cols-1  min-[1280px]:grid-cols-2 gap-8 mt-4">
          <div className="group w-[240px] h-[230px]  bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">   
                    <img src="/media/poster-1.png" className="relative"/>
                    <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-zh">焦點工作坊-大一新起點</span>
                    </div>
                  </div>
                </div>
          
          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-2.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <span className="font-zh">奇異點工作坊-復盤寫作術 x AI</span>
              </div>
            </div>
          </div>

          
          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-4.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <span className="font-zh">2025 PyDay 工作坊</span>
              </div>
            </div>
          </div>

          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-6.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <div className="font-zh text-center flex flex-col justify-center">
                                  <span>奇異點工作坊</span>
                                <span>負責任地使用生成式影像</span>
                                </div>
              </div>
            </div>
          </div>


          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-7.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <span className="font-zh">奇異點工作坊-國民AI女友</span>
              </div>
            </div>
          </div>
          
          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                      <div className="absolute inset-0 flex flex-col items-center justify-center">   
                        <img src="/media/poster-5.png" className="relative"/>
                        <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                        <div className="font-zh text-center flex flex-col justify-center">
                                  <span>奇異點工作坊</span>
                                <span>AI智慧與AR眼鏡的未來</span>
                                </div>
                        </div>
                      </div>
                    </div>
          
          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-11.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
              <div className="font-zh text-center flex flex-col justify-center">
                        <span>奇異點工作坊</span>
                      <span>讓Google 幫你上班：Apps Script實戰分享</span>
                      </div>
              </div>
            </div>
          </div>

          <div className="group w-[240px] h-[230px] bg-[#F7C396] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
              <div className="font-zh text-center flex flex-col justify-center">
                        <span>奇異點工作坊</span>
                      <span>實戰! Gemini Veo3, 全民導演不是夢</span>
                      </div>
              </div>
            </div>
          </div>

          
          </div>
          
          </div>
            </div>

        </section>
          </div>
          
        </div>   
        
      
      

      
      
      
      
    </>
  );
}