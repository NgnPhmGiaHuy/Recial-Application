"use client"

import dynamic from "next/dynamic";

import { useCountComment } from "@/hooks";
import { MediaPhotoPageScaffoldItem, MediaPageScaffoldCommentItem, MediaPageScaffoldFooter, MediaPageScaffoldHeader } from "@/components";
const DynamicVideoPageScaffoldItem = dynamic(() => import("@/components/VideoComponents/VideoPageScaffoldItem"), { ssr: false });

const MediaPageScaffold = ({ userProps, mediaProps, videoProps, mediaType }) => {
    const totalComment = useCountComment(mediaProps?.media)

    return (
        <div className="top-0 right-0 bottom-0 left-0 flex flex-row fixed bg-white">
            <div className="max-w-full px-[80px] flex-[1_0_600px] bg-black/95 overflow-hidden relative">
                {mediaProps?.media?.media_type === "Photo" || mediaProps?.media?.media_type === "Story" ? (
                    <MediaPhotoPageScaffoldItem mediaProps={mediaProps}/>
                ) : null}
                {/*<DynamicVideoPageScaffoldItem videoProps={videoProps}/>*/}
            </div>
            <div className="w-[544px] flex flex-col flex-[0_0_544px]">
                <div className="w-full flex flex-col grow border-b border-solid border-zinc-300 overflow-hidden relative">
                    <div className="w-full px-[32px] py-[24px] block grow overflow-x-hidden overflow-y-auto no-scrollbar relative">
                        <div>
                            <MediaPageScaffoldHeader userProps={userProps} mediaProps={mediaProps}/>
                        </div>
                        <div className="mb-[24px] top-[-28px] bg-white sticky z-10">
                            <div className="h-[50px] pt-[18px] flex flex-row items-center relative">
                                <div className="w-1/2 h-full border-b-2 border-solid border-black">
                                    <span className="block text-[14px] text-black text-center font-bold break-words cursor-pointer relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Comment {totalComment ? (`(${totalComment})`) : null}
                                        </span>
                                    </span>
                                </div>
                                <div className="w-1/2 h-full">
                                    <span className="block text-[14px] text-zinc-500 text-center font-normal break-words cursor-pointer relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Creator's {mediaProps?.media?.media_type?.charAt(0).toUpperCase() + mediaProps?.media?.media_type?.slice(1)}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="mx-[-32px] mb-[-1px] border-t border-solid border-zinc-200"></div>
                        </div>
                        <div>
                            {mediaProps?.media?.comment?.map((value, index) => (
                                <MediaPageScaffoldCommentItem key={index} userProps={userProps} mediaProps={value}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-[32px] py-[20px] flex-[0_0_auto] bg-white relative">
                    <MediaPageScaffoldFooter userProps={userProps} mediaProps={mediaProps} mediaType={mediaType}/>
                </div>
            </div>
        </div>
    );
};

export default MediaPageScaffold;