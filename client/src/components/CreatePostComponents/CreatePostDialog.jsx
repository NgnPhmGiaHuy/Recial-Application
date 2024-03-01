"use client"

import { useCallback, useEffect, useState } from 'react';

import Image from "/public/images/Icon/image.png";
import Gif from "/public/images/Icon/gif.png"
import Happiness from "/public/images/Icon/happiness.png";
import Location from "/public/images/Icon/location.png";
import TagPeople from "/public/images/Icon/tag-people.png";

import { useContentEditable, useMultipleImagesData, useSetPostData, useToggleState } from "@/hooks";
import { CreatePostDialogHeader, CreatePostDialogCustomizationItem, CreatePostDialogAudience, CreatePostDialogImageInput } from "@/components";

const CreatePostDialog = ({ userProps, setUserProps, groupProps, createPostRef, handleShowCreatePost }) => {
    const [showCreatePostAudience, setShowCreatePostAudience] = useState(false);

    const { selectedImagesFunction } = useMultipleImagesData();
    const { postSubmitStatus, handleSetPostData } = useSetPostData();

    const [showCreatPostPanel, setShowCreatPostPanel, handleShowCreatPostPanel] = useToggleState(true);
    const [showCreatePostMediaInput, setShowCreatePostMediaInput, handleShowCreatePostMediaInput] = useToggleState(false);

    const { inputContentEditableRef, inputText, allowSubmit, handleInputTextChange } = useContentEditable()

    const handeShowCreatePostAudience = useCallback(() => {
        handleShowCreatPostPanel();
        setShowCreatePostAudience((prevState) => !prevState);
    }, []);

    const createPostContentCustomizationItemList = [
        {
            icon: Image,
            onClick: handleShowCreatePostMediaInput,
        }, {
            icon: Gif,
        }, {
            icon: Happiness,
        }, {
            icon: Location,
        }, {
            icon: TagPeople,
        }, {
            icon: Image,
        },
    ]

    const handleSubmitPost = async () => {
        await handleSetPostData({ inputText: inputText, inputImage: selectedImagesFunction.selectedImages, userProps: userProps, groupProps: groupProps });
    }

    useEffect(() => {
        handleShowCreatePost();
    }, [postSubmitStatus]);

    return (
        <div className="z-[9999] relative">
            <div className="top-0 right-0 bottom-0 left-0 z-0 fixed bg-[rgba(0,0,0,0.75)]">
                <div className="min-h-screen flex flex-col grow items-stretch justify-center animate-float relative">
                    <div className="min-h-[500px] px-[8px] pt-[56px] flex items-start justify-center">
                        <div className="flex flex-col rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-hidden bg-white relative">
                            <form action="" method="POST">
                                <div ref={createPostRef} className="w-[750px] h-[700px] overflow-hidden relative">
                                    <div className={`${showCreatPostPanel ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-full pointer-events-none"} top-0 left-0 absolute`}>
                                        <div className="w-full h-full relative">
                                            <div className="max-h-[90vh] min-h-[700px] flex flex-row overflow-x-visible overflow-y-visible">
                                                <div className="w-[750px] max-h-[80vh] min-h-[700px] flex flex-col relative">
                                                    <div>
                                                        <CreatePostDialogHeader userProps={userProps} handleShowCreatePost={handleShowCreatePost} handeShowCreatePostAudience={handeShowCreatePostAudience}/>
                                                    </div>
                                                    <div className="max-h-[40vh] flex flex-col grow overflow-x-hidden overflow-y-auto overscroll-y-contain no-scrollbar relative">
                                                        <div className="flex flex-col grow relative">
                                                            <div className="w-full max-h-[20vh] grow cursor-text relative">
                                                                <div className="w-full h-fit px-[16px] pb-[40px] relative">
                                                                    <div className="flex items-center relative">
                                                                        <div className="w-full h-full pb-[8px] pt-[4px] text-[24px] text-black text-ellipsis overflow-hidden font-normal leading-7">
                                                                            <div className="w-full h-full text-black select-text whitespace-pre-wrap break-words outline-none relative" contentEditable={true} spellCheck={false} onInput={handleInputTextChange} ref={inputContentEditableRef}>
                                                                            </div>
                                                                            <div className="top-[5px] overflow-hidden text-zinc-500 text-ellipsis pointer-events-none absolute z-[1]">
                                                                                {inputText.length === 0 ? `What's on your mind, ${userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname}?` : null}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            { showCreatePostMediaInput && <CreatePostDialogImageInput handleShowCreatePostMediaInput={handleShowCreatePostMediaInput} selectedImagesFunction={selectedImagesFunction}/> }
                                                            {/*    Use for display pannel below*/}
                                                        </div>
                                                    </div>
                                                    <div className="py-[16px] relative">
                                                        <div className="mx-[16px] p-[8px] flex items-center justify-between border border-solid border-zinc-500 rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
                                                            <div className="px-[8px]">
                                                                <div className="inline-flex flex-row items-stretch cursor-pointer relative">
                                                                    <span className="block text-[15px] text-black font-semibold break-words leading-5">
                                                                        <span className="overflow-hidden relative">
                                                                            Add to your post
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="flex">
                                                                    {createPostContentCustomizationItemList.slice(0, 5).map((value, index) => (
                                                                        <CreatePostDialogCustomizationItem key={index} createPostContentCustomizationData={value} handleShowCreatePostMediaInput={handleShowCreatePostMediaInput}/>
                                                                    ))}
                                                                    <div className="m-[2px]">
                                                                        <span>
                                                                            <div className="inline-flex flex-row items-stretch cursor-pointer relative">
                                                                                <div className="w-[36px] h-[36px] rounded-xl relative bg-transparent hover:bg-zinc-200">
                                                                                    <div className="w-full h-full flex items-center justify-center relative">
                                                                                        <i>
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                                                            </svg>
                                                                                        </i>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full px-[16px] pt-[16px] flex items-center justify-between relative" onClick={handleSubmitPost}>
                                                            <div className={`${allowSubmit || selectedImagesFunction.selectedImages.length ? "cursor-pointer" : "cursor-not-allowed" } w-full inline-flex flex-col justify-center relative`}>
                                                                <div className={`${allowSubmit || selectedImagesFunction.selectedImages.length ? "bg-lime-300 hover:bg-lime-500" : "bg-zinc-200"} h-[36px] px-[12px] flex flex-row flex-nowrap flex-shrink-0 items-center justify-center rounded-xl relative`}>
                                                                    <div className="flex items-center justify-center">
                                                                        <div className="mx-[4px] flex flex-shrink-0 items-center relative">
                                                                            <span className={`${allowSubmit || selectedImagesFunction.selectedImages.length ? "text-white" : "text-zinc-700"} block text-[15px] font-semibold break-words leading-5`}>
                                                                                <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                                                    Post
                                                                                </span>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${showCreatePostAudience ? "opacity-100 visible translate-x-0 animate-movePanelRightToLeft" : "opacity-0 invisible translate-x-full pointer-events-none"} top-0 left-0 absolute `}>
                                        <CreatePostDialogAudience userProps={userProps} setUserProps={setUserProps} handeShowCreatePostAudience={handeShowCreatePostAudience}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialog;