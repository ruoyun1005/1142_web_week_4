'use client';

import TextType from "@/app/components/TextType";

export default function Home() {
  return (
    
      <div className="h-full w-full flex justify-start items-center ">
        <div className="flex justify-center content-center font-en font-bold text-6xl tracking-widest">
          <TextType 
          text={["Hello! I’m Ru yun Luo, Welcome to my website!","Build some amazing experiences!"]}
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
      

    
  );
}
