'use client';

import TextType from "@/app/components/TextType";
import LiquidEther from "./components/LiquidEther";

export default function Home() {
  return (
    
      <div className="w-full h-full flex">

        <div className="w-full h-full relative overflow-hidden">
        
        <LiquidEther

          colors={['#F7F8FA', '#E9EDF4', '#D6DDEA', '#A7B2CC', '#C9D3E6']}
          cursorSize={120}
          isViscous
          viscous={10}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.001}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={5000}
          autoRampDuration={0.6}
      />
     

          <div className=" flex justify-start content-center font-en font-bold text-5xl px-16 tracking-widest absolute top-1/2 translate-y-[-50%]">
          <TextType 
          text={["Hello! I’m Ru yun Luo, \nWelcome to my website!","Build some amazing experiences!"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="_"
          deletingSpeed={50}
          variableSpeed={{ min: 60, max: 120 }}
          onSentenceComplete={() => {}}
          cursorBlinkDuration={0.5}
          />

        
        </div>
        </div>
        
      </div>
      

    
  );
}
