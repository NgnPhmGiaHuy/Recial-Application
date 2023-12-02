import dynamic from "next/dynamic";

import {VideoPageScaffoldCommentItem, VideoPageScaffoldFooter, VideoPageScaffoldHeader} from "@/components";
const DynamicVideoPageScaffoldItem = dynamic(() => import("@/components/VideoComponents/VideoPageScaffoldItem"), { ssr: false });

const VideoPageScaffold = ({videoProps}) => {
    return (
        <div className="top-0 right-0 bottom-0 left-0 flex flex-row fixed bg-white">
            <div className="max-w-full px-[80px] flex-[1_0_600px] bg-black/95 overflow-hidden relative">
                <DynamicVideoPageScaffoldItem videoProps={videoProps}/>
            </div>
            <div className="w-[544px] flex flex-col flex-[0_0_544px]">
                <div className="w-full flex flex-col grow border-b border-solid border-zinc-300 overflow-hidden relative">
                    <div className="w-full px-[32px] py-[24px] block grow overflow-x-hidden overflow-y-auto relative">
                        <div>
                            <VideoPageScaffoldHeader videoProps={videoProps}/>
                        </div>
                        <div className="mb-[24px] top-[-28px] bg-white sticky z-10">
                            <div className="h-[50px] pt-[18px] flex flex-row items-center relative">
                                <div className="w-1/2 h-full border-b-2 border-solid border-black">
                                    <span className="block text-[14px] text-black text-center font-bold break-words cursor-pointer relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Comment ({videoProps.comments.length})
                                        </span>
                                    </span>
                                </div>
                                <div className="w-1/2 h-full">
                                    <span className="block text-[14px] text-zinc-500 text-center font-normal break-words cursor-pointer relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Creator's video
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="mx-[-32px] mb-[-1px] border-t border-solid border-zinc-200"></div>
                        </div>
                        <div>
                            {videoProps.comments.map((value, index) => (
                                <VideoPageScaffoldCommentItem key={index} videoProps={value}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-[32px] py-[20px] flex-[0_0_auto] bg-white relative">
                    <VideoPageScaffoldFooter/>
                </div>
            </div>
        </div>
    );
};

export default VideoPageScaffold;