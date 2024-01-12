import { CreatePostDialogImageInputEmpty, CreatePostDialogImageInputSelected } from "@/components";

const CreatePostDialogImageInput = ({ handleShowCreatePostMediaInput, selectedImagesFunction }) => {
    return (
        <div className="px-[8px] animate-float">
            <div className="mx-[8px] mt-[32px] flex items-center justify-center border border-solid border-zinc-500 rounded-md overflow-hidden relative">
                <div className="max-w-full my-[8px] flex flex-col flex-shrink grow basis-full relative">
                    <div className="flex flex-col grow relative">
                        <div className="max-w-full mb-[4px] px-[8px] flex flex-col flex-shrink-0 relative">
                            {selectedImagesFunction.selectedImages && selectedImagesFunction.selectedImages.length ? (
                                <CreatePostDialogImageInputSelected selectedImagesFunction={selectedImagesFunction} />
                            ) : (
                                <CreatePostDialogImageInputEmpty selectedImagesFunction={selectedImagesFunction} />
                            )}
                        </div>
                        <div className="max-w-full mt-[4px] px-[8px] flex flex-col flex-shrink-0 relative">
                            <div className="w-full flex relative">
                                <div className="w-full rounded-md bg-zinc-100 overflow-hidden">
                                    <div className="m-[-4px] p-[8px] flex flex-row flex-nowrap items-center justify-start relative">
                                        <div className="max-w-full p-[4px] flex flex-col flex-shrink-0 relative">
                                            <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full overflow-hidden bg-zinc-200 relative">
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
                                                    </svg>
                                                </i>
                                            </div>
                                        </div>
                                        <div className="p-[4px] flex flex-col flex-shrink grow self-center basis-0 relative">
                                            <span className="block text-[13px] text-left text-black font-normal break-words relative leading-4">
                                                <span className="overflow-hidden relative">
                                                    Add photos and videos from your mobile device.
                                                </span>
                                            </span>
                                        </div>
                                        <div className="max-w-full p-[4px] flex flex-col flex-shrink-0 relative">
                                            <div className="w-full inline-flex flex-col justify-center cursor-pointer relative">
                                                <div className="h-[36px] px-[12px] flex flex-row items-center justify-center rounded-md bg-zinc-200 relative hover:bg-zinc-300 transition-all" onClick={selectedImagesFunction.handleTriggerClick}>
                                                    <span className="text-[15px] text-left text-black font-semibold relative leading-5">
                                                        <span className="overflow-hidden relative">
                                                            Add
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
                <div className="top-[12px] right-[10px] absolute">
                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-zinc-500 bg-black/10 cursor-pointer relative hover:bg-black/20 transition-all" onClick={handleShowCreatePostMediaInput}>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogImageInput;
