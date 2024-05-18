"use client"

import Link from "next/link";
import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

import { useSliderScroll, useUserStoryData } from "@/hooks";
import { MediumNextButton, MediumPrevButton, StoryItem } from "@/components";

const Story = () => {
    const userProps = useSelector(state => state.user, shallowEqual);

    const { storyProps } = useUserStoryData();
    const { itemRefs, containerRef, scrollLeftVisible, scrollRightVisible, handleScroll } = useSliderScroll({ storyProps });

    return (
        <div className="w-full flex flex-col flex-shrink-0 relative">
            <div className="w-full sm:min-h-[200px] min-h-[140px] mb-[14px] overflow-hidden relative">
                <div className="my-[-8px] py-[8px] flex flex-col flex-shrink-0 grow relative">
                    <div ref={containerRef} className="py-[8px] flex flex-col overflow-x-auto overflow-y-hidden overscroll-x-contain no-scrollbar relative">
                        <div className="flex flex-row grow relative">
                            <div ref={(ref) => (itemRefs.current[0] = ref)} className="mr-[12px] flex flex-shrink-0 grow-0 sm:basis-[160px] basis-[100px] relative">
                                <Link href={`/${userProps?.user?._id}`} className="w-full block overflow-hidden cursor-pointer rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                                    <div className="w-full h-0 sm:pt-[230px] pt-[140px] overflow-hidden relative">
                                        <div className="absolute top-0 right-0 bottom-0 left-0">
                                            <div className="h-full flex flex-col relative">
                                                <div className="h-full overflow-hidden relative transition ease-in-out duration-150">
                                                    <div className="w-full h-full relative">
                                                        <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                    </div>
                                                </div>
                                                <div className="sm:pt-[28px] pt-[14px] sm:pb-[12px] pb-[6px] sm:px-[16px] px-[8px] flex flex-shrink-0 justify-center bg-white relative">
                                                    <div className="sm:w-[40px] w-[32px] sm:h-[40px] h-[32px] top-[-20px] flex items-center justify-center rounded-xl bg-white absolute">
                                                        <div className="w-[32px] h-[32px] flex items-center justify-center text-white bg-lime-500 rounded-xl">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="block sm:text-[13px] text-[10px] text-center text-black break-words font-semibold leading-4">
                                                            <span className="line-clamp-3 overflow-hidden relative">
                                                                Create news
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            { Array.isArray(storyProps) && storyProps?.map((value, index) => (
                                <StoryItem key={index} storyProps={value} ref={(ref) => (itemRefs.current[index + 1] = ref)}/>
                            )) }
                        </div>
                    </div>
                    { scrollLeftVisible && <MediumPrevButton onClick={() => handleScroll("left")}/>}
                    { scrollRightVisible && <MediumNextButton onClick={() => handleScroll("right")}/> }
                </div>
            </div>
        </div>
    );
};

export default Story;