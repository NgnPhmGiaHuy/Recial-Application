"use client"

import Link from "next/link";
import { Tooltip } from "react-tooltip";

import { ChatBubbleLeftIcon, EllipsisHorizontalIcon } from "@/components";

const MessageHeaderChatBox = ({ forwardRef, handleOnclick }) => {
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
                                <div ref={forwardRef} data-tooltip-id="message-quick-setting" data-tooltip-content="Options" className="w-[32px] h-[32px] mx-[4px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden" onClick={handleOnclick}>
                                    <EllipsisHorizontalIcon fill="none" stroke="currentColor" width={20} height={20} />
                                </div>
                                <Tooltip id="message-quick-setting" className="z-20"/>
                            </div>
                            <div>
                                <div data-tooltip-id="message-page" data-tooltip-content="Open Message Page" className="w-[32px] h-[32px] mx-[4px] flex items-center justify-center relative rounded-xl cursor-pointer hover:bg-zinc-100 transition-all overflow-hidden">
                                    <Link href="/messages">
                                        <ChatBubbleLeftIcon fill="none" stroke="currentColor" width={20} height={20} />
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