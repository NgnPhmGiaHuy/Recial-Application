"use client"

import Image from "next/image";

import { useMostReactedIcons, useCountComment } from "@/hooks";
import { handleFormatNumber, handleReactionData } from "@/utils";
import { ChatBubbleLeftIcon, PostItemFooterButton, ReactionIcon, ShareIcon } from "@/components";

const PostItemFooter = ({ footerRef, footerCommentRef, timeoutRef, handleState, props }) => {
    const totalComments = useCountComment(props.postProps);
    const totalShares = props.postProps?.share?.length;
    const mostReactedIcons = useMostReactedIcons(props.postProps?.reaction);

    return (
        <div ref={footerRef} className="overflow-hidden">
            <div className="flex flex-col justify-center relative">
                { totalComments || totalShares || mostReactedIcons.length ? (
                    <div ref={footerCommentRef} className="mx-[16px] py-[10px] flex items-center justify-end text-[15px] text-zinc-500 relative leading-5">
                        <div className="flex grow items-center overflow-hidden">
                            <span className="pl-[4px] flex items-center ">
                                {mostReactedIcons.map((icon, index) => (
                                    <span key={index} style={{ zIndex: 2 - index }} className="w-[20px] h-[20px] ml-[-4px] border-[2px] border-solid border-white rounded-full relative cursor-pointer">
                                        <Image src={icon} alt={`${icon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover" />
                                    </span>
                                ))}
                            </span>
                            <div>
                                <span className="w-[100px] overflow-hidden float-left text-ellipsis">
                                    <span className="pl-[4px] cursor-pointer relative hover:underline transition-all">
                                        {handleFormatNumber(props.postProps?.reaction?.reduce((sum) => sum + 1, 0))}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="m-[-6px] flex flex-row flex-shrink-0 flex-nowrap items-stretch justify-between relative">
                            <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[15px] text-zinc-500 text-left font-normal break-words relative cursor-pointer leading-5 hover:underline transition-all">
                                    {totalComments === 0 ? null : totalComments === 1 ? `${totalComments} comment` : `${totalComments} comments`}
                                </span>
                            </div>
                            <div className="p-[6px] flex flex-col flex-shrink-0 relative">
                                <span className="block text-[15px] text-zinc-500 text-left font-normal break-words relative cursor-pointer leading-5 hover:underline transition-all">
                                    {totalShares === 0 ? null : totalShares === 1 ? `${totalShares} share` : `${totalShares} shares`}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="mx-[12px] border-t border-solid border-zinc-200">
                    <div className="mx-[-2px] my-[-4px] px-[4px] flex flex-row flex-nowrap items-stretch justify-between relative">
                        <PostItemFooterButton icon={<ReactionIcon/>} labelText="Reaction" forwardRef={timeoutRef}
                                              handleMouseEnter={handleState.handleMouseEnter} handleMouseLeave={handleState.handleMouseLeave}
                                              handleClick={() => handleReactionData({ destinationId: props.postProps?.post?._id, handleState: handleState.handleShowPostReactionButton })}/>
                        <PostItemFooterButton icon={<ChatBubbleLeftIcon fill="none" stroke="currentColor" />} labelText="Comment"
                                              handleClick={handleState.handleShowPostItemComment}/>
                        <PostItemFooterButton icon={<ShareIcon fill="none" stroke="currentColor" />} labelText="Share"
                                              handleClick={handleState.handleShowPostShareSetting}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItemFooter;