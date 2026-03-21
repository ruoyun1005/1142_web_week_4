import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-[#F1F1F1] flex flex-row sm:flow-row gap-5 p-8">
        <div className = "flex justify-center items-center flex-col">
          <div className="bg-[#FBFCFE] rounded-2xl min-w-[250px] w-full sm:w-[250px] h-full justify-start items-center flex flex-col p-[24px] pt-[24px] overflow-x-hidden shadow-sm shadow-blue-500/20">
              <img src="/person.svg" alt="avator" width={100} height={100}/>
              <div className="font-zh font-bold text-base mt-4">羅如妘</div>
              <div className="font-en text-sm tracking-wider">Ru yun, Luo</div>
              <div className="flex gap-3 my-4 items-center">
                <a href="https://www.instagram.com/ruoyun1005/" className="group">
                  <div className="bg-[#FFFEFA] hover:bg-[#A7B2CC] w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors duration-300 ">
                    <img src="/Instagram.svg" className="w-[20px] h-[20px] transition-all duration-300 group-hover:invert group-hover:brightness-0" />
                  </div>
                </a>
                <a href="https://github.com/ruoyun1005" className="group">
                  <div className="bg-[#FFFEFA] hover:bg-[#A7B2CC] w-[40px] h-[40px] rounded-full flex justify-center items-center transition-colors duration-300 ">
                    <img src="/Github.svg" className="w-[20px] h-[20px] transition-all duration-300 group-hover:invert group-hover:brightness-0" />
                  </div>
                </a>
              </div>
              <div className="w-full flex flex-col gap-2 justify-center items-center">
            <button className="w-[200px] h-[80px] bg-center mt-4 rounded-lg bg-[#EEF2F5] hover:bg-[#A7B2CC] transition-colors duration-300 flex justify-center items-center font-en font-bold text-lg hover:text-white">ABOUT</button>
            <button className="w-[200px] h-[80px] bg-center rounded-lg bg-[#EEF2F5] hover:bg-[#A7B2CC] transition-colors duration-300 flex justify-center items-center hover:text-white">
              <span className="font-en font-bold text-lg text-center ">MATHEMATIC PROJECT</span>
            </button>
            <button className="w-[200px] h-[80px] bg-center rounded-lg bg-[#EEF2F5] hover:bg-[#A7B2CC] transition-colors duration-300 flex justify-center items-center hover:text-white">
              <span className="font-en font-bold text-lg text-center ">AI OUTREACH</span>
            </button>
            <button className="w-[200px] h-[80px] bg-center rounded-lg bg-[#EEF2F5] hover:bg-[#A7B2CC] transition-colors duration-300 flex justify-center items-center hover:text-white">
              <span className="font-en font-bold text-lg text-center ">GRAPHIC DESIGN</span>
            </button>
            <button className="w-[200px] h-[80px] bg-center rounded-lg bg-[#EEF2F5] hover:bg-[#A7B2CC] transition-colors duration-300 flex justify-center items-center hover:text-white">
              <span className="font-en font-bold text-lg text-center ">3D GAME</span>
            </button>
            
          </div>
            </div>
          
      </div>
      

      <div className="w-full h-full bg-[#FBFCFE] flex flex-col justify-start items-start rounded-2xl px-[30px] py-[30px] shadow-sm shadow-blue-500/20">

      
      </div>
      </div>
      
      
    </>
  );
}
