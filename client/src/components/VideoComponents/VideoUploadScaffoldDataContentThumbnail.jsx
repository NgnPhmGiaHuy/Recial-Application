import Image from "next/image";

import { useHandleUploadThumbnail } from "@/hooks";
import { InformationCircleIcon, LoadingThreeDotsComponent, PhotoIcon } from "@/components";

const VideoUploadScaffoldDataContentThumbnail = ({ videoProps, setVideoProps }) => {
    const { imageRef, uploading, coverImage, handleFileUpload } = useHandleUploadThumbnail(videoProps, setVideoProps);

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
                        <InformationCircleIcon fill="none" stroke="currentColor" width={16} height={16} />
                    </div>
                </div>
                <div className="w-[150px] h-[200px] flex flex-col rounded-xl overflow-hidden cursor-pointer relative" onClick={() => imageRef.current.click()}>
                    <input ref={imageRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,.mkv" multiple={false} onChange={handleFileUpload} disabled={uploading}/>
                    <Image src={coverImage ? coverImage : videoProps.thumbnail} alt={`${coverImage ? coverImage : videoProps.thumbnail}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    <div className="w-full h-full inset-0 flex flex-col items-center justify-center place-content-center text-white bg-black/[0.65] absolute">
                        { uploading ? (
                            <LoadingThreeDotsComponent backgroundColor="white"/>
                        ) : (
                            <>
                                <div className="w-[32px] h-[32px] mb-[8px] flex items-center justify-center relative">
                                    <PhotoIcon fill="none" stroke="currentColor" width={32} height={32} />
                                </div>
                                <div className="flex flex-row items-center justify-center relative">
                                    <span className="block text-[15px] text-center font-medium relative leading-5">
                                        Edit cover
                                    </span>
                                </div>
                            </>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoUploadScaffoldDataContentThumbnail;