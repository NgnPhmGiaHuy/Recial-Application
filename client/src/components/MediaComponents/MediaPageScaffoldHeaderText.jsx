import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { useOverflowText } from "@/hooks";
import { MusicalNoteIcon } from "@/components";

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
                            { mediaProps?.tags?.map((value, index) => (
                                <Link href="" key={index}>
                                    <strong>
                                        <span className="text-lime-500 hover:text-lime-700 transition-all">
                                            #{value} &nbsp;
                                        </span>
                                    </strong>
                                </Link>
                            )) }
                        </span>
                    </div>
                    { !showMoreText && isOverflowing && (
                        <div className="flex items-center rounded-md cursor-pointer bg-zinc-100 z-10">
                            <span className="text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5" onClick={handleShowMoreText}>
                                More
                            </span>
                        </div>
                    ) }
                    { showMoreText && isOverflowing && (
                        <div className="flex items-center rounded-md cursor-pointer bg-zinc-100 z-10">
                            <span className="text-[16px] text-zinc-500 text-left font-semibold break-words relative leading-5" onClick={handleShowMoreText}>
                                Less
                            </span>
                        </div>
                    ) }
                </div>
                { mediaProps?.media_type === "Video" && (
                    <div className="mt-[8px] flex-[0_0_auto]">
                        <Link href="">
                            <div className="flex flex-row items-center">
                                <div className="w-[14px] h-[14px] mr-[8px] flex items-center justify-center relative">
                                    <MusicalNoteIcon fill="none" stroke="currentColor" width={12} height={12} />
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