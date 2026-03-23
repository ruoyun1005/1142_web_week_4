"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackHomeButton(){

    const pathname = usePathname();
    if (pathname === "/") return null;

    return(
        <a href="/" 
        className="w-[40px] h-[40px] rounded-full bg-[#FBFCFE] shadow-sm shadow-blue-500/20 flex items-center justify-center hover:bg-[#A7B2CC] transition-colors duration-300"
        aria-label="Back to home">
            <img src="/arrow-left-short.svg" className="transition-all duration-300 group-hover:invert group-hover:brightness-0"/>
        </a> 
        
    )
       
}