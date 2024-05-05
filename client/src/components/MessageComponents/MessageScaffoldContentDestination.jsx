"use client"

import Image from "next/image";
import { Tooltip } from "react-tooltip";

import { formatTimestampForCover } from "@/utils";

const MessageScaffoldContentDestination = ({ messageProps }) => {
    return (
        <div>
            <div className="mx-[8px] mb-[12px] flex flex-row relative">
                <div data-tooltip-id={messageProps?.user?._id} data-tooltip-content={messageProps?.user?.profile?.username || messageProps?.user?.profile?.firstname + messageProps?.user?.profile?.lastname} className="pl-[14px] pr-[8px] flex flex-col justify-end self-stretch">
                    <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full overflow-hidden relative">
                        <Image src={messageProps?.user?.profile?.profile_picture_url} alt={`${messageProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                    <Tooltip id={messageProps?.user?._id} className="z-20"/>
                </div>
                <div className="flex flex-shrink grow relative">
                    <div className="max-w-[calc(100%-70px-5px)] flex flex-col justify-end self-stretch relative">
                        <div className="flex flex-col grow justify-end self-stretch">
                            <div data-tooltip-id={messageProps._id} data-tooltip-content={formatTimestampForCover(messageProps?.created_at)} className="flex flex-col items-end relative">
                                <div className="max-w-[564px] px-[12px] py-[8px] bg-zinc-200 rounded-xl overflow-hidden relative">
                                    <span
                                        className="block text-[14px] text-left text-black font-normal break-words relative leading-5">
                                        <div className="my-[4px] text-left text-black whitespace-pre-wrap">
                                            { messageProps?.message_content }
                                        </div>
                                    </span>
                                </div>
                                <Tooltip id={messageProps._id} className="z-20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldContentDestination;