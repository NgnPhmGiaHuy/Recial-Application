"use client"

import { useEffect } from "react";

import { useContentEditable } from "@/hooks";

const VideoUploadScaffoldDataContentDescription = ({ videoProps, setVideoProps }) => {
    const { inputRef, inputText, setInputText, setAllowSubmit, allowSubmit, handleAddEmoji, handleInputTextChange } = useContentEditable(2000);

    useEffect(() => {
        setVideoProps((prevProps) => ({
            ...prevProps,
            meta: {
                ...prevProps.meta,
                description: inputText.length === 0 ? prevProps.meta.name.split(".").shift() : inputText,
            },
        }));
    }, [inputText, setVideoProps]);

    return (
        <div>
            <div className="mb-[24px]">
                <div className="mb-[8px] flex items-center justify-between relative">
                    <span className="block text-[16px] text-black text-left font-medium relative leading-5">
                        Description
                    </span>
                </div>
                <div className="pt-[16px] bg-black/[0.05] rounded-xl relative">
                    <div className="max-h-[63px] h-[63px] mb-[12px] px-[16px] overflow-y-auto relative">
                        <div className="w-full h-full text-[16px] text-black text-left relative leading-5">
                            <div className="w-full h-full select-text whitespace-pre-wrap break-words outline-none relative" contentEditable={true} spellCheck={false} onInput={handleInputTextChange} ref={inputRef}></div>
                            <div className="top-[1px] text-ellipsis pointer-events-none absolute">
                                <div className="whitespace-pre-wrap">
                                    { inputText.length === 0 ? videoProps?.meta?.name.split(".").shift() : null }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-[16px] pb-[16px] flex items-center justify-between relative">
                        <div className="flex items-center gap-4 relative">
                            <div>
                                <div className="flex flex-row items-center text-[14px] text-zinc-500 text-left font-medium tracking-[0.093px] gap-1 cursor-pointer relative leading-5">
                                    <span>
                                        #
                                    </span>
                                    <span>
                                        Hashtags
                                    </span>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-row items-center text-[14px] text-zinc-500 text-left font-medium tracking-[0.093px] gap-1 cursor-pointer relative leading-5">
                                    <span>@</span>
                                    <span>Mention</span>
                                </div>
                            </div>
                        </div>
                        <div className="block text-[13px] text-zinc-500 text-left font-normal tracking-[0.127px] relative leading-5">
                            <span>
                                { inputText.length }
                            </span>
                            <span>/</span>
                            <span>2000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContentDescription;