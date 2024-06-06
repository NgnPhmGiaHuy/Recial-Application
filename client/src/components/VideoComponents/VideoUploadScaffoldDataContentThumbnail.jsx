import Image from "next/image";

const VideoUploadScaffoldDataContentThumbnail = ({ videoProps }) => {
    return (
        <div>
            <div className="mb-[16px]">
                <div className="mb-[8px] flex flex-row items-center justify-start gap-1 relative">
                    <div>
                        <span className="block text-[16px] text-black text-left font-medium relative leading-5">
                            Cover
                        </span>
                    </div>
                    <div className="w-[16px] h-[16px] flex items-center justify-center text-zinc-500 relative">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"/>
                            </svg>
                        </i>
                    </div>
                </div>
                <div className="w-[150px] h-[200px] flex flex-col rounded-xl overflow-hidden cursor-pointer relative">
                    <Image src={videoProps.thumbnail} alt={`${videoProps.thumbnail}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    <div className="w-full h-full inset-0 flex flex-col items-center justify-center place-content-center text-white bg-black/[0.65] absolute">
                        <div className="w-[32px] h-[32px] mb-[8px] flex items-center justify-center relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                            </svg>
                        </div>
                        <div className="flex flex-row items-center justify-center relative">
                            <span className="block text-[15px] text-center font-medium relative leading-5">
                                Edit cover
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContentThumbnail;