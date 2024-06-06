import { shallowEqual, useSelector } from "react-redux";

import { useCountComment } from "@/hooks";
import { MediaPageScaffoldCommentItem, MediaPageScaffoldFooter, MediaPageScaffoldHeader } from "@/components";

const MediaPageScaffoldAside = () => {
    const mediaProps = useSelector(state => state.media, shallowEqual);

    const totalComment = useCountComment(mediaProps);

    return (
        <>
            <div className="w-[544px] flex flex-col flex-[0_0_544px]">
                <div className="w-full flex flex-col grow border-b border-solid border-zinc-300 overflow-hidden relative">
                    <div className="w-full px-[32px] py-[24px] block grow overflow-x-hidden overflow-y-auto no-scrollbar relative">
                        <div>
                            <MediaPageScaffoldHeader/>
                        </div>
                        <div className="mb-[24px] top-[-28px] bg-white sticky z-10">
                            <div className="h-[50px] pt-[18px] flex flex-row items-center relative">
                                <div className="w-1/2 h-full border-b-2 border-solid border-black">
                                    <span className="block text-[14px] text-black text-center font-bold break-words cursor-pointer relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Comment {totalComment ? (`(${totalComment})`) : null}
                                        </span>
                                    </span>
                                </div>
                                <div className="w-1/2 h-full">
                                    <span className="block text-[14px] text-zinc-500 text-center font-normal break-words cursor-pointer relative leading-5">
                                        <span className="overflow-hidden relative">
                                            Creator's {mediaProps?.media_type?.charAt(0).toUpperCase() + mediaProps?.media_type?.slice(1)}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="mx-[-32px] mb-[-1px] border-t border-solid border-zinc-200"></div>
                        </div>
                        <div>
                            { mediaProps?.comment?.map((value, index) => (
                                <MediaPageScaffoldCommentItem key={index} commentProps={value}/>
                            )) }
                        </div>
                    </div>
                </div>
                <div className="mx-[32px] py-[20px] flex-[0_0_auto] bg-white relative">
                    <MediaPageScaffoldFooter/>
                </div>
            </div>
        </>
    );
};

export default MediaPageScaffoldAside;