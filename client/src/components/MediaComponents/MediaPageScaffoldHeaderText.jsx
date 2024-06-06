import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { useOverflowText } from "@/hooks";

const MediaPageScaffoldHeaderText = () => {
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const { textRef, showMoreText, isOverflowing, handleShowMoreText } = useOverflowText(mediaProps?.media_description);

    return (
        <div>
            <div className="flex flex-col overflow-visible">
                <div className="flex flex-col w-full overflow-hidden relative">
                    <div className="w-full text-ellipsis overflow-hidden relative before:h-[calc(100%-21px)] before:w-0 before:mt-0 before:float-right">
                        <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-2 max-h-[44px]"} webkit-box text-[16px] text-black text-left break-words relative leading-5`}>
                            <span className="font-normal leading-5">
                                {mediaProps?.media_description} &nbsp;
                            </span>
                            {mediaProps?.tags?.map((value, index) => (
                                <Link href="" key={index}>
                                    <strong>
                                        <span className="text-lime-500 hover:text-lime-700 transition-all">
                                            #{value} &nbsp;
                                        </span>
                                    </strong>
                                </Link>
                            ))}
                        </span>
                    </div>
                    { !showMoreText && isOverflowing && (
                        <div className="flex items-center rounded-md cursor-pointer bg-zinc-100 z-10">
                            <span className="text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5" onClick={handleShowMoreText}>
                                <span className="overflow-hidden relative">
                                    More
                                </span>
                            </span>
                        </div>
                    ) }
                    { showMoreText && isOverflowing && (
                        <div className="flex items-center rounded-md cursor-pointer bg-zinc-100 z-10">
                            <span className="text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5" onClick={handleShowMoreText}>
                                <span className="overflow-hidden relative">
                                    Less
                                </span>
                            </span>
                        </div>
                    ) }
                </div>
                { mediaProps?.media_type === "Video" && (
                    <div className="mt-[8px] flex-[0_0_auto]">
                        <Link href="">
                            <div className="flex flex-row items-center">
                                <div className="w-[14px] h-[14px] mr-[8px] flex items-center justify-center relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
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
                        </Link>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default MediaPageScaffoldHeaderText;