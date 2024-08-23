"use client"

import { Tooltip } from "react-tooltip";

import { StackAddIcon } from "@/components";

const MediumFollowButton = () => {
    return (
        <div className="w-[180px]">
            <div className="flex justify-center cursor-pointer relative">
                <div data-tooltip-id="follow-button" data-tooltip-content="Follow" className="w-full h-[36px] px-[40px] flex flex-row flex-nowrap items-center justify-center rounded-xl bg-lime-500 hover:bg-lime-700 overflow-hidden relative transition-all">
                    <div className="flex flex-row items-center justify-center text-white gap-2 relative">
                        <div className="w-[16px] h-[16px] flex items-center justify-center overflow-hidden relative">
                            <StackAddIcon width={16} height={16} />
                        </div>
                        <div className="flex flex-shrink-0 items-center justify-center relative">
                            <span className="block text-[14px] text-center font-semibold break-words relative leading-5">
                                Follow
                            </span>
                        </div>
                    </div>
                </div>
                <Tooltip id="follow-button" className="z-20"/>
            </div>
        </div>
    );
};

export default MediumFollowButton;