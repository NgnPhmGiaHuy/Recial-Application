"use client"

import Image from "next/image";

import { useMostReactedIcons, useCountComment } from "@/hooks";
import { handleFormatNumber, handleReactionData } from "@/utils";

const PostItemFooter = ({ footerRef, footerCommentRef, timeoutRef, handleState, props }) => {
    const totalComments = useCountComment(props.postProps);
    const totalShares = props.postProps?.share?.length;
    const mostReactedIcons = useMostReactedIcons(props.postProps?.reaction);

    return (
        <div ref={footerRef} className="overflow-hidden">
            <div className="flex flex-col justify-center relative">
                {totalComments || totalShares || mostReactedIcons.length ? (
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
                        <div ref={timeoutRef} className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative" onMouseEnter={handleState.handleMouseEnter} onMouseLeave={handleState.handleMouseLeave}>
                            <div className="flex flex-row basis-auto relative">
                                <div className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200" onClick={() => handleReactionData({ destinationId: props.postProps?.post?._id, handleState: handleState.handleShowPostReactionButton })}>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                 viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="none"
                                                 className="sm:w-6 w-5 sm:h-6 h-5">
                                                <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q1.075 0 2.075.213T16 2.825v2.25q-.875-.5-1.888-.788T12 4Q8.675 4 6.337 6.338T4 12q0 3.325 2.338 5.663T12 20q3.325 0 5.663-2.337T20 12q0-.8-.162-1.55T19.4 9h2.15q.225.725.338 1.463T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m8-17h-1q-.425 0-.712-.288T18 4q0-.425.288-.712T19 3h1V2q0-.425.288-.712T21 1q.425 0 .713.288T22 2v1h1q.425 0 .713.288T24 4q0 .425-.288.713T23 5h-1v1q0 .425-.288.713T21 7q-.425 0-.712-.288T20 6zm-4.5 6q.625 0 1.063-.437T17 9.5q0-.625-.437-1.062T15.5 8q-.625 0-1.062.438T14 9.5q0 .625.438 1.063T15.5 11m-7 0q.625 0 1.063-.437T10 9.5q0-.625-.437-1.062T8.5 8q-.625 0-1.062.438T7 9.5q0 .625.438 1.063T8.5 11m3.5 6.5q1.45 0 2.675-.7t1.975-1.9q.15-.3-.025-.6T16.1 14H7.9q-.35 0-.525.3t-.025.6q.75 1.2 1.988 1.9t2.662.7"/>
                                            </svg>
                                        </i>
                                    </div>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <span
                                            className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
                                            <span>Reaction</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative">
                            <div className="flex flex-row basis-auto relative">
                                <div
                                    className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200"
                                    onClick={handleState.handleShowPostItemComment}>
                                <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={2} stroke="currentColor" className="smw-6 w-5 sm:h-6 h-5">
                                            <path d="M14 19c3.771 0 5.657 0 6.828-1.172C22 16.657 22 14.771 22 11c0-3.771 0-5.657-1.172-6.828C19.657 3 17.771 3 14 3h-4C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11c0 3.771 0 5.657 1.172 6.828c.653.654 1.528.943 2.828 1.07"/>
                                            <path d="M14 19c-1.236 0-2.598.5-3.841 1.145c-1.998 1.037-2.997 1.556-3.489 1.225c-.492-.33-.399-1.355-.212-3.404L6.5 17.5"/>
                                        </svg>
                                    </i>
                                </div>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <span
                                            className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
                                            <span>Comment</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative">
                            <div className="flex flex-row basis-auto relative">
                                <div className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200" onClick={handleState.handleShowPostShareSetting}>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="none"
                                                 className="sm:w-6 w-5 sm:h-6 h-5">
                                                <path d="M15.991 1.035a4 4 0 1 1-.855 6.267l-6.28 3.626a4.007 4.007 0 0 1 0 2.144l6.28 3.626a4.002 4.002 0 0 1 6.32 4.803a4 4 0 0 1-7.32-3.07l-6.28-3.627a4.002 4.002 0 1 1 0-5.608l6.28-3.626a4.002 4.002 0 0 1 1.855-4.535M19.723 3.5a2 2 0 1 0-3.464 2a2 2 0 0 0 3.464-2M3.071 12.527a2.002 2.002 0 0 0 2.93 1.204a2 2 0 1 0-2.93-1.204m15.92 5.242a2 2 0 1 0-2 3.464a2 2 0 0 0 2-3.464"/>
                                            </svg>
                                        </i>
                                    </div>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <span
                                            className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
                                            <span>Share</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItemFooter;