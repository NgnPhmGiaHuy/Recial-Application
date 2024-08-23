import { PhotoAddIcon } from "@/components";

const CreatePostDialogImageInputEmpty = ({ selectedImagesFunction }) => {
    return (
        <>
            <input ref={selectedImagesFunction.fileInputRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" multiple={true} onChange={selectedImagesFunction.handleFileUpload}/>
            <div className="inline-flex flex-row flex-shrink-0 items-stretch basis-auto cursor-pointer relative" onClick={selectedImagesFunction.handleTriggerClick}>
                <div className="w-full flex relative">
                    <div className="max-h-[221px] min-h-[150px] w-full h-[25vh] rounded-md overflow-hidden bg-zinc-100 relative hover:bg-zinc-300 transition-all">
                        <div className="h-full flex flex-col relative">
                            <div className="flex flex-col justify-center grow cursor-pointer relative">
                                <div className="mb-[4px] flex flex-col flex-shrink-0 items-center relative">
                                    <div className="w-[40px] h-[40px] inline-flex items-center justify-center rounded-full bg-zinc-200">
                                        <PhotoAddIcon stroke="currentColor" strokeWidth={0} width={32} height={32} />
                                    </div>
                                </div>
                                <div className="max-w-full mt-[4px] flex flex-col flex-shrink-0 items-center relative">
                                    <span className="block text-[17px] text-center text-black font-medium break-words relative leading-5">
                                        Add Photos/Videos
                                    </span>
                                </div>
                                <div className="max-w-full mt-[4px] flex flex-col flex-shrink-0 items-center relative">
                                    <span className="block text-[12px] text-center text-zinc-500 font-normal break-words relative leading-4">
                                        or drag and drop
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePostDialogImageInputEmpty;