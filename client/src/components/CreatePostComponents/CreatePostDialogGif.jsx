import { ArrowLeftIcon, GifPicker } from "@/components";

const CreatePostDialogGif = () => {
    return (
        <div className="min-w-[750px] relative">
            <div>
                <div className="h-[60px] flex items-center justify-center border-b border-solid border-zinc-200">
                    <span className="block text-[20px] text-black font-bold break-words leading-6">
                        <span className="overflow-hidden whitespace-nowrap text-ellipsis relative">
                            Choose a GIF
                        </span>
                    </span>
                </div>
                <div className="top-[12px] left-[16px] absolute">
                    <div className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-x-hidden cursor-pointer bg-zinc-200 hover:bg-zinc-300 relative">
                        <ArrowLeftIcon fill="none" stroke="currentColor" strokeWidth={2} />
                    </div>
                </div>
            </div>
            <div>
                <div className="max-h-full flex flex-col">
                    <div className="min-h-[35rem] flex flex-col flex-shrink grow basis-full overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-contain relative">
                        <GifPicker/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogGif;