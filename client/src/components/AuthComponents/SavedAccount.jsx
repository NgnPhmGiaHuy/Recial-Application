"use client"

import Image from "next/image";
import React, { useState } from "react";

import Avatar from "/public/images/Avatars/Avatar.png";

const SavedAccount = ({ userName }) => {
    const [isSavedAccountHover, setIsSavedAccountHover] = useState(false);

    return (
        <div className={`flex relative w-[145px] h-[165px] mr-[32px] bg-teal-400 bg-opacity-20 rounded-lg transition-all ${isSavedAccountHover ? "shadow-lg" : null}`}
            onMouseOver={() => setIsSavedAccountHover(true)}
            onMouseOut={() => setIsSavedAccountHover(false)}>
            <div className={`absolute ${isSavedAccountHover ? "-top-1 -right-1" : " top-0 right-1"} transition-all`}>
                <button
                    className={`${isSavedAccountHover ? "bg-white shadow-[0_3px_8px_rgba(0,0,0,0.24)]" : "bg-zinc-500 transition-all"} rounded-full p-[1px]`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={`${isSavedAccountHover ? "white" : "gray"}`}
                         viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke={`${isSavedAccountHover ? "black" : "white"}`}
                         className={`${isSavedAccountHover ? "w-5 h-5" : "w-3 h-3"} transition-all`}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <div className="flex flex-col items-center w-full h-full p-[16px]">
                <div className="w-[76px] h-[76px] rounded-full relative overflow-hidden">
                    <Image src={Avatar} alt="Avatar" fill={true} sizes="(max-width: 768px) 100vw" style={{objectFit: "cover"}}/>
                </div>
                <div className="flex flex-col items-center mt-[8px]">
                    <div className="text-black text-[15px] font-medium leading-normal">
                        <span>{userName}</span>
                    </div>
                    <div className="text-gray-500 text-[13px] font-light leading-normal">
                        Active 1 days ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedAccount;