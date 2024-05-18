import { GifPicker } from "@/components";

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
                    <div
                        className="w-[36px] h-[36px] flex items-center justify-center rounded-full overflow-x-hidden cursor-pointer bg-zinc-200 hover:bg-zinc-300 relative">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
                            </svg>
                        </i>
                    </div>
                </div>
            </div>
            <div>
                <div className="max-h-full flex flex-col">
                    <div
                        className="min-h-[35rem] flex flex-col flex-shrink grow basis-full overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-contain relative">
                        <GifPicker/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePostDialogGif;