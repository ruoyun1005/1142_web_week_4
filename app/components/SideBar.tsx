"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar(){

    const pathname = usePathname();

    const linkClass = (href : string) =>
        `w-full h-[80px] rounded-lg transition-colors duration-300 hover:scale-105 flex justify-center items-center font-en font-bold text-lg ${
            pathname === href
            ? "bg-[#A7B2CC] text-white"
        : "bg-[#F2F6FF] text-[#5C5C77] outline-4 outline-[#E1E9FC] hover:bg-[#A7B2CC] hover:text-white hover:outline-[#677BAD]"
        }`;

    return(
        <div className="w-full flex flex-col gap-4 justify-center">
                <Link href="/about">
                  <div className={linkClass("/about")}>
                    ABOUT
                  </div>
                  </Link>

                <Link href="/math">
                  <div className={linkClass("/math")}>
                  MATHEMATIC PROJECT
                  </div>
                </Link>

                <Link href="/ai-outreach">
                  <div className={linkClass("/ai-outreach")}>
                  AI OUTREACH
                  </div>
                </Link>

                <Link href="/graphic">
                  <div className={linkClass("/graphic")}>
                  GRAPHIC DESIGN
                  </div>
                </Link>

                <Link href="/game">
                  <div className={linkClass("/game")}>
                    3D GAME
                  </div>
                </Link>
              </div>
    )

}