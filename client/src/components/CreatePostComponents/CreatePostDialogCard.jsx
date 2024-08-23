import { shallowEqual, useSelector } from "react-redux";

import { useContentEditable, useMultipleImagesData, useSetPostData } from "@/hooks";
import { CreatePostDialogCardHeader, CreatePostDialogImageInput, CreatePostDialogCardNavigation, GifPicker } from "@/components";

const CreatePostDialogCard = () => {
    const userProps = useSelector(state => state.user, shallowEqual);
    const groupProps = useSelector(state => state.group, shallowEqual);

    const { showCreatePostMediaInput } = useSelector(state => state.toggle);

    const { handleSetPostData } = useSetPostData();
    const { selectedImagesFunction } = useMultipleImagesData();
    const { inputRef, inputText, allowSubmit, handleInputTextChange } = useContentEditable();

    const handleSubmitPost = async () => {
        await handleSetPostData({ inputText: inputText, inputImage: selectedImagesFunction.selectedImages, userProps: userProps, groupProps: groupProps });
    }

    return (
        <div className="w-full h-full relative">
            <div className="w-full h-full flex flex-row overflow-x-visible overflow-y-visible">
                <div className="w-full h-full flex flex-col relative">
                    <div>
                        <CreatePostDialogCardHeader/>
                    </div>
                    <div className="flex flex-col grow overflow-x-hidden overflow-y-auto overscroll-y-contain no-scrollbar relative">
                        <div className="flex flex-col grow relative">
                            <div className="w-full max-h-[20vh] grow cursor-text relative">
                                <div className="w-full h-fit px-[16px] pb-[40px] relative">
                                    <div className="flex items-center relative">
                                        <div className="w-full h-full pb-[8px] pt-[4px] text-[24px] text-black text-ellipsis overflow-hidden font-normal leading-7">
                                            <div className="w-full h-full text-black select-text whitespace-pre-wrap break-words outline-none relative" contentEditable={true} spellCheck={false} onInput={handleInputTextChange} ref={inputRef}>
                                            </div>
                                            <div className="top-[5px] overflow-hidden text-zinc-500 text-ellipsis pointer-events-none absolute z-[1]">
                                                {inputText.length === 0 ? `What's on your mind, ${userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname}?` : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {showCreatePostMediaInput &&
                                <CreatePostDialogImageInput selectedImagesFunction={selectedImagesFunction}/>}
                            {/*    Use for display pannel below*/}
                        </div>
                    </div>
                    <div className="py-[16px] relative">
                        <CreatePostDialogCardNavigation/>
                        <div className="w-full px-[16px] pt-[16px] flex items-center justify-between relative" onClick={handleSubmitPost}>
                            <div className={`${allowSubmit || selectedImagesFunction.selectedImages.length ? "cursor-pointer" : "cursor-not-allowed"} w-full inline-flex flex-col justify-center relative`}>
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
    );
};

export default CreatePostDialogCard;