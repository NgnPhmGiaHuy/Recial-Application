import Link from "next/link";
import Image from "next/image";

import { formatTimeAgoFull } from "@/utils";

const PostItemHeader = ({ headerRef, props, handleState }) => {
    return (
        <div ref={headerRef} className="mb-[12px] px-[16px] pt-[12px] flex flex-row items-start">
            <div className="flex flex-row flex-shrink grow items-center relative">
                <div className="mr-[8px] flex flex-col justify-center relative">
                    {props.postProps?.post?.group ? (
                        <>
                            <div className="w-[40px] h-[40px] relative">
                                <Link href={`/groups/${props.postProps?.post?.group?._id}`}>
                                    <div className="w-full h-full overflow-hidden rounded-md outline outline-zinc-500 relative">
                                        <Image src={props.postProps?.post?.group?.group_picture_url} alt={`${props.postProps?.post?.group?.group_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                        <div className="w-full h-full inset-0 bg-black/15 absolute"></div>
                                    </div>
                                </Link>
                                <Link href={`/${props.postProps?.user?._id}`}>
                                    <div className="w-[30px] h-[30px] bottom-[-5px] right-[-5px] rounded-full overflow-hidden outline outline-white absolute">
                                        <Image src={props.postProps?.user?.profile_picture_url} alt={`${props.postProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                    </div>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <Link href={`/${props.postProps?.user?._id}`}>
                            <div className="w-[40px] h-[40px] overflow-hidden rounded-full relative group">
                                <Image src={props.postProps?.user?.profile_picture_url} alt={`${props.postProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="max-w-[600px] my-[-5px] flex flex-col grow">
                    <div>
                        <span className="block text-[16px] text-black text-left font-normal break-words leading-5 relative hover:underline">
                            {props.postProps?.post?.group ? (
                                <Link href={`/groups/${props.postProps?.post?.group?._id}`} className="w-full h-full">
                                    <strong>
                                        <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                            {props.postProps?.post?.group?.group_name}
                                        </span>
                                    </strong>
                                </Link>
                            ) : (
                                <Link href={props.postProps?.user?._id} className="w-full h-full">
                                    <strong>
                                        <span className="overflow-hidden text-ellipsis line-clamp-2 relative">
                                            {props.postProps?.user?.username || props.postProps?.user?.firstname + " " + props.postProps?.user?.lastname}
                                        </span>
                                    </strong>
                                </Link>
                            )}
                        </span>
                    </div>
                    <div>
                        <span className="block text-[13px] text-zinc-500 text-left font-normal break-words leading-4">
                            <div className="min-h-[16px] flex flex-row items-center pt-[6px]">
                                {props.postProps?.post?.group && (
                                    <>
                                        <span className="flex items-center break-words pr-[2px]">
                                            <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                    {props.postProps?.user?.username || props.postProps?.user?.firstname + " " + props.postProps?.user?.lastname}
                                                </span>
                                            </span>
                                        </span>
                                        <span className="flex items-center break-words">
                                            <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                    <span> · </span>
                                                </span>
                                            </span>
                                        </span>
                                    </>
                                )}
                                <span className="flex items-center break-words pr-[2px]">
                                    <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                        <span
                                            className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                            {formatTimeAgoFull(props.postProps?.post?.updated_at)}
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center break-words">
                                    <span
                                        className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                        <span
                                            className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                            <span> · </span>
                                        </span>
                                    </span>
                                </span>
                                <span className="flex items-center break-words pl-[2px]">
                                    <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis line-clamp-1 relative">
                                            {props.postProps?.post?.post_privacy === 'Public' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     viewBox="0 0 512 512" strokeWidth={1.5}
                                                     stroke="none" className="w-4 h-4">
                                                    <path
                                                        d="M236.3 65.6c1.2 0 2.7.6 4 2.4c-5.8-8.3 6.5-4.7 7.2-12.6c7-5.2 4.5-8.6 6.5-8.8l2.2-1.8c-4.3 1.6-5.8 1.9-7 1.9h-2c-1.5 0-4 .3-9.9 2.1c-13.5 1-23.2 15.6-27.8 16c-4.7 2.5-4.5 3-3.4 3c.3 0 .7-.1 1.1-.1c.4 0 .7-.1 1-.1c1.1 0 .8.5-5.6 3.5c1.5.4-11.2 6-11.3 14.8c-.4 3.4 1 5.7 3.3 5.7c2 0 4.5-1.5 7.2-5.3c9-10.4 28-11.4 36.2-17.7c-5.1-.4-4.1-3-1.7-3m-45.7 3.5c-.9 0 .3-1.1 1.6-2.2c1.4-1.1 3-2.2 3-2.2l-.1.1c5.4-2.1 2.1-2.6 5-4h-.2c-.6 0 .5-.8 1.5-1.7c1-.8 1.9-1.7 1-1.7c-.5 0-1.8.3-4 1.2c.7-1 3.4-1.7 7.2-3.8c-5.5 1.8-9.8 2.9-10.3 2.9c-.4 0 1.9-.8 8.8-2.9c.3 0 .6.1.8.1c.7 0 1-.2.9-.4c-.1-.2-.5-.3-1.2-.3c-9.9.8-17.3 7-15.1 7.8c1.3-.4 2.2-.6 2.8-.6c1.3 0 .7 1.1-1.9 2.7c1.2 2.8-20 10-22.4 12.6c1.2-.7 2-.9 2.4-.9c1.6 0-.5 3.1-2.6 4.6c1.3 1.2 2.3 1.6 3.1 1.6c2.1 0 3-2.9 4.8-3.8c.4.8.8 1.2 1.3 1.2c1.7 0 3.8-4.2 5.5-6.4c.5.5 1.1.9 1.9.9c1.6 0 4-1.3 7.8-5c-.8.1-1.4.2-1.6.2m-23 18.4c-3.6 2.2-5.5 3.1-6.3 3.1c-1.5 0 .5-2.8 2.3-5.7c1.8-2.8 3.4-5.6 1.1-5.6c-1.1 0-3.1.6-6.3 2.2c-8.7 5.8-23.4 21.8-29.9 21.8h-.6c10.5-7.7 7.4-22.8 22.1-26.7c14.5-8.3 24.4-5.7 37.3-15.2c-3.8 1.9-9.4 4-10.7 4c-.8 0 .4-1 5.6-3.5c-.5.1-.9.2-1.2.2c-3.5 0 23-9.5 24.3-9.7c-10.9 1.5-28.5 10.6-30.9 10.6c-.3 0-.3-.1-.3-.3c.4-.3.4-.5 0-.5c-1.3 0-6.7 1.8-12.2 3.6c-5.4 1.8-10.9 3.7-12.1 3.7c-.4 0-.4-.2.2-.6c-47.2 26.8-86.6 72-98.9 125.6c5.1 11.7 1.6 34 10 40.5c9.6 8.1-8.2 31.6-3.5 46.1c4.8 26.2 25.5 44.1 27.7 70.9c3.8 18.4 17.7 40.9 23.5 52.6c4.4 4.4 16.5 17.1 18.6 17.1c.8 0 .3-1.9-2.9-7c-2-5.7-13.6-20.6-8-20.6c.3 0 .6 0 1 .1c-6.9-7 15.3-5.1-.2-14.6c-1.8-2.2-2.2-2.9-1.8-2.9c.5 0 1.9.8 3.5 1.6c1.7.8 3.7 1.6 5.3 1.6c2.5 0 4.2-1.7 3.2-7.9c.4.2.8.2 1.1.2c2.6 0 1.7-5.1 1.9-10.2c.2-5.1 1.5-10.2 8.5-10.2c.8 0 1.7.1 2.6.2c16.2-8.8 2.1-33.1 20.7-42c-.7-20.2-27.8-21.2-38-29.4c-1.7 1-3.3 1.3-4.9 1.3c-1.8 0-3.4-.4-4.8-.9c-1.4-.4-2.7-.9-3.6-.9c-.2 0-.4 0-.6.1c17.4-4.6 4.7-28.8-9.7-28.8h-1c-1.1-10.5-6.5-6.5-7.1-15.2c-.9.5-1.8.7-2.7.7c-2.4 0-4.6-1.7-6.5-3.3c-1.9-1.7-3.5-3.3-4.9-3.3c-1.1 0-2.1 1.1-3 4.3c1-4.9.7-6.5-.3-6.5s-2.8 1.7-4.8 3.4c-1.9 1.7-4.1 3.4-5.8 3.4h-.5c-11.7-8.3.1-23-6.1-34.3c4-4.3 5.6-11.6 3.8-11.6c-.9 0-2.7 1.8-5.5 6.7c-4-10.2 6.6-33.3 15.6-34.6c.3 0 .5-.1.8-.1c1.6 0 3.2.8 4.6 2.5c.8 4.7-1.2 14.6-.4 14.6c.4 0 1.2-2 3.2-7.2c2.6-11.9 20.8-20.5 22.7-27.8c.1.1.1.1.2.1c2.1 0 15.6-11.9 21.5-13.2c2.3-2.3 3.9-3.1 5.1-3.1c1.3 0 2 1 2.5 1.9c.5 1 .9 1.9 1.4 1.9c.4 0 .9-.6 1.8-2.3c-3.1-6.1 4.9-11.9 2.7-11.9c-.8 0-3.2.8-8.1 2.8c-.8.4-1.2.5-1.4.5c-.6 0 1.8-1.6 5.3-3.2s7.9-3.2 11.6-3.2c1.8 0 3.4.4 4.6 1.4c15.5-3.7 7-8.8 7.8-8.8h.2c4.4-2.6 3.1-12.4 9.6-18.5m-69.3 40.9c-.2 0 .7-1.3 3.7-5c6.2-4.6 11.2-7.7 5.5-10.7c2.5-1.1 4.9-2.4 7.2-3.8c-.1 4.9-4.2 16.8-6.4 16.8c-.5 0-1-.7-1.2-2.2c1.3-2.3 1.4-3.2.9-3.2c-.8 0-3.1 2-5.3 4.1c-2.2 1.9-4.2 4-4.4 4m5.7 2.7c-2.7 0-2.2-1.7 6.1-3.4c3.6-.5.8-.3 5.1-1.3c-4.2 3.4-8.9 4.7-11.2 4.7M259.5 121c1.2-.2 2.1-.2 2.8-.2c2.9 0 1.6 1.2-.1 2.4c-1.7 1.2-3.8 2.4-2.6 2.4c.7 0 2.6-.4 6.5-1.5c19.7-1.4-7.7-18.1-3.3-23.7l-1.2-.4c-8.1 10.3 5.4 10.5-2.1 21m-8.2.4c1.4 0 3.2-1.6 5.1-6.1c2.6-3.1 1.5-3.5-1.3-5c-7.7 2-7 11.1-3.8 11.1m69 31.7c-.3 0-.5.1-.7.2c.8.2 1.6.4 2.4.4c-.8-.4-1.3-.6-1.7-.6M454.6 178c1.7 3.7 2.6 5.2 2.7 5.2c.7 0-12.6-32.4-18.1-38.2c-28.7-47.2-75.9-83.3-129.7-96.8h-.1c-1.4 0 .2.7 2.1 1.4c1.9.7 4.2 1.4 4.2 1.4s-1.5-.5-6.1-1.8c-5.1-1.5-10.3-2.6-15.6-3c-.9.3 21.9 9.3 37.2 14c-5.1-1.6-10.4-3-11.7-3c-.9 0 0 .6 3.7 2.2c-4.5-1.3-6.4-1.9-6.6-1.9c-.3 0 6 2.1 11.9 4.2c6 2.1 11.7 4.2 10.1 4.2c-.4 0-1.5-.2-3.2-.5c5.1 2.8 6.9 3.9 6.6 3.9c-.5 0-6.8-3-13.3-6c-6.4-3-12.9-6-13.8-6c-.5 0 .8 1 5.2 3.6c6 2.6 12 5.2 10.3 5.2c-.8 0-3.1-.5-7.6-1.8c10 5.1-7.1 3.1-1.3 10c-3.2-3-4.5-4-4.8-4s.5 1.2 1.3 2.4s1.4 2.4.7 2.4h-.2c7 7.6-4.9.8 3.6 7.6c-6.4-2.9-17.3-7.7-12.4-7.7c1.2 0 3.5.3 7.1 1.1c-6.5-7.6-24.9-7.9-25.3-8.8c-4.6.3-4.7 3.8-3.9 10.2c-.1 10.1-10 10.3-8.7 16.1c0-.1.1-.1.1-.1c.2 0 .3 2 .9 4.1c.7 2 1.9 4.1 4.5 4.1c1.4 0 3.2-.6 5.4-2.1c3.1 5.6 5.9 7.6 8.1 7.6c3.3 0 5.3-4.5 5.1-8.6c-3.6-2-8.3-18.6-3.1-18.6c.8 0 1.8.4 3.1 1.3c-8.1 19.9 32 6.6 9.3 15.7c5.1 6.7-3.2 6.4-.8 14.5c-3.9 1.1-8.2 2.1-12 2.1c-5.6 0-9.9-2.4-9.4-10.8c-7 3.7 7 16.2-6.9 16.2h-.8c-6.7 12.3-31.8 8.1-12.1 21.1c1.1 5.7-2.5 6.7-7.1 6.7c-1.2 0-2.5-.1-3.8-.2c-1.3-.1-2.6-.1-3.8-.1c-5.2 0-8.9 1.3-5.7 9.4c-2.3 8.4 3.1 12.1 9.7 12.1c8 0 17.8-5.2 18.5-13.8c4.3-6.5 9.8-9.2 15.5-9.2c9 0 18.5 6.8 24.7 15.2c.5.8.9 1.1 1.1 1.1c.5 0 0-2-.2-4c-.2-1.6-.2-3.2.4-3.7c-8.9-2.5-15.7-13.3-12.7-13.3c1 0 3.1 1.2 6.5 4.4h.5c5.6 0 10 4.4 13.4 8.8c3.5 4.4 6.1 8.8 8.4 8.8c.9 0 1.8-.8 2.6-2.6c-.4-.6-1.4-2.3-1.9-4c-.6-2.1-.6-4.2 2.1-4.2c1.1 0 2.6.4 4.7 1.2c6.8-1.8-4.3-19.5 4.7-19.5c.9 0 2 .2 3.4.6c-.1 3.1 1.3 4.2 2.6 4.2c2.6 0 5.2-3.7-1.1-4.8c2.4-2.3 3.8-3.2 4.8-3.2c3.5 0 .7 11.6 12.8 11.6c4.1 9.7-35.6.7-22.9 19.3c2.9 2.1 6.5 2.5 10 2.5c1.1 0 2.1 0 3.1-.1c1 0 2-.1 2.9-.1c6.2 0 10.6 1.5 7.9 14.3c-3.3 2.4-7 3.2-10.8 3.2c-3.4 0-6.8-.6-10.1-1.2s-6.5-1.2-9.4-1.2c-4.5 0-8.1 1.5-10.3 6.7c-11.7-4.8-27.1-5-25.6-19.5c-20.4 2.9-41.7 1.4-56.7 13.9c-.9 18.3-32.3 24.2-24.7 45c-9.1 19.2 11 46.1 31.5 46.1c.7 0 1.5 0 2.2-.1c11.2-.1 22.5-5.1 32.4-5.1c5.1 0 9.7 1.3 13.7 5.3c.9-.1 1.7-.2 2.4-.2c15.3 0-4.9 24.3 13.4 28.4c16.6 17.2-10.2 34.9 2.9 51.4c1.4 12.9 7.8 23.7 7.8 36.3c1.7.2 3.3.3 5 .3c21.1 0 34.3-18.4 46.7-32.3c-3.8-20.8 29.5-24.9 18.1-48.2c-5.3-25.5 25.1-40.6 23.4-66.1c.3-3.6-.7-4.7-2.2-4.7c-1.5 0-3.7 1.1-5.8 2.1c-2.2 1.1-4.6 2.1-6.5 2.1c-2.5 0-4.4-1.7-4.6-7.3c-14.7-13.7-21.4-32.3-35.1-47.4c17.8 8.6 27.9 28 36.1 45.6c.7.2 1.4.3 2.2.3c14.5 0 34.7-34.7 12.7-43.1c-1.2 3.3-2.8 4.5-4.7 4.5c-3.3 0-7.1-4-9.8-7.9c-2.7-4-4.1-8-2.6-8c1 0 3.2 1.6 7 5.8c4.3 2.7 8.5 3.4 12.9 3.4c4.3 0 8.7-.7 13.3-1.1c5.8 2.3 8.3 9.7 10.1 9.7c.3 0 .7-.3 1-1c4.6 11 9.9 30.6 14.7 35.9c-2.5-16.8-3.1-34.6-7.4-51.1m-55.8-23.1c-11.3-2.9-15-16.9-23.9-25c-.1-2.2 3.2-1.8 2.4-5.5c12 3.7 8.1 7.4 7 8.1c4.4 7.3 16.7 12.3 14.5 22.4M243.5 78.8c-10.9 3.2-12.4-.3-10.5 6.4c.8.6 2.3.8 3.8.8c5.3.1 12.5-3 6.7-7.2m160.1 275.5c14.3-12.1 16.1-26.5 16.8-41.1c-6.4 12.5-25.4 26.3-16.8 41.1m-65.1-195c-.1.1-.1.1-.1.2c.1.2.2.2.2.2s0-.1-.1-.4M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0m0 492.3C125.5 492.3 19.7 386.5 19.7 256S125.5 19.7 256 19.7S492.3 125.5 492.3 256S386.5 492.3 256 492.3"/>
                                                </svg>
                                            ) : props.postProps?.post?.post_privacy === 'Private' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                     stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
                                                </svg>
                                            ) : props.postProps?.post?.post_privacy === 'Friends' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                     stroke="currentColor" className="w-4 h-4">
                                                    <path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"/>
                                                    <path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"/>
                                                    <path
                                                        d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/>
                                                </svg>
                                            ) : props.postProps?.post?.post_privacy === 'Specific_Friends' ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                     viewBox="0 0 20 20" strokeWidth={1.5}
                                                     stroke="none" className="w-3 h-3">
                                                    <path
                                                        d="M9.993 10.573a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M10 0a6 6 0 0 1 3.04 11.174c3.688 1.11 6.458 4.218 6.955 8.078c.047.367-.226.7-.61.745c-.383.045-.733-.215-.78-.582c-.54-4.19-4.169-7.345-8.57-7.345c-4.425 0-8.101 3.161-8.64 7.345c-.047.367-.397.627-.78.582c-.384-.045-.657-.378-.61-.745c.496-3.844 3.281-6.948 6.975-8.068A6 6 0 0 1 10 0"/>
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
                <div
                    className="w-[40px] h-[40px] mx-[4px] p-[8px] flex self-start rounded-full cursor-pointer relative hover:bg-zinc-200"
                    onClick={handleState.handleShowPostItemQuickSetting}>
                    <div className="w-full h-full inline-flex flex-row items-stretch ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                        </svg>
                    </div>
                </div>
                <div
                    className="w-[40px] h-[40px] mx-[4px] p-[8px] flex self-start rounded-full cursor-pointer relative hover:bg-zinc-200"
                    onClick={handleState.handleShowPostItemDelete}>
                    <div className="w-full h-full inline-flex flex-row items-stretch ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItemHeader;