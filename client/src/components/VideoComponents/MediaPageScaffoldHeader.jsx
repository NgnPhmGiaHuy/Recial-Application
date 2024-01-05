"use client"

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { handleFormatNumber, formatDate } from "@/utils";
import { useCountComment, useCountLikeReaction, useOverflowText } from "@/hooks";

const MediaPageScaffoldHeader = ({ userProps, mediaProps }) => {
    const totalLike = useCountLikeReaction(mediaProps?.media);
    const totalComment = useCountComment(mediaProps?.media);

    const [hasFollow, setHasFollow] = useState(false);
    const [currentURL, setCurrentURL] = useState("");
    const [copyLinkSuccess, setCopyLinkSuccess] = useState("");

    const {textRef, showMoreText, isOverflowing, handleShowMoreText} = useOverflowText(mediaProps?.media_text);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setCurrentURL(window.location.href);
        }
    }, []);

    useEffect(() => {
        const updateFollowStatus = () => {
            userProps?.user?.following.map((value) => {
                const foundUser = value?.user?._id === mediaProps?.user?._id;
                if (foundUser) {
                    setHasFollow(foundUser);
                }
            })
        };

        updateFollowStatus();
    }, [userProps, mediaProps]);

    const handleCopyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(currentURL)
            .then(() => setCopyLinkSuccess('Copied!'))
            .catch((error) => console.error('Failed to copy:', error));
    }, [mediaProps?.media?._id]);

    return (
        <div className="mx-[-32px]">
            <div className="mx-[20px] p-[16px] rounded-md bg-zinc-100">
                <div className="mb-[16px] flex flex-row items-center relative">
                    <div className="mr-[12px] flex-[0_0_40px]">
                        {mediaProps?.user?.profile_picture_url ? (
                            <Link href={`/${mediaProps?.user?._id}`}>
                                <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full overflow-hidden relative">
                                    <Image src={mediaProps?.user?.profile_picture_url} alt={`${mediaProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </Link>
                        ) : null}
                    </div>
                    <div className="mr-[12px] flex-[1_1_auto] overflow-hidden">
                        <Link href={`/${mediaProps?.user?._id}`}>
                            {mediaProps?.user?.username || mediaProps?.user?.firstname ? (
                                <span className="block text-[18px] text-black text-left font-bold break-words relative leading-5 hover:underline">
                                    <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                        {mediaProps?.user?.username || mediaProps?.user?.firstname + " " + mediaProps?.user?.lastname}
                                    </span>
                                </span>
                            ) : null}
                        </Link>
                        <div className="flex flex-row items-center relative">
                            {mediaProps?.media?.media_type === "Video" ? (
                                <>
                                    <span className="text-[14px] text-black text-left font-normal break-words relative leading-5">
                                        <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                            Music
                                        </span>
                                    </span>
                                    <span className="mx-[4px]">·</span>
                                </>
                            ) : null}
                            {mediaProps?.media?.updated_at ? (
                                <span className="text-[14px] text-black text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {formatDate(mediaProps?.media?.updated_at)}
                                    </span>
                                </span>
                            ) : null}
                        </div>
                    </div>
                    {hasFollow ? null : (
                        <div>
                            <div className="min-w-[96px] h-[36px] px-[15px] flex items-center justify-center rounded-md bg-lime-500 cursor-pointer relative hover:bg-lime-700 transition-all">
                                <span className="text-[16px] text-white text-left font-normal relative leading-5">
                                    <span className="overflow-hidden relative">
                                        Follow
                                    </span>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col overflow-visible">
                    <div className="flex flex-col w-full overflow-hidden relative">
                        <div className="w-full text-ellipsis overflow-hidden relative before:h-[calc(100%-21px)] before:w-0 before:mt-0 before:float-right">
                            <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-2 max-h-[44px]"} webkit-box text-[16px] text-black text-left break-words relative leading-5`}>
                                <span className="font-normal leading-5">
                                    {mediaProps?.media?.media_text} &nbsp;
                                </span>
                                {mediaProps?.tags?.map((value, index) => (
                                    <a href="" key={index}>
                                        <strong>
                                            <span className="text-lime-500 hover:text-lime-700 transition-all">
                                                #{value} &nbsp;
                                            </span>
                                        </strong>
                                    </a>
                                ))}
                            </span>
                        </div>
                        {!showMoreText && isOverflowing ? (
                            <div className="flex items-center rounded-md cursor-pointer bg-zinc-100 z-10">
                                <span className="text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5" onClick={handleShowMoreText}>
                                    <span className="overflow-hidden relative">
                                        More
                                    </span>
                                </span>
                            </div>
                        ) : showMoreText && isOverflowing ? (
                            <div className="flex items-center rounded-md cursor-pointer bg-zinc-100 z-10">
                                <span className="text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5" onClick={handleShowMoreText}>
                                    <span className="overflow-hidden relative">
                                        Less
                                    </span>
                                </span>
                            </div>
                        ) : null}
                    </div>
                    {mediaProps?.media?.media_type === "Video" ? (
                        <div className="mt-[8px] flex-[0_0_auto]">
                            <a href="">
                                <div className="flex flex-row items-center">
                                    <div className="w-[14px] h-[14px] mr-[8px] flex items-center justify-center relative">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                            </svg>
                                        </i>
                                    </div>
                                    <div>
                                        <span className="block text-[14px] text-black text-left font-normal break-words relative leading-5">
                                            <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                                original sound  - LPL
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className="px-[32px] pt-[16px] flex flex-col overflow-visible">
                <div className="flex flex-row items-center justify-between relative">
                    <div className="flex flex-row items-center">
                        <div className="mr-[20px] flex flex-row items-center cursor-pointer">
                            <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full bg-zinc-100 overflow-hidden relative hover:bg-zinc-200 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </i>
                            </div>
                            <div className="ml-[4px] flex items-center">
                                <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {totalLike ? (
                                            handleFormatNumber(totalLike)
                                        ) : 0}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="mr-[20px] flex flex-row items-center cursor-pointer">
                            <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full bg-zinc-100 overflow-hidden relative hover:bg-zinc-200 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                    </svg>
                                </i>
                            </div>
                            <div className="ml-[4px] flex items-center">
                                <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {totalComment ? (
                                            handleFormatNumber(totalComment )
                                        ) : 0}
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="mr-[20px] flex flex-row items-center cursor-pointer">
                            <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full bg-zinc-100 overflow-hidden relative hover:bg-zinc-200 transition-all">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                </i>
                            </div>
                            <div className="ml-[4px] flex items-center">
                                <span className="block text-[12px] text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {mediaProps?.share?.length ? (
                                            handleFormatNumber(mediaProps?.share?.length)
                                        ) : 0}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <a href="">
                            <div className="w-[24px] h-[24px] mr-[8px] flex items-center justify-center rounded-full overflow-hidden relative">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0} stroke="white" className="w-6 h-6">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#161823" fillOpacity="0.75"></path>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.313 7.96568C12.3665 7.65966 12.658 7.45498 12.964 7.50851C13.27 7.56203 13.4747 7.8535 13.4211 8.15951L12.0506 15.9952C11.997 16.3012 11.7056 16.5059 11.3996 16.4523C11.0936 16.3988 10.8889 16.1073 10.9424 15.8013L12.313 7.96568ZM16.2402 8.77448C15.96 8.48453 15.5058 8.48453 15.2256 8.77448C14.9454 9.06443 14.9454 9.53454 15.2256 9.82449L17.454 12.1307L15.2262 14.4364C14.946 14.7263 14.946 15.1964 15.2262 15.4864C15.5063 15.7763 15.9606 15.7763 16.2407 15.4864L19.4551 12.1598C19.4704 12.1439 19.4704 12.1182 19.4551 12.1023L19.2233 11.8623L19.2201 11.8586L19.2158 11.854L16.2402 8.77448ZM8.88972 15.4867C8.59977 15.7766 8.12966 15.7766 7.83971 15.4867L5.4207 13.0677L4.76017 12.4071L4.51191 12.1589C4.49603 12.143 4.49603 12.1173 4.51191 12.1014L7.83853 8.77477C8.12848 8.48482 8.59859 8.48482 8.88854 8.77477C9.17849 9.06472 9.17849 9.53482 8.88854 9.82478L6.58318 12.1301L8.88972 14.4367C9.17967 14.7266 9.17967 15.1967 8.88972 15.4867Z" fill="white"></path>
                                    </svg>
                                </i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="mt-[16px] flex flex-row rounded-md border border-solid border-zinc-200 bg-zinc-100 overflow-hidden relative">
                    <div className="w-full flex flex-row items-center text-[14px] text-zinc-500 text-left font-normal break-words relative overflow-hidden leading-5">
                        <p className="pt-[7px] pb-[5px] pl-[12px] flex-[1_1_auto] text-ellipsis whitespace-nowrap overflow-hidden relative">
                            {currentURL}
                        </p>
                        <div className="px-[18px] py-[7px] flex-[0_0_auto] cursor-pointer relative hover:bg-white/75 transition-all" onClick={handleCopyToClipboard}>
                            <span className="text-black font-bold relative">
                                <span className="overflow-hidden relative">
                                    Copy link
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffoldHeader;