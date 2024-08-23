"use client"

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useRef, useState } from "react";

import { AtSymbolIcon, HappyIcon, XMarkIcon } from "@/components";
import { useCommentMediaData, useContentEditable, useResetInput } from "@/hooks";

const MediaPageScaffoldFooter = ({ commentProps, handleShowReplyPanel }) => {
    const iconRef = useRef(null);

    const { status, setStatus, handleSetCommentData } = useCommentMediaData();
    const { inputRef, inputText, setInputText, setAllowSubmit, allowSubmit, handleAddEmoji, handleInputTextChange } = useContentEditable();

    const [showIconPanel, setShowIconPanel] = useState(false);

    const handleSubmitComment = async () => {
        await handleSetCommentData({ inputText, commentProps });
    }

    useResetInput(inputRef, inputText, setInputText, setAllowSubmit, status, setStatus, () => null);

    return (
        <div className="flex flex-row items-center">
            <div className="flex-[1_1_auto]">
                <div className="px-[8px] flex flex-row items-end rounded-md bg-zinc-100 border border-solid border-transparent">
                    <div className="h-auto mr-[8px] my-[10px] flex-[1_1_auto]">
                        <div className="max-h-[68px] min-h-[17px] text-[14px] no-scrollbar text-black text-left break-words overflow-y-auto leading-4">
                            <div className="flex items-center relative">
                                <div className="w-full h-full select-text whitespace-pre-wrap break-words outline-none relative" contentEditable={true} spellCheck={false} onInput={handleInputTextChange} ref={inputRef}>
                                </div>
                                <div className="top-[1px] text-[14px] text-zinc-500 text-ellipsis pointer-events-none absolute leading-4">
                                    <div className="whitespace-pre-wrap">
                                        { inputText.length === 0 ? "Write a comment..." : null }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[32px] h-[32px] m-[3px] p-[5px] flex flex-[0_0_32px] items-center justify-center rounded-md cursor-pointer bg-transparent hover:bg-zinc-300">
                        <AtSymbolIcon fill="none" stroke="currentColor" />
                    </div>
                    <div onClick={() => setShowIconPanel(prevState => !prevState)} className="relative">
                        <div className="w-[32px] h-[32px] m-[3px] p-[5px] flex flex-[0_0_32px] items-center justify-center rounded-md cursor-pointer bg-transparent hover:bg-zinc-300">
                            <HappyIcon fill="currentColor" stroke="none"/>
                        </div>
                        { showIconPanel && (
                            <div className="bottom-[40px] right-[20px] absolute z-20">
                                <div ref={iconRef} className="w-full h-full shadow-md relative">
                                    <Picker data={data} onEmojiSelect={(emoji) => handleAddEmoji(emoji)} />
                                </div>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
            <div className="mr-[4px] flex-[0_0_48px]" onClick={handleSubmitComment}>
                <span className={`${allowSubmit ? "text-black cursor-pointer" : "text-zinc-300 cursor-not-allowed"} block text-[14px] text-right font-semibold break-words relative leading-10`}>
                    Post
                </span>
            </div>
            { commentProps && handleShowReplyPanel && (
                <div className="w-fit h-full flex flex-[0_0_32px] items-center justify-center cursor-pointer" onClick={handleShowReplyPanel}>
                    <XMarkIcon fill="none" stroke="currentColor" width={20} height={20} />
                </div>
            ) }
        </div>
    );
};

export default MediaPageScaffoldFooter;