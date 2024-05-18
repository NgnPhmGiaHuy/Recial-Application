"use client"

import Image from "next/image";
import { Tooltip } from "react-tooltip";

import { useMessageScaffold } from "@/hooks";
import { formatTimestampForCover, handleDeleteMessage } from "@/utils";
import { DeleteButton, MessageDeleteScaffold, MessageScaffoldContentSourceImage, SmallMoreButton } from "@/components";

const MessageScaffoldContentDestination = ({ messageProps }) => {
    const { buttonRef, deleteRef, deleteScaffoldRef, showButton, setShowButton, showDelete, handleShowDelete, showDeleteScaffold, handleShowDeleteScaffold, conservationProps } = useMessageScaffold();

    return (
        <div onMouseOver={() => setShowButton(true)} onMouseOut={() => setShowButton(false)}>
            <div className="mx-[8px] mb-[12px] flex flex-row relative">
                <div data-tooltip-id={messageProps?.user?._id} data-tooltip-content={messageProps?.user?.profile?.username || messageProps?.user?.profile?.firstname + messageProps?.user?.profile?.lastname} className="pl-[14px] pr-[8px] flex flex-col justify-end self-stretch">
                    <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full overflow-hidden relative">
                        <Image src={messageProps?.user?.profile?.profile_picture_url} alt={`${messageProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                    <Tooltip id={messageProps?.user?._id} className="z-20"/>
                </div>
                { messageProps?.message_content_url?.length > 0 && !messageProps?.message_content ? null : (
                    <div className="flex flex-shrink flex-row grow relative">
                        <div className="max-w-[calc(100%-70px-5px)] flex flex-col justify-end self-stretch relative">
                            <div className="flex flex-col grow justify-end self-stretch">
                                <div data-tooltip-id={messageProps._id} data-tooltip-content={formatTimestampForCover(messageProps?.created_at)} className="flex flex-col items-end relative">
                                     <div className={`${messageProps.message_content ? "bg-zinc-200" : "border border-solid border-zinc-200 min-h-[44px]"} max-w-[564px] px-[12px] py-[8px]  rounded-xl overflow-hidden relative`}>
                                        <span className="block text-[14px] text-left text-black font-normal break-words relative leading-5">
                                            <div className={`${messageProps?.message_content ? "text-black" : "text-zinc-500"} my-[4px] text-left whitespace-pre-wrap`}>
                                                {messageProps?.message_content ? messageProps?.message_content : "This message had been deleted."}
                                            </div>
                                        </span>
                                    </div>
                                    <Tooltip id={messageProps._id} className="z-20"/>
                                </div>
                            </div>
                        </div>
                        <div className="ml-[12px] flex items-center justify-center relative">
                        <SmallMoreButton state={showDelete ? showDelete : showButton} buttonRef={buttonRef} onClick={handleShowDelete}/>
                            { showDelete && (
                                <div ref={deleteRef} className="top-0 left-[20px] absolute">
                                    <DeleteButton buttonRef={deleteRef} onClick={handleShowDeleteScaffold}/>
                                </div>
                            ) }
                        </div>
                    </div>
                ) }
            </div>
            { messageProps?.message_content_url?.length > 0 ? (
                <div className="ml-[48px]">
                    <MessageScaffoldContentSourceImage messageProps={messageProps} deleteRef={deleteRef} buttonRef={buttonRef} showDelete={showDelete} showButton={showButton} handleShowDelete={handleShowDelete} handleShowDeleteScaffold={handleShowDeleteScaffold}/>
                </div>
            ) : null}
            { showDeleteScaffold && (
                <MessageDeleteScaffold
                    title="Delete this message from you?"
                    subtitle="This message will be removed for you. Other chat members will still be able to see it."
                    width={500}
                    forwardRef={deleteScaffoldRef}
                    handleShowScaffold={handleShowDeleteScaffold}
                    handleDeleteFunction={() => handleDeleteMessage(messageProps?._id, conservationProps?._id, handleShowDeleteScaffold)}
                />
            ) }
        </div>
    );
};

export default MessageScaffoldContentDestination;