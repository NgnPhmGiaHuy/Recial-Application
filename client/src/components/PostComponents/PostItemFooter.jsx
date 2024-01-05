"use client"

import Image from "next/image";

import { handleFormatNumber } from "@/utils";
import { useMostReactedIcons, useCountComment } from "@/hooks";

const PostItemFooter = ({ postProps, handleShowPostShareSetting, handleShowPostItemComment }) => {
    const totalComments = useCountComment(postProps);
    const mostReactedIcons = useMostReactedIcons(postProps?.reaction);

    return (
        <div className="overflow-x-hidden overflow-y-hidden">
            <div className="flex flex-col justify-center relative">
                {totalComments || mostReactedIcons.length ? (
                    <div className="mx-[16px] py-[10px] flex items-center justify-end text-[15px] text-zinc-500 relative leading-5">
                        <div className="flex grow items-center overflow-x-hidden overflow-y-hidden">
                            <span className="pl-[4px] flex items-center ">
                                {mostReactedIcons.map((icon, index) => (
                                    <span key={index} className="w-[20px] h-[20px] ml-[-4px] border-[2px] border-solid border-white rounded-full relative cursor-pointer z-20">
                                        <Image src={icon} alt={`${icon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover" />
                                    </span>
                                ))}
                            </span>
                            <div>
                                <span className="w-[100px] overflow-x-hidden overflow-y-hidden float-left text-ellipsis">
                                    <span className="pl-[4px] cursor-pointer relative hover:underline transition-all">
                                        {handleFormatNumber(postProps?.reaction?.reduce((sum) => sum + 1, 0))}
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
                                    {postProps?.share?.length === 0 ? null : postProps?.share?.length === 1 ? `${postProps?.share?.length} share` : `${postProps?.share?.length} shares`}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : null}
                <div className="mx-[12px] border-t border-solid border-zinc-200">
                    <div className="mx-[-2px] my-[-4px] px-[4px] flex flex-row flex-nowrap items-stretch justify-between relative">
                        <div className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative">
                            <div className="flex flex-row basis-auto relative">
                                <div className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200">
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="smw-6 w-5 sm:h-6 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                            </svg>
                                        </i>
                                    </div>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <span className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
                                            <span>Like</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative">
                            <div className="flex flex-row basis-auto relative">
                                <div className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200" onClick={handleShowPostItemComment}>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="smw-6 w-5 sm:h-6 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                            </svg>
                                        </i>
                                    </div>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <span className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
                                            <span>Comment</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-[2px] py-[6px] flex flex-col flex-shrink grow relative">
                            <div className="flex flex-row basis-auto relative">
                                <div className="sm:h-[36px] h-[30px] mx-[-4px] my-[2px] sm:px-[12px] px-[6px] flex flex-row flex-shrink flex-nowrap basis-0 grow items-center justify-center whitespace-nowrap rounded-md cursor-pointer relative hover:bg-zinc-200" onClick={handleShowPostShareSetting}>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-6 w-5 sm:h-6 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </i>
                                    </div>
                                    <div className="px-[4px] py-[6px] flex flex-col flex-shrink-0 relative">
                                        <span className="block text-[15px] text-left text-zinc-500 font-semibold break-words relative leading-5">
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