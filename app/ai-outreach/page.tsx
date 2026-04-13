import Image from "next/image";
import BackHomeButton from "../components/BackHomeButton";
import CountUp from "../components/CountUp";

const posters = [
  { src: '/media/poster-1.png',  label: '焦點工作坊－大一新起點' },
  { src: '/media/poster-2.png',  label: '奇異點工作坊－復盤寫作術 x AI' },
  { src: '/media/poster-4.png',  label: '2025 PyDay 工作坊' },
  { src: '/media/poster-6.png',  label: '奇異點工作坊\n負責任地使用生成式影像' },
  { src: '/media/poster-7.png',  label: '奇異點工作坊－國民AI女友' },
  { src: '/media/poster-5.png',  label: '奇異點工作坊\nAI智慧與AR眼鏡的未來' },
  { src: '/media/poster-11.png', label: '奇異點工作坊\n讓Google幫你上班：Apps Script實戰' },
  { src: '/media/poster-.png',   label: '奇異點工作坊\n實戰! Gemini Veo3，全民導演不是夢' },
];

const visualCards = [
  { bg: '#90D5DA', hover: '#57A3A9', src: '/media/diveai-icon.svg',  label: '呆一布呀 YouTube 頻道 LOGO' },
  { bg: '#F7C396', hover: '#A76B58', src: '/media/shorts-icon.svg', label: 'AI 知識快問快答短影音企劃 LOGO' },
];


const productCards = [
  { bg: '#8a8a8a', src: '/media/coffee-bg.png',  label: '聯名咖啡包製作' },
  { bg: '#F7C396', src: '/media/sticker-bg.png', label: '呆一布貼圖製作' },
];



export default function aioutreach() {
  return (
    <>
      <div className = "flex  flex-col lg:flex-row gap-6 lg:gap-10 w-full overflow-y-auto p-8">
          <BackHomeButton/>

          {/* Header */}
          <div className="">
            <div className="section-title font-en">AI OUTREACH CAMPAIGN</div>
            
          <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-6 lg:gap-8 items-end">
              {/* 專案概述 */}
            <section className="-translate-y-8">
              <div className="relative z-0">
              <div className="flex justify-end -translate-x-4 translate-y-8">
                <img src="/media/dive-icon.svg" className="w-28 h-28" />
            </div>
              <div className="bg-[#FBFCFE] rounded-2xl p-6 outline-1 outline-[#C9D4EE] flex flex-col gap-6 pt-8 pb-6 px-6 relative z-10">
            <div>
              <div className="font-zh text-[16px] font-bold text-[#3D4A6B] leading-tight tracking-wide">專案概述</div>
              <div className="text font-zh mt-4">此專案為政治大學蔡炎龍教授帶領，為一項以推廣 AI 知識為核心的校園計畫，透過講座、工作坊與影音傳播，提升大眾對 AI 的理解與參與。</div>
              <div className="font-zh text-[16px] font-bold text-[#3D4A6B] leading-tight tracking-wide mt-6">負責部分</div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {['品牌視覺', '海報設計', '產品設計'].map((item, i) => (
                  <div
                    key={i}
                    className={`font-zh text-sm font-bold text-[#A7B2CC] text-center border border-[#C9D4EE] rounded-xl py-3 px-4 hover:bg-[#F2F6FF] transition-colors duration-200 ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            </div>
              </div>
            </section>
            
            <section>
            <div className="grid grid-row-1 sm:grid-row-2 gap-4 mt-6">
            
            {/* YouTube */}  
            <div className="relative rounded-2xl overflow-hidden h-[180px] hover:scale-[1.02] transition-transform duration-300">
            <img src="/media/youtube-bg.png" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#60606D]/85" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <img src="/media/youtube-icon.svg" className="w-6 h-6" />
                <span className="font-zh text-[14px] text-[#A7B2CC] font-bold">呆一布呀 Diveai 頻道</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="font-zh text-[14px] text-[#FBFCFE] font-bold">訂閱人數</span>
                <div className="flex items-end gap-1">
                  <span className="font-en text-[#FBFCFE] text-[48px] min-[900px]:text-[64px] lg:text-[96px] font-bold leading-none">
                    <CountUp end={1000} />+
                  </span>
                </div>
              </div>
              <div className="font-zh text-[14px] text-[#A7B2CC] text-right text-sm">累計 16 部影片</div>
            </div>
          </div>

          {/* 講座 */}  
          <div className="relative rounded-2xl overflow-hidden h-[180px] hover:scale-[1.02] transition-transform duration-300">
            <img src="/media/presentation-bg.png" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#60606D]/85" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <img src="/media/presentation-icon.svg" className="w-6 h-6" />
                <span className="font-zh text-[14px] text-[#A7B2CC] font-bold">⟪奇異點工作坊⟫ 講座</span>
              </div>
              <div className="flex items-end justify-between">
                <span className="font-zh text-[14px] text-[#FBFCFE] font-bold">參與人數</span>
                <div className="flex items-end gap-1">
                  <span className="font-en text-[#FBFCFE] text-[48px] min-[900px]:text-[64px] lg:text-[96px] font-bold leading-none">
                    <CountUp end={1000} />+
                  </span>
                </div>
              </div>
              <div className="font-zh text-[14px] text-[#A7B2CC] text-right text-sm">累計 10 場講座</div>
            </div>
          </div>
              </div>
      </section>
        
          </div>
          
          
          
          
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

          <div className="grid grid-cols-1  min-[1280px]:grid-cols-2 gap-8 mt-6">
          <div className="group w-[240px] h-[230px]  bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center">   
                    <img src="/media/poster-1.png" className="relative"/>
                    <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                      <span className="font-zh">焦點工作坊-大一新起點</span>
                    </div>
                  </div>
                </div>
          
          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-2.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <span className="font-zh">奇異點工作坊-復盤寫作術 x AI</span>
              </div>
            </div>
          </div>

          
          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-4.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <span className="font-zh">2025 PyDay 工作坊</span>
              </div>
            </div>
          </div>

          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
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


          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
            <div className="absolute inset-0 flex flex-col items-center justify-center">   
              <img src="/media/poster-7.png" className="relative"/>
              <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#3e455892] to-[#F7C396]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute bottom-4 left-0 w-full flex justify-center gap-1 text-[#FBFCFE] font-bold text-[14px] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                <span className="font-zh">奇異點工作坊-國民AI女友</span>
              </div>
            </div>
          </div>
          
          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
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
          
          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
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

          <div className="group w-[240px] h-[230px] bg-[#FBFCFE] rounded-2xl relative overflow-hidden box-shadow hover:scale-105 duration-300">
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