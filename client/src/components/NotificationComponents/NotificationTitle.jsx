"use client"

import { Tooltip } from "react-tooltip";

import { EllipsisHorizontalIcon } from "@/components";

const NotificationTitle = ({ forwardRef, handleOnclick }) => {
    return (
        <div>
            <div className="mx-[16px] mb-[12px] mt-[20px] flex flex-row flex-shrink-0 items-center justify-between relative">
                <div className="flex flex-col flex-shrink basis-0 grow relative">
                    <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative">
                        <div className="flex flex-col">
                            <span className="block text-[24px] text-black text-left break-words font-bold leading-7">
                                <span className="overflow-hidden relative">
                                    Notification
                                </span>
                            </span>
                        </div>
                        <div className="flex flex-col flex-shrink-0 items-end justify-center basis-auto">
                            <div>
                                <div ref={forwardRef} className="w-[32px] h-[32px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden"
                                     onClick={handleOnclick}
                                     data-tooltip-id="notification-setting" data-tooltip-content="Options">
                                    <EllipsisHorizontalIcon stroke="currentColor"/>
                                </div>
                                <Tooltip id="notification-setting" className="z-20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationTitle;