"use client"

import { Tooltip } from "react-tooltip";

import { ImageIcon } from "@/components";

const IconButton = ({ icon, tooltip }) => {
    return (
        <div className="w-[50px]">
            <div data-tooltip-id={tooltip.id} data-tooltip-content={tooltip.content} className="w-full flex flex-col items-center justify-center cursor-pointer relative">
                <div className="h-[36px] px-[16px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-center rounded-xl overflow-hidden bg-zinc-200 hover:bg-zinc-300 relative transition-all">
                    <ImageIcon src={icon} width={16} height={16} />
                </div>
                <Tooltip id={tooltip.id} className="z-20"/>
            </div>
        </div>
    );
};

export default IconButton;