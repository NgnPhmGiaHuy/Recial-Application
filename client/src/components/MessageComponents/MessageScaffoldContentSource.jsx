"use client"

import { Tooltip } from "react-tooltip";
import { useRef, useState } from "react";

import { formatTimestampForCover } from "@/utils";
import { useClickOutside, useToggleState } from "@/hooks";
import { DeleteButton, MessageScaffoldItemSourceDelete, SmallMoreButton } from "@/components";

const MessageScaffoldContentSource = ({ messageProps }) => {
    const buttonRef = useRef(null);
    const deleteRef = useRef(null);

    const [showButton, setShowButton] = useState(false);
    const [showDelete, setShowDelete, handleShowDelete] = useToggleState(false);
    const [showDeleteScaffold, setShowDeleteScaffold, handleShowDeleteScaffold] = useToggleState(false);

    useClickOutside(deleteRef, showDelete, handleShowDelete);

    return (
        <div onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
            <div className="mx-[8px] mb-[12px] flex flex-col relative">
                <div className="flex flex-row-reverse flex-shrink grow relative">
                    <div className="max-w-[calc(100%-70px-5px)] flex flex-col justify-end self-stretch relative">
                        <div className="flex flex-col grow justify-end self-stretch">
                            <div data-tooltip-id={messageProps._id} data-tooltip-content={formatTimestampForCover(messageProps?.created_at)} className="flex flex-col items-end relative">
                                <div className={`${messageProps.message_content ? "bg-lime-500" : "border border-solid border-lime-500 min-h-[44px]"} max-w-[564px] px-[12px] py-[8px]  rounded-xl overflow-hidden relative`}>
                                    <span className="block text-[14px] text-left text-white font-normal break-words relative leading-5">
                                        <div className={`${messageProps?.message_content ? "text-white" : "text-lime-500" } my-[4px] text-left whitespace-pre-wrap`}>
                                            { messageProps?.message_content ? messageProps?.message_content : "This message had been deleted."}
                                        </div>
                                    </span>
                                </div>
                                <Tooltip id={messageProps._id} className="z-20"/>
                            </div>
                        </div>
                    </div>
                    <div className="mr-[12px] flex items-center justify-center relative">
                        <SmallMoreButton state={showDelete ? showDelete : showButton} buttonRef={buttonRef} onClick={handleShowDelete}/>
                        { showDelete && (
                            <div ref={deleteRef} className="top-0 left-[20px] absolute">
                                <DeleteButton buttonRef={deleteRef} onClick={handleShowDeleteScaffold}/>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
            { showDeleteScaffold && (
                <MessageScaffoldItemSourceDelete messageProps={messageProps} handleShowScaffold={handleShowDeleteScaffold}/>
            ) }
        </div>
    );
};

export default MessageScaffoldContentSource;