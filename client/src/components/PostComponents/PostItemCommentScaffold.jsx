"use client"

import Link from "next/link";
import Image from "next/image";
import {useCallback, useState} from "react";

import {useMostReactedIcons, useOverflowText} from "@/hooks";
import {formatTimeAgoShort, handleFormatNumber} from "@/utils";
import {PostItemCommentInput} from "@/components";

const PostItemCommentScaffold = ({userProps, postProps, isRely}) => {
    const mostReactedIcons = useMostReactedIcons(postProps.comment_reactions);

    const {textRef, showMoreText, isOverflowing, handleShowMoreText} = useOverflowText();

    const [visibleComments, setVisibleComments] = useState(3);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);
    const [showCommentInput, setShowCommentInput] = useState(false);

    const handleShowCommentInput = useCallback(() => {
        setShowCommentInput((prevState) => !prevState)
    }, []);

    const loadMoreComments = () => {
        const remainingComments = postProps.comment_reply.length - visibleComments;
        const loadMore = remainingComments > 3 ? 3 : remainingComments;
        setVisibleComments((prevVisible) => prevVisible + loadMore);
        if (visibleComments + loadMore >= postProps.comment_reply.length) {
            setLoadMoreClicked(true);
        }
    };

    return (
        <article className={`${isRely ? "ml-[16px]" : "mx-[16px]"} mb-[12px] relative`}>
            <div className="flex flex-nowrap items-center relative">
                <Link href={postProps?.user?._id}>
                    <div className="mt-[0px] flex-shrink-0 self-start">
                        <div className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full overflow-hidden relative">
                            <Image src={postProps?.user?.profile_picture_url} alt={`${postProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                </Link>
                <div className="min-h-[40px] ml-[4px] py-[8px] pl-[12px] pr-[64px] flex grow basis-0 bg-zinc-200 rounded-tr-md overflow-hidden">
                    <Link href={postProps?.user?._id}>
                        <div className="min-h-[22px] flex flex-col items-start justify-center">
                            <span className="text-[16px] text-black text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                                    {postProps?.user?.username || postProps?.user?.firstname + " " + postProps?.user?.lastname}
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="min-w-[48px] top-[8px] right-[24px] flex items-center justify-center float-right absolute">
                    <div className="mr-[4px]">
                        <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {formatTimeAgoShort(postProps?.updated_at)}
                            </span>
                        </span>
                    </div>
                    <div className="w-[24px] h-[24px] flex items-center justify-center text-zinc-500 cursor-pointer relative">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div className="ml-[44px] pr-[16px] pb-[12px] pl-[12px] bg-zinc-200 rounded-b-md overflow-hidden relative">
                <div className="max-w-[928px] block relative">
                    <div>
                        <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-4" } webkit-box text-[14px] text-black text-left font-normal break-words relative leading-5`}>
                            {postProps?.comment_text}
                        </span>
                    </div>
                    {!showMoreText && isOverflowing ? (
                        <button type="button" className="ml-[8px] px-[4px] bottom-[-1px] right-0 bg-zinc-200 rounded-md absolute z-10" onClick={handleShowMoreText}>
                            <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5 hover:text-black transition-all">
                                ...see more
                            </span>
                        </button>
                    ) : showMoreText && isOverflowing ? (
                        <button type="button" className="ml-[8px] px-[4px] bottom-[-1px] right-0 bg-zinc-200 rounded-md absolute z-10" onClick={handleShowMoreText}>
                            <span
                                className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5 hover:text-black transition-all">
                                ...see less
                            </span>
                        </button>
                    ) : null}
                </div>
            </div>
            <div>
                <div className="ml-[44px] pl-[8px]">
                    <div className="mt-[4px] flex items-center">
                        <div className="pr-[8px] text-[12px] flex items-center">
                            <div className="px-[4px] flex flex-wrap items-center justify-center rounded-md overflow-hidden cursor-pointer hover:bg-zinc-200">
                                <span className="text-zinc-500 text-left font-semibold break-words relative">
                                    <span className="overflow-hidden relative">
                                        Like
                                    </span>
                                </span>
                            </div>
                            {postProps?.comment_reactions && postProps?.comment_reactions.length ? (
                                <>
                                    <div className="pl-[4px] pr-[8px] flex">
                                        <span className="w-[2px] h-[2px] bg-zinc-700 rounded-full overflow-hidden"></span>
                                    </div>
                                    <div className="flex flex-row items-center relative">
                                        <span className="flex items-center">
                                            {mostReactedIcons.map((icon, index) => (
                                                <span key={index}
                                                      className="w-[16px] h-[16px] mr-[-4px] border-[2px] border-solid border-white rounded-full relative cursor-pointer z-20">
                                                    <Image src={icon} alt={`${icon}-image`} fill={true}
                                                           sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                </span>
                                            ))}
                                        </span>
                                        <div className="flex items-center justify-center">
                                            <span className="text-[12px] text-zinc-500 text-left font-normal relative leading-4">
                                                <span className="pl-[8px] cursor-pointer relative hover:underline transition-all">
                                                    {handleFormatNumber(postProps?.comment_reactions?.reduce((sum) => sum + 1, 0))}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                        <div className="w-[1px] h-[12px] bg-zinc-500"></div>
                        <div className="px-[8px] text-[12px] flex items-center">
                            <div className="px-[4px] flex flex-wrap items-center justify-center rounded-md overflow-hidden cursor-pointer hover:bg-zinc-200" onClick={handleShowCommentInput}>
                                <span className="text-zinc-500 text-left font-semibold break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Reply
                                    </span>
                                </span>
                            </div>
                            {postProps?.comment_reply && postProps?.comment_reply.length ? (
                                <>
                                    <div className="pl-[4px] pr-[8px] flex">
                                        <span className="w-[2px] h-[2px] bg-zinc-700 rounded-full overflow-hidden"></span>
                                    </div>
                                    <div>
                                        <span className="text-zinc-500 text-left font-normal break-words relative leading-5 transition-all">
                                            {postProps?.comment_reply.length > 1 ? `${postProps?.comment_reply.length} replies`: `${postProps?.comment_reply.length} reply`}
                                        </span>
                                    </div>
                                </>
                            ): null}
                        </div>
                    </div>
                </div>
                <div>
                    {showCommentInput ? (
                        <PostItemCommentInput userProps={userProps} isReply={true}/>
                    ) : null}
                </div>
                <div className="ml-[44px] mt-[8px] pl-[8px]">
                    {postProps?.comment_reply?.slice(0, 3).map((value, index) => (
                        <PostItemCommentScaffold key={index} userProps={userProps} postProps={value} isRely={true}/>
                    ))}
                </div>
                {!loadMoreClicked && visibleComments < postProps.comment_reply.length && (
                    <div className="mx-[16px] mb-[8px] relative">
                        <div className="px-[8px] py-[2px] w-fit flex flex-col rounded-md cursor-pointer relative hover:bg-zinc-200 transition-all" onClick={loadMoreComments}>
                            <span className="text-[16px] text-zinc-500 text-left font-bold break-words relative leading-5">
                                <span>Load more comments</span>
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
};

export default PostItemCommentScaffold;