"use client"

import { useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { postItemCommentSortList } from "@/constants/PostConstants";
import { PostItemCommentInput, PostItemCommentScaffold, QuickSettingItem } from "@/components";

const PostItemComment = ({ commentRef, props }) => {
    const commentSortContentRef = useRef(null);

    const [visibleComments, setVisibleComments] = useState(3);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);
    const [showCommentSortContent, setShowCommentSortContent, handleShowCommentSortContent] = useToggleState(false);

    const loadMoreComments = () => {
        const remainingComments = props.postProps.comment.length - visibleComments;
        const loadMore = remainingComments > 3 ? 3 : remainingComments;
        setVisibleComments((prevVisible) => prevVisible + loadMore);
        if (visibleComments + loadMore >= props.postProps.comment.length) {
            setLoadMoreClicked(true);
        }
    };

    useClickOutside(commentSortContentRef, showCommentSortContent, setShowCommentSortContent);

    return (
        <div ref={commentRef} className="flex flex-col justify-center relative">
            <PostItemCommentInput userData={props.userData} postProps={props.postProps}/>
            <div className="mx-[16px] mb-[8px] relative">
                <div className="w-fit flex flex-col cursor-pointer relative" onClick={handleShowCommentSortContent}>
                    <span className="flex flex-row items-center justify-between text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5">
                        <span>
                            Most relevant
                        </span>
                        <span>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                    <path d="M5.16108 10.0731C4.45387 9.2649 5.02785 8 6.1018 8H17.898C18.972 8 19.5459 9.2649 18.8388 10.0731L13.3169 16.3838C12.6197 17.1806 11.3801 17.1806 10.6829 16.3838L5.16108 10.0731ZM6.65274 9.5L11.8118 15.396C11.9114 15.5099 12.0885 15.5099 12.1881 15.396L17.3471 9.5H6.65274Z"/>
                                </svg>
                            </i>
                        </span>
                    </span>
                </div>
                <div>
                    {showCommentSortContent ? (
                        <div ref={commentSortContentRef}
                             className="absolute top-0 left-0 translate-x-[0px] translate-y-[20px] z-50">
                            <div
                                className="relative mt-[15px] rounded-b-md rounded-r-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                <div className="overflow-x-hidden overflow-y-hidden rounded-b-md rounded-r-md bg-white">
                                    <div className="flex flex-col grow items-stretch origin-top-left relative">
                                        <div
                                            className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                            <div className="flex flex-col grow relative">
                                                {postItemCommentSortList.map((value, index) => (
                                                    <QuickSettingItem key={index} settingProps={value}/>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <div>
                {props.postProps?.comment?.slice(0, visibleComments).map((value, index) => (
                    <PostItemCommentScaffold key={index} userData={props.userData} userProps={props.userProps} postProps={value} />
                ))}
            </div>
            {!loadMoreClicked && visibleComments < props.postProps?.comment?.length && (
                <div className="mx-[16px] mb-[8px] relative">
                    <div className="px-[8px] py-[2px] w-fit flex flex-col rounded-md cursor-pointer relative hover:bg-zinc-200 transition-all" onClick={loadMoreComments}>
                        <span className="text-[16px] text-zinc-500 text-left font-bold break-words relative leading-5">
                            <span>Load more comments</span>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostItemComment;