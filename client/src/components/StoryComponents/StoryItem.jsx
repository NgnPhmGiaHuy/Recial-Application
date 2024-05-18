import Link from "next/link";
import Image from "next/image";
import React, { forwardRef } from "react";

const StoryItem = forwardRef(({ storyProps }, ref) => {
    return (
        <div ref={ref} className="mr-[12px] flex flex-shrink-0 grow-0 sm:basis-[160px] basis-[100px] relative">
            <Link href={`/story/?user=${storyProps?.user?._id}&story=${storyProps?.stories[0]?.story._id}`} className="w-full block overflow-hidden cursor-pointer shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-xl relative">
                <div className="w-full h-0 sm:pt-[230px] pt-[140px] overflow-hidden relative">
                    <div className="absolute top-0 right-0 bottom-0 left-0">
                        <div className="h-full flex flex-col relative">
                            <div className="h-full overflow-hidden relative transition ease-in-out duration-150">
                                <div className="w-full h-full relative">
                                    <Image src={storyProps?.stories[0]?.story?.story_media_url} alt={`${storyProps?.stories[0]?.story?.story_media_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                            <div className="w-full sm:pt-[28px] pt-[14px] sm:pb-[12px] pb-[6px] sm:px-[16px] px-[8px] bottom-0 flex flex-shrink-0 justify-center absolute">
                                <div className="sm:w-[40px] w-[36px] sm:h-[40px] h-[36px] top-[-20px] flex items-center justify-center rounded-full bg-lime-500 absolute">
                                    <div className="w-[32px] h-[32px] flex items-center justify-center text-white bg-lime-500 rounded-full overflow-hidden relative">
                                        <Image src={storyProps?.user?.profile?.profile_picture_url} alt={`${storyProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                        <span className="w-2 h-2 -bottom-1 -right-1 rounded-full bg-lime-500 absolute z-20"></span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block sm:text-[13px] text-[10px] text-center text-white break-words font-semibold leading-4">
                                        <span className="line-clamp-3 overflow-hidden relative">
                                            { storyProps?.user?.profile?.username || storyProps?.user?.profile?.firstname + " " + storyProps?.user?.profile?.lastname }
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
});

export default StoryItem;