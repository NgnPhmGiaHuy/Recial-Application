"use client"

import Image from "next/image";

import { Tooltip } from "react-tooltip";

const IconButton = ({ icon, tooltip }) => {
    return (
        <div className="w-[50px]">
            <div data-tooltip-id={tooltip.id} data-tooltip-content={tooltip.content} className="w-full flex flex-col items-center justify-center cursor-pointer relative">
                <div className="h-[36px] px-[16px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-center rounded-xl overflow-hidden bg-zinc-200 hover:bg-zinc-300 relative transition-all">
                    <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                        <Image src={icon} alt={`${icon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
                <Tooltip id={tooltip.id} className="z-20"/>
            </div>
        </div>
    );
};

export default IconButton;