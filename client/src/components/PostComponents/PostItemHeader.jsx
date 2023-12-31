import Link from "next/link";
import Image from "next/image";

import { formatTimeAgoFull } from "@/utils";

const PostItemHeader = ({ postProps, handleShowPostItemDelete, handleShowPostItemQuickSetting }) => {
    return (
        <div className="mb-[12px] px-[16px] pt-[12px] flex flex-row items-start">
            <div className="flex flex-row flex-shrink grow items-center relative">
                <div className="mr-[8px] flex flex-col justify-center relative">
                    <Link href={postProps?.user?._id}>
                        <div className="w-[40px] h-[40px] overflow-hidden rounded-full relative group">
                            <Image src={postProps?.user?.profile_picture_url} alt={`${postProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </div>
                    </Link>
                    {/*<a href="">*/}
                    {/*    <div className="w-[40px] h-[40px] relative">*/}
                    {/*        <div className="w-full h-full overflow-hidden rounded-md relative">*/}
                    {/*            <Image src={postProps.user.authorAvatar} alt={`${postProps.user.authorAvatar}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>*/}
                    {/*        </div>*/}
                    {/*        <div className="w-[30px] h-[30px] bottom-[-5px] right-[-5px] rounded-full overflow-hidden border border-solid border-lime-500 absolute">*/}
                    {/*            <Image src={postProps.user.authorAvatar} alt={`${postProps.user.authorAvatar}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</a>*/}
                </div>
                <div className="max-w-[600px] my-[-5px] flex flex-col grow">
                    <div>
                        <span className="block text-[16px] text-black text-left font-normal break-words leading-5 relative hover:underline">
                            <Link href={postProps?.user?._id} className="w-full h-full">
                                <strong>
                                    <span className="overflow-x-hidden overflow-y-hidden text-ellipsis line-clamp-2 relative">
                                        {postProps?.user?.username || postProps?.user?.firstname + " " + postProps?.user?.lastname}
                                    </span>
                                </strong>
                            </Link>
                        </span>
                    </div>
                    <div>
                        <span className="block text-[13px] text-zinc-500 text-left font-normal break-words leading-4">
                            <div className="min-h-[16px] flex flex-row items-center pt-[6px]">
                                <span className="flex items-center break-words pr-[2px]">
                                    <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                        <span className="block overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                                            {formatTimeAgoFull(postProps?.post?.updated_at)}
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center break-words">
                                    <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                        <span className="block overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis relative">
                                            <span> · </span>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center break-words pl-[2px]">
                                    <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                        <span className="block overflow-x-hidden overflow-y-hidden whitespace-nowrap text-ellipsis line-clamp-1 relative">
                                            {postProps?.post?.post_privacy === 'Public' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                </svg>
                                            ) : postProps?.post?.post_privacy === 'Private' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                                </svg>
                                            ) : postProps?.post?.post_privacy === 'Friends' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                                                </svg>
                                            ) : postProps?.post?.post_privacy === 'Specific_Friends' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                                </svg>
                                            ) : null}
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-shrink-0 grow-0 items-center relative">
                <div className="w-[40px] h-[40px] mx-[4px] p-[8px] flex self-start rounded-full cursor-pointer relative hover:bg-zinc-200" onClick={handleShowPostItemQuickSetting}>
                    <div className="w-full h-full inline-flex flex-row items-stretch ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                </div>
                <div className="w-[40px] h-[40px] mx-[4px] p-[8px] flex self-start rounded-full cursor-pointer relative hover:bg-zinc-200" onClick={handleShowPostItemDelete}>
                    <div className="w-full h-full inline-flex flex-row items-stretch ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItemHeader;