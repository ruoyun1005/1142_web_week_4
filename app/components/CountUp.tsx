"use client";

import { useEffect, useState } from "react";


type CountupNum = {
    end: number;
};

export default function Countup({end} : CountupNum){
    
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("start animation");

        let cerrent = 0;
        const timer = setInterval(() => {
            cerrent += 10;

            if(cerrent >= end){
                cerrent = end;
                clearInterval(timer);
            }
            
            setCount(cerrent);
        }, 20);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <span>{count}</span>
    )
}