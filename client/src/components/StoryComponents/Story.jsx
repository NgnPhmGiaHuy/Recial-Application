"use client"

import Image from "next/image";
import {flushSync} from "react-dom";
import {useRef, useState} from "react";

import {StoryItem} from "@/components";

const Story = ({userProps}) => {
    const storyItemSelectedRef = useRef(null);
    const [storyItemIndex, setStoryItemIndex] = useState(0);

    const handleShowPrevStory = () => {
        flushSync(() => {
            if (storyItemIndex > 0){
                setStoryItemIndex(storyItemIndex - 3 < 0 ? 0 : storyItemIndex - 3);
            } else {
                setStoryItemIndex(0);
            }
        });
        if (storyItemSelectedRef.current) {
            storyItemSelectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    const handleShowNextStory = () => {
        flushSync(() => {
            const newIndex = storyItemIndex + 3;
            if (newIndex < userProps.stories.length) {
                setStoryItemIndex(newIndex);
            } else {
                setStoryItemIndex(userProps.stories.length - 1);
            }
        });
        if (storyItemSelectedRef.current) {
            storyItemSelectedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }

    return (
        <div className="max-w-full relative">
            <div className="min-h-[200px] mb-[14px] relative">
                {storyItemIndex === 0 ? "" : (
                    <div className="top-[50%] left-[44px] translate-x-[calc(-50%-4px)] -translate-y-1/2 absolute opacity-100 transition-opacity ease-in-out duration-300 z-20">
                        <div onClick={() => handleShowPrevStory()} className="w-[48px] h-[48px] flex items-center justify-center shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-full cursor-pointer bg-white hover:bg-zinc-50 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                )}
                <div className="my-[-8px] py-[8px] relative">
                    <div className="py-[8px] flex flex-col overflow-x-auto overflow-y-hidden relative custom-story-scrollbar">
                        <div className="flex flex-row grow relative">
                            <div className="mr-[12px] flex flex-shrink-0 grow-0 basis-[160px] relative">
                                <a href={userProps?.user?._id} className="w-full block overflow-x-hidden overflow-y-hidden cursor-pointer rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                                    <div className="w-full h-0 pt-[230px] overflow-x-hidden overflow-y-hidden relative">
                                        <div className="absolute top-0 right-0 bottom-0 left-0">
                                            <div className="h-full flex flex-col relative">
                                                <div className="h-full overflow-x-hidden overflow-y-hidden relative transition ease-in-out duration-150">
                                                    <div className="w-full h-full relative">
                                                        <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                    </div>
                                                </div>
                                                <div className="pt-[28px] pb-[12px] px-[16px] flex flex-shrink-0 justify-center bg-white relative">
                                                    <div className="w-[40px] h-[40px] top-[-20px] flex items-center justify-center rounded-full bg-white absolute">
                                                        <div className="w-[32px] h-[32px] flex items-center justify-center text-white bg-lime-500 rounded-full">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[13px] text-center text-black break-words font-semibold leading-4">
                                                            <span className="line-clamp-3 overflow-x-hidden overflow-y-hidden relative">
                                                                Create news
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {userProps?.stories?.map((value, index) => (
                                <StoryItem key={index} index={index} selected={storyItemIndex === index} storyItemSelectedRef={storyItemSelectedRef} storyProps={value}/>
                            ))}
                        </div>
                    </div>
                </div>
                {userProps?.stories && storyItemIndex === userProps?.stories?.length - 2 ? "" : (
                    <div className="top-[50%] right-[44px] translate-x-[calc(50%+4px)] -translate-y-1/2 absolute opacity-100 transition-opacity ease-in-out duration-300">
                        <div onClick={() => handleShowNextStory()} className="w-[48px] h-[48px] flex items-center justify-center shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-full cursor-pointer bg-white hover:bg-zinc-50 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Story;