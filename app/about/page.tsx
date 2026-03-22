import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center tracking-widest tracking-[2em]">ABOUT ME</div>
        <div className="font-zh text-sm">喜歡數學  也熱愛設計</div>
        <div className="font-zh text-sm">期待在理性與美感之間 找到屬於自己的火花</div>
        <div className="flex justify-end">
            <div className="flex flex-wrap items-center gap-8 font-en text-[10px] font-semibold tracking-[0.5em] leading-[2] mt-2 ml-2">
                <div className="bg-[#7C8BB3] text-white rounded-md px-2 flex justify-center items-center">#MATH</div>
                <div className="bg-[#7C8BB3] text-white rounded-md px-2 flex justify-center items-center">#DESIGN</div>
                <div className="bg-[#7C8BB3] text-white rounded-md px-2 flex justify-center items-center">#AI EDUCATION</div>
        </div>
        </div>
        
        <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center tracking-widest tracking-[2em]">EDUCATION</div>
        <div className="text-zh text-sm gap-3 leading-[2]">
            <div>主修：國立政治大學 應用數學系</div>
            <div>雙主修：數位內容學位學程</div>
        </div>
        <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center tracking-widest tracking-[2em]">EXPERIMENCE</div>
        <ul className="list-none font-zh text-sm leading-[2.5]">
            <li>SITCON學生計算機年會 設計組組長</li>
            <li>應用數學系 系學會美宣</li>
            <li>AI普羅米修斯計劃：型塑政大教育的未來構圖 研究獎助生</li>
            <li>生成式AI：文字與圖像生成的原理與實務 教學助理</li>
            <li>生活中的未來語言：數學、Python與AI 教學助理</li>
            <li>設計思考與人工智慧 教學助理</li>
        </ul>
        <div className="w-full h-[40px] mt-8 flex justify-start content-center font-en font-bold text-xl text-center tracking-widest tracking-[2em]">SKILLS</div>
        <div className="flex flex-wrap justify-center items-center gap-4">
            <img src="/illustrator.svg" alt="illustrator" />
            <img src="/photoshop.svg" alt="" />
            <img src="/aftereffect.svg" alt="" />
            <img src="/affinity.svg" alt="" />
            <img src="/figma.svg" alt="" />
            <img src="/blender.svg" alt="" />
            <img src="/unity.svg" alt="" />
            <img src="vscode.svg" alt="" />
            <img src="procreate.svg" alt="" />
        </div>

      </div>
      

      
      
      
      
    </>
  );
}