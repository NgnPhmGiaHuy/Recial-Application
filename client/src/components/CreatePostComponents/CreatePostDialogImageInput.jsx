import { useDispatch } from "react-redux";

import { toggleCreatePostMediaInput } from "@/store/actions/toggle/toggleActions";
import { CreatePostDialogImageInputEmpty, CreatePostDialogImageInputSelected, DevicePhoneMobileIcon, XMarkIcon } from "@/components";

const CreatePostDialogImageInput = ({ selectedImagesFunction }) => {
    const dispatch = useDispatch();

    const toggleShowCreatePostMediaInput = () => {
        return dispatch(toggleCreatePostMediaInput());
    }

    return (
        <div className="px-[8px] animate-float">
            <div className="mx-[8px] mt-[32px] flex items-center justify-center border border-solid border-zinc-500 rounded-xl overflow-hidden relative">
                <div className="w-full my-[8px] flex flex-col relative">
                    <div className="mb-[4px] px-[8px] flex flex-col relative">
                        { selectedImagesFunction.selectedImages && selectedImagesFunction.selectedImages.length ? (
                            <CreatePostDialogImageInputSelected selectedImagesFunction={selectedImagesFunction} />
                        ) : (
                            <CreatePostDialogImageInputEmpty selectedImagesFunction={selectedImagesFunction} />
                        ) }
                    </div>
                    <div className="mt-[4px] px-[8px] flex flex-col relative">
                        <div className="w-full flex relative">
                            <div className="w-full rounded-xl bg-zinc-100 overflow-hidden">
                                <div className="m-[-4px] p-[8px] flex items-center relative">
                                    <div className="p-[4px] flex-shrink-0 relative">
                                        <div className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-zinc-200">
                                            <DevicePhoneMobileIcon fill="none" stroke="currentColor" width={24} height={24} />
                                        </div>
                                    </div>
                                    <div className="p-[4px] flex flex-col flex-shrink grow self-center">
                                        <span className="text-[13px] text-black font-normal leading-4">
                                            Add photos and videos from your mobile device.
                                        </span>
                                    </div>
                                    <div className="p-[4px] flex-shrink-0 relative">
                                        <div className="h-[36px] px-[12px] flex items-center justify-center rounded-xl bg-zinc-200 hover:bg-zinc-300 transition-all cursor-pointer" onClick={selectedImagesFunction.handleTriggerClick}>
                                            <span className="text-[15px] text-black font-semibold leading-5">
                                                Add
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-[12px] right-[10px]">
                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded-xl text-zinc-500 bg-black/10 cursor-pointer hover:bg-black/20 hover:text-white transition-all" onClick={toggleShowCreatePostMediaInput}>
                        <XMarkIcon fill="none" stroke="currentColor" strokeWidth={3} width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogImageInput;