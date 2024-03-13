"use client"

import Image from "next/image";
import { useSelector } from "react-redux";

import { useMediaNavigation } from "@/hooks";

const MediaPhotoPageScaffoldItem = () => {
    const mediaProps = useSelector(state => state.media);

    const { currentMediaIndex, showPrevButton, showNextButton, handleExistClick, handleShowPrevButton, handleShowNextButton, fetchPreviousMedia, fetchNextMedia } = useMediaNavigation()

    return (
        <>
            <div className="w-full h-full inset-0 opacity-50 absolute blur-lg z-0">
                <div className="w-full h-full relative">
                    <Image src={mediaProps?.media?.media_url} alt={mediaProps?.media?.media_url} fill={true}
                           sizes="(max-width: 768px) 100vw" className="object-cover"/>
                </div>
            </div>
            <div className="w-full h-full px-[80px] cursor-pointer relative z-20">
                <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden relative">
                    <div className="w-full h-full top-0 left-0 absolute">
                        <div className="w-full h-full relative">
                            <Image src={mediaProps?.media?.media_url} alt={mediaProps?.media?.media_url} fill={true}
                                   sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-[20px] left-[20px] flex items-center justify-center cursor-pointer absolute z-50">
                <div
                    className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer rounded-xl overflow-hidden text-white bg-black/50 relative hover:bg-black/25 transition-all">
                    <i onClick={handleExistClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3}
                             stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </i>
                </div>
            </div>
            {mediaProps?.media?.media_recent?.length > 1 ? (
                <div>
                    <div className="h-full top-0 left-[10px] flex items-center justify-center cursor-pointer absolute z-50"
                         onMouseEnter={handleShowPrevButton} onMouseLeave={handleShowPrevButton}>
                        <div className="w-[60px] h-[60px] relative">
                            {showPrevButton ? (
                                <div
                                    className="w-full h-full flex items-center justify-center cursor-pointer rounded-xl overflow-hidden text-white bg-white/50 relative hover:bg-white/25 transition-all">
                                    <i onClick={fetchPreviousMedia}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={3}
                                             stroke="currentColor" dataSlot="icon" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M15.75 19.5 8.25 12l7.5-7.5"/>
                                        </svg>
                                    </i>
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="h-full top-0 right-[10px] flex items-center justify-center cursor-pointer absolute z-50"
                         onMouseEnter={handleShowNextButton} onMouseLeave={handleShowNextButton}>
                        <div className="w-[60px] h-[60px] relative">
                            {showNextButton && (
                                <div
                                    className="w-full h-full flex items-center justify-center cursor-pointer rounded-xl overflow-hidden text-white bg-white/50 relative hover:bg-white/25 transition-all">
                                    <i onClick={fetchNextMedia}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={3}
                                             stroke="currentColor" dataSlot="icon" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                                        </svg>
                                    </i>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default MediaPhotoPageScaffoldItem;