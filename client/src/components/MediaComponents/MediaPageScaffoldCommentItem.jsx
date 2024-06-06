"use client"

import { useState } from "react";

import { useToggleState } from "@/hooks";
import { MediaPageScaffoldCommentItemCard, MediaPageScaffoldFooter } from "@/components";

const MediaPageScaffoldCommentItem = ({ commentProps, isReply }) => {
    const [displayedComments, setDisplayedComments] = useState(5);

    const [showMoreButton, setShowMoreButton] = useState(false);
    const [showReplyPanel, setShowReplyPanel, handleShowReplyPanel] = useToggleState(false);
    const [showMoreComments, setShowMoreComments, handleShowMoreComment] = useToggleState(false);

    const handleShowAllComments = () => {
        setDisplayedComments(commentProps?.comment_reply?.length);
        return setShowMoreComments(true);
    };

    return (
        <div className={`${isReply ? null : "mb-[20px]"} w-full`} onMouseEnter={() => setShowMoreButton(true)} onMouseLeave={() => setShowMoreButton(false)}>
            <MediaPageScaffoldCommentItemCard commentProps={commentProps} showMoreButton={showMoreButton} handleShowReplyPanel={handleShowReplyPanel} />
            { showReplyPanel && (
                <div className="pl-[52px]">
                    <div className="mb-[16px]">
                        <MediaPageScaffoldFooter commentProps={commentProps} isComment={true} handleShowReplyPanel={handleShowReplyPanel}/>
                    </div>
                </div>
            ) }
            { commentProps?.comment_reply && commentProps?.comment_reply?.length ? (
                <div className="pl-[52px] flex flex-row items-center justify-between relative">
                    { showMoreComments ? (
                        <>
                            <div className="w-full h-full flex flex-col relative">
                                { commentProps?.comment_reply?.slice(0, displayedComments).map((value, index) => (
                                    <MediaPageScaffoldCommentItem key={index} commentProps={value} isReply={true}/>
                                )) }
                                { displayedComments < commentProps?.comment_reply?.length && (
                                    <div className="pl-[52px] flex flex-row items-center justify-between relative">
                                        <div className="flex flex-row items-center justify-center cursor-pointer group relative" onClick={handleShowAllComments}>
                                            <span className="text-[14px] text-zinc-500 text-left font-semibold break-words relative leading-5 group-hover:underline">
                                                <span className="overflow-hidden relative">
                                                    See more {commentProps?.comment_reply?.length - displayedComments} comments
                                                </span>
                                            </span>
                                            <div className="w-[14px] h-[14px] ml-[6px] flex items-center justify-center overflow-hidden relative">
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                    </svg>
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                ) }
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-row items-center justify-center cursor-pointer group relative" onClick={handleShowMoreComment}>
                            <span className="text-[14px] text-zinc-500 text-left font-semibold break-words relative leading-5 group-hover:underline">
                                <span className="overflow-hidden relative">
                                    See more {commentProps?.comment_reply?.length} comments
                                </span>
                            </span>
                            <div className="w-[14px] h-[14px] ml-[6px] flex items-center justify-center overflow-hidden relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    ) }
                </div>
            ) : null }
        </div>
    );
};

export default MediaPageScaffoldCommentItem;