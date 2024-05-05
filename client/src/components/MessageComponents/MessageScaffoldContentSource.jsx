"use client"

import { Tooltip } from "react-tooltip";

import { formatTimestampForCover } from "@/utils";

const MessageScaffoldContentSource = ({ messageProps }) => {
    return (
        <div>
            <div className="mx-[8px] mb-[12px] flex flex-col relative">
                <div className="flex flex-row-reverse flex-shrink grow relative">
                    <div className="max-w-[calc(100%-70px-5px)] flex flex-col justify-end self-stretch relative">
                        <div className="flex flex-col grow justify-end self-stretch">
                            <div data-tooltip-id={messageProps._id} data-tooltip-content={formatTimestampForCover(messageProps?.created_at)} className="flex flex-col items-end relative">
                                <div className="max-w-[564px] px-[12px] py-[8px] bg-lime-500 rounded-xl overflow-hidden relative">
                                    <span className="block text-[14px] text-left text-white font-normal break-words relative leading-5">
                                        <div className="my-[4px] text-left text-white whitespace-pre-wrap">
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

export default MessageScaffoldContentSource;