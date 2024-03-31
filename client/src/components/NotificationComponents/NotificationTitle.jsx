"use client"

import { Tooltip } from "react-tooltip";

const NotificationTitle = ({ noticeQuickSettingRef, handleNoticeQuickSettingButton }) => {
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
                                <div ref={noticeQuickSettingRef} className="w-[32px] h-[32px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden"
                                     onClick={handleNoticeQuickSettingButton}
                                     data-tooltip-id="notification-setting" data-tooltip-content="Options">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                        </svg>
                                    </i>
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