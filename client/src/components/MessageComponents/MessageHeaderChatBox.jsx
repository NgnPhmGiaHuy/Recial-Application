"use client"

import Link from "next/link";
import { Tooltip } from "react-tooltip";

const MessageHeaderChatBox = ({ messageQuickSettingButtonRef, handleMessageQuickSettingButton }) => {
    return (
        <div>
            <div
                className="mx-[16px] mb-[12px] mt-[20px] flex flex-row flex-shrink-0 items-center justify-between relative">
                <div className="flex flex-col flex-shrink basis-0 grow relative">
                    <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative">
                        <div className="flex flex-col">
                            <span className="block text-[22px] text-black text-left break-words font-bold leading-7">
                                <h2>ChatBox</h2>
                            </span>
                        </div>
                        <div className="flex flex-row flex-shrink-0 items-end justify-center basis-auto">
                            <div>
                                <div ref={messageQuickSettingButtonRef} data-tooltip-id="message-quick-setting" data-tooltip-content="Options" className="w-[32px] h-[32px] mx-[4px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden" onClick={handleMessageQuickSettingButton}>
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                        </svg>
                                    </i>
                                </div>
                                <Tooltip id="message-quick-setting" className="z-20"/>
                            </div>
                            <div>
                                <div data-tooltip-id="message-page" data-tooltip-content="Open Message Page" className="w-[32px] h-[32px] mx-[4px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden">
                                    <Link href="/messages">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="none" className="w-5 h-5">
                                                <path d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"/>
                                            </svg>
                                        </i>
                                    </Link>
                                </div>
                                <Tooltip id="message-page" className="z-20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageHeaderChatBox;