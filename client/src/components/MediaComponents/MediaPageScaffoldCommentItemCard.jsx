"use client"

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { formatDate, handleReaction } from "@/utils";
import { useClickOutside, useToggleState } from "@/hooks";
import { EllipsisHorizontalIcon, FlagIcon } from "@/components";

const MediaPageScaffoldCommentItemCard = ({ commentProps, showMoreButton, handleShowReplyPanel }) => {
    const userProps = useSelector((state) => state.user, shallowEqual);

    const reportButtonRef = useRef(null);
    const [showReportPanel, setShowReportPanel, handleShowReportPanel] = useToggleState(false);

    const hasReaction = commentProps.comment_reactions?.includes(userProps?.user?._id);

    useClickOutside(reportButtonRef, showReportPanel, setShowReportPanel);

    return (
        <div>
            <div className="mb-[8px] flex flex-row items-start relative">
                <div className="mr-[12px] flex-[0_0_40px]">
                    <Link href={`/${commentProps?.user?._id}`}>
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full overflow-hidden relative">
                            <Image src={commentProps?.user?.profile?.profile_picture_url} alt={`${commentProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </Link>
                </div>
                <div className="flex-[1_1_auto] flex flex-col relative">
                    <div className="flex flex-row items-center">
                        <Link href={`/${commentProps?.user?._id}`}>
                            <span className="block text-[14px] text-black text-left font-semibold break-words relative leading-5 hover:underline transition-all">
                                <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                    {commentProps?.user?.profile?.username || commentProps?.user?.profile?.firstname + " " + commentProps?.user?.profile?.lastname}
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="block text-[16px] text-black text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden text-ellipsis line-clamp-3 relative">
                                { commentProps?.comment_text }
                            </span>
                        </span>
                    </div>
                    <div className="flex flex-row items-center">
                        <span className="w-[64px] text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                { formatDate(commentProps?.updated_at) }
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
                    <div className={`${showMoreButton ? "flex" : "hidden"} w-[24px] h-[24px] mt-[-24px] text-black rounded-full relative hover:bg-zinc-100`}
                        onClick={handleShowReportPanel}>
                        <EllipsisHorizontalIcon fill="none" stroke="currentColor" />
                        { showReportPanel && (
                            <div ref={reportButtonRef} className="top-[calc(100%+16px)] right-[-6px] rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white absolute z-10">
                                <div className="min-w-[180px] px-[16px] py-[8px]">
                                    <div className="py-[8px] flex items-center justify-center cursor-pointer text-black hover:text-lime-500 transition-all">
                                        <span className="flex items-center text-[16px] font-bold break-words whitespace-nowrap relative leading-5">
                                            <FlagIcon fill="currentColor" stroke="currentColor" />
                                            <span className="ml-[12px] overflow-hidden relative">
                                                Report
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </div>
                    <div onClick={() => handleReaction({ condition: hasReaction, destinationId: commentProps._id, destinationType: "comment" })} className="select-none">
                        <div className="w-full h-fit flex flex-col items-center justify-center rounded-full overflow-hidden relative transition-all">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill={`${hasReaction ? "red" : "none"}`} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </i>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { commentProps?.comment_reactions?.length }
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffoldCommentItemCard;