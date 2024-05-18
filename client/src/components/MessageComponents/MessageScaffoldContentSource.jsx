"use client"

import { Tooltip } from "react-tooltip";

import { useMessageScaffold } from "@/hooks";
import { formatTimestampForCover, handleDeleteMessage } from "@/utils";
import { DeleteButton, MessageDeleteScaffold, MessageScaffoldContentSourceImage, SmallMoreButton } from "@/components";

const MessageScaffoldContentSource = ({ messageProps }) => {
    const { buttonRef, deleteRef, deleteScaffoldRef, showButton, setShowButton, showDelete, handleShowDelete, showDeleteScaffold, handleShowDeleteScaffold, conservationProps } = useMessageScaffold();

    return (
        <div onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)} className="relative">
            { messageProps?.message_content_url?.length > 0 ? (
                <MessageScaffoldContentSourceImage messageProps={messageProps} isReverse={true} deleteRef={deleteRef} buttonRef={buttonRef} showDelete={showDelete} showButton={showButton} handleShowDelete={handleShowDelete} handleShowDeleteScaffold={handleShowDeleteScaffold}/>
            ) : null}
            { messageProps?.message_content_url?.length > 0 && !messageProps?.message_content ? null : (
                <div className="mx-[8px] mb-[12px] flex flex-col relative">
                    <div className="flex flex-row-reverse flex-shrink grow relative">
                        <div className="max-w-[calc(100%-70px-5px)] flex flex-col justify-end self-stretch relative">
                            <div className="flex flex-col grow justify-end self-stretch">
                                <div data-tooltip-id={messageProps._id} data-tooltip-content={formatTimestampForCover(messageProps?.created_at)} className="flex flex-col items-end relative">
                                <div className={`${messageProps.message_content ? "bg-lime-500" : "border border-solid border-lime-500 min-h-[44px]"} max-w-[564px] px-[12px] py-[8px]  rounded-xl overflow-hidden relative`}>
                                    <span className="block text-[14px] text-left text-white font-normal break-words relative leading-5">
                                        <div className={`${messageProps?.message_content ? "text-white" : "text-lime-500"} my-[4px] text-left whitespace-pre-wrap`}>
                                            { messageProps?.message_content ? messageProps?.message_content : "This message had been deleted." }
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
            ) }
            { showDeleteScaffold && (
                <MessageDeleteScaffold
                    title="Delete this message from all people?"
                    subtitle="This message will be unsent for everyone in the chat. Others may have already seen or forwarded it. Unsent messages can still be included in reports."
                    width={650}
                    forwardRef={deleteScaffoldRef}
                    handleShowScaffold={handleShowDeleteScaffold}
                    handleDeleteFunction={() => handleDeleteMessage(messageProps?._id, conservationProps?._id, handleShowDeleteScaffold)}
                />
            ) }
        </div>
    );
};

export default MessageScaffoldContentSource;