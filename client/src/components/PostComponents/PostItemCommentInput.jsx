"use client"

import Link from "next/link";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { handleSingleImageFileUpload } from "@/utils";
import { useContentEditable, useCommentData, useClickOutside, useResetInput } from "@/hooks";
import { FaceSmileIcon, ImageIcon, InputField, PhotoIcon, TriangleRightIcon } from "@/components";

const PostItemCommentInput = ({ postProps, isReply }) => {
    const userProps = useSelector(state => state.user, shallowEqual);
    const iconRef = useRef(null);
    const commentInputRef = useRef(null);

    const [selectedImage, setSelectedImage] = useState(null);
    const [showIconPanel, setShowIconPanel] = useState(false);

    const { inputRef, inputText, setInputText, setAllowSubmit, allowSubmit, handleAddEmoji, handleInputTextChange } = useContentEditable();

    const { status, setStatus, handleSetCommentData } = useCommentData();

    const handleSubmitComment = async () => {
        await handleSetCommentData({ inputText: inputText, inputImage: selectedImage, postProps: postProps, isReply: isReply });
    }

    const handleFileUpload = async (event) => handleSingleImageFileUpload(event, setSelectedImage);

    useClickOutside(iconRef, showIconPanel, setShowIconPanel);
    useResetInput(inputRef, inputText, setInputText, setAllowSubmit, status, setStatus, () => setSelectedImage(null));

    return (
        <div className={`${isReply ? "ml-[44px]" : "mx-[16px]"} pt-[4px] pb-[8px] flex flex-row flex-shrink-0 items-start`}>
            <div className="mr-[4px] sm:my-[4px] my-[6px] flex-col justify-center relative">
                <Link href={userProps?.user?._id}>
                    <ImageIcon src={userProps?.user?.profile?.profile_picture_url} width={44} height={44} />
                </Link>
            </div>
            <div className="w-full max-h-[50vh] min-h-[40px] my-[4px] flex flex-row flex-shrink flex-grow relative">
                <form action="" className="w-full h-full grow cursor-text relative">
                    <div className="w-full h-full px-[16px] py-[2px] flex flex-col rounded-xl border-2 border-solid border-zinc-200 bg-white relative">
                        <div className="w-full h-full flex flex-wrap items-center relative">
                            <InputField forwardRef={inputRef} inputText={inputText} handleInput={handleInputTextChange} maxHeight="40vh" width="auto" height="100%" paddingTop={6} paddingBottom={8} />
                            <div className="h-full ml-auto flex flex-row items-center justify-between relative">
                                <div onClick={() => setShowIconPanel(prevState => !prevState)}>
                                    <div className="w-[44px] h-[36px] flex flex-col items-center justify-center text-zinc-500 rounded-full cursor-pointer relative hover:bg-zinc-200 transition-all">
                                        <FaceSmileIcon fill="none" stroke="currentColor" strokeWidth={2} width={28} height={28} />
                                    </div>
                                </div>
                                <div onClick={() => commentInputRef.current.click()}>
                                    <div className="w-[44px] h-[36px] flex flex-col items-center justify-center text-zinc-500 rounded-full cursor-pointer relative hover:bg-zinc-200 transition-all">
                                        <PhotoIcon fill="none" stroke="currentColor" strokeWidth={2} width={28} height={28} />
                                    </div>
                                </div>
                                { (selectedImage || allowSubmit) && (
                                    <div className="w-[44px] h-[36px] flex flex-col items-center justify-center text-zinc-500 rounded-full cursor-pointer relative hover:bg-zinc-200 transition-all" onClick={handleSubmitComment}>
                                        <TriangleRightIcon fill="none" stroke="currentColor" strokeWidth={2} width={36} height={36} />
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div>
                            <input ref={commentInputRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" multiple={false} onChange={handleFileUpload}/>
                            { selectedImage && (
                                <div className="py-[12px]">
                                    <ImageIcon src={selectedImage} width={120} height={120} borderRadius={12} />
                                </div>
                            ) }
                        </div>
                    </div>
                </form>
                { showIconPanel && (
                    <div className="bottom-[40px] right-[84px] absolute z-20">
                        <div ref={iconRef} className="w-full h-full shadow-md relative">
                            <Picker data={data} onEmojiSelect={(emoji) => handleAddEmoji(emoji)} />
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default PostItemCommentInput;