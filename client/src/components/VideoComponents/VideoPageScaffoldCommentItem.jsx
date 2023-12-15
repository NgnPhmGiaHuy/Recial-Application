"use client"

import Image from "next/image";
import {useCallback, useEffect, useRef, useState} from 'react';

import {formatDate} from "@/utils";
import {VideoPageScaffoldFooter} from "@/components";
import {useClickOutside} from "@/hooks";

const VideoPageScaffoldCommentItem = ({videoProps, isReply}) => {
    const reportButtonRef = useRef(null);

    const [displayedComments, setDisplayedComments] = useState(5);

    const [showReplyPanel, setShowReplyPanel] = useState(false);
    const [showMoreButton, setShowMoreButton] = useState(false);
    const [showReportPanel, setShowReportPanel] = useState(false);
    const [showMoreComments, setShowMoreComments] = useState(false);

    const handleShowMoreComment = useCallback(() => {
        setShowMoreComments((prevShowMoreComments) => !prevShowMoreComments);
    }, []);

    const handleShowReportPanel = useCallback(() => {
        setShowReportPanel((prevShowReportPanel) => !prevShowReportPanel);
    }, []);

    const handleShowReplyPanel = useCallback(() => {
        setShowReplyPanel((prevShowReplyPanel) => !prevShowReplyPanel);
    }, []);

    const handleShowAllComments = () => {
        setDisplayedComments(videoProps.replies.length);
        setShowMoreComments(true);
    };

    useClickOutside(reportButtonRef, showReportPanel, setShowReportPanel)

    return (
        <div className={`${isReply ? null : "mb-[20px]"} w-full`} onMouseEnter={() => setShowMoreButton(true)} onMouseLeave={() => setShowMoreButton(false)}>
            <div className="mb-[8px] flex flex-row items-start relative">
                <div className="mr-[12px] flex-[0_0_40px]">
                    <a href="">
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full overflow-hidden relative">
                            <Image src={videoProps.user.profile_picture_url} alt={`${videoProps.user.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </a>
                </div>
                <div className="flex-[1_1_auto] flex flex-col relative">
                    <div className="flex flex-row items-center">
                        <a href="">
                            <span className="block text-[14px] text-black text-left font-semibold break-words relative leading-5 hover:underline transition-all">
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {videoProps.user.username}
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="block text-[16px] text-black text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden text-ellipsis line-clamp-3 relative">
                                {videoProps.comment_text || videoProps.replies_text}
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="w-[64px] text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                {formatDate(videoProps.updated_at)}
                            </span>
                        </span>
                        <div className="ml-[4px] flex cursor-pointer" onClick={handleShowReplyPanel}>
                            <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5 hover:text-zinc-700 transition-all">
                                <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                    Reply
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="ml-[18px] pt-[24px] pr-[2px] w-[24px] flex flex-col flex-[0_0_24px] items-center justify-center text-zinc-500 cursor-pointer relative hover:text-zinc-700 transition-all">
                    <div className={`${showMoreButton ? "flex" : "hidden"} w-[24px] h-[24px] mt-[-24px] text-black rounded-full relative hover:bg-zinc-100`} onClick={handleShowReportPanel}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </i>
                        {showReportPanel ? (
                            <div ref={reportButtonRef} className="top-[calc(100%+16px)] right-[-6px] rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white absolute z-10">
                                <div className="min-w-[180px] px-[16px] py-[8px]">
                                    <div className="py-[8px] flex items-center justify-center cursor-pointer text-black hover:text-lime-500 transition-all">
                                        <span className="flex items-center text-[16px] font-bold break-words whitespace-nowrap relative leading-5">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                                                </svg>
                                            </i>
                                            <span className="ml-[12px] overflow-hidden relative">
                                                Report
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <div className="w-full h-fit flex flex-col items-center justify-center rounded-full overflow-hidden relative transition-all">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </i>
                    </div>
                    <div className="flex items-center">
                        <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {videoProps.likes_count}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            {showReplyPanel ? (
                <div className="pl-[52px]">
                    <div className="mb-[16px]">
                        <VideoPageScaffoldFooter isComment={true} handleShowReplyPanel={handleShowReplyPanel}/>
                    </div>
                </div>
            ) : null}
            {videoProps.replies && videoProps.replies.length ? (
                <div className="pl-[52px] flex flex-row items-center justify-between relative">
                    {showMoreComments ? (
                        <>
                            <div className="w-full h-full flex flex-col relative">
                                {videoProps.replies.slice(0, displayedComments).map((value, index) => (
                                    <VideoPageScaffoldCommentItem key={index} videoProps={value} isReply={true}/>
                                ))}
                                {displayedComments < videoProps.replies.length && (
                                    <div className="pl-[52px] flex flex-row items-center justify-between relative">
                                        <div className="flex flex-row items-center justify-center cursor-pointer group relative" onClick={handleShowAllComments}>
                                            <span className="text-[14px] text-zinc-500 text-left font-semibold break-words relative leading-5 group-hover:underline">
                                                <span className="overflow-hidden relative">
                                                    See more {videoProps.replies.length - displayedComments} comments
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
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-row items-center justify-center cursor-pointer group relative" onClick={handleShowMoreComment}>
                            <span className="text-[14px] text-zinc-500 text-left font-semibold break-words relative leading-5 group-hover:underline">
                                <span className="overflow-hidden relative">
                                    See more {videoProps.replies.length} comments
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
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default VideoPageScaffoldCommentItem;