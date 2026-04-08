"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { div } from "three/tsl";

type DesignCardProps = {
    title: string;
    images: string[];
  };  

export default function DesignCard({title, images} : DesignCardProps){

    const [current, setCurrent] = useState(0);

    const previmg = () =>{
        setCurrent((prev) => (prev === 0? images.length -1: prev -1));
    };

    const nextimg = () =>{
        setCurrent((prev) => (prev === images.length -1 ? 0: prev +1));
    };

    return (
        <>
        <div className="flex w-full h-full flex-col bg-[#F2F6FF] rounded-2xl outline-6 outline-[#E1E9FC] box-shadow p-4">
            <div className="rounded-[28px] border-2 border-[#C9D4EE] bg-[#FBFCFE] p-1">
                <div className="relative overflow-hidden rounded-[24px]  bg-[#FBFCFE]">
                    <img src={images[current]}
                         alt={title}
                         className="block h-full w-full object-cover"/>
                </div>
            </div>
            <div className="flex flex-row justify-center gap-4 my-2">
                        <button
                        type="button"
                        onClick={previmg}
                        className="text-[#A7B2CC] hover:text-[#5C5C77] transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex items-center gap-4">
                            {images.map((_, index) => (
                                <button
                                key={index}
                                type = "button"
                                onClick = {() => setCurrent(index)}
                                className= {`w-2.5 h-2.5 rounded-full transition-all ${
                                    current === index ? "bg-[#5C5C77]": "bg-[#A7B2CC]"
                                }`}
                                />
                            ))}
                        </div>
                        <button
                        type="button"
                        onClick={nextimg}
                        className="text-[#A7B2CC] hover:text-[#5C5C77] transition-colors"
                        >
                            <ChevronRight size={20} />
                    </button>
                    </div>
                    <div className="font-zh text-[16px] font-bold flex justify-center mt-2">{title}</div>

        </div>
        
        </>
    );
}