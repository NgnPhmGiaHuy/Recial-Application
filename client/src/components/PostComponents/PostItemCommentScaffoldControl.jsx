import Image from "next/image";

import { handleFormatNumber } from "@/utils";
import { PostItemCommentInput } from "@/components";
import { useMostReactedIcons, useToggleState } from "@/hooks";

const PostItemCommentScaffoldControl = ({ postProps }) => {
    const mostReactedIcons = useMostReactedIcons(postProps?.comment_reactions);
    const [showCommentInput, setShowCommentInput, handleShowCommentInput] = useToggleState(false);

    return (
        <div>
            <div className="ml-[44px] pl-[8px]">
                <div className="mt-[4px] flex items-center">
                    <div className="pr-[8px] text-[12px] flex items-center">
                        <div className="px-[4px] flex flex-wrap items-center justify-center rounded-xl overflow-hidden cursor-pointer hover:bg-zinc-200">
                            <span className="text-zinc-500 text-left font-semibold break-words relative">
                                <span className="overflow-hidden relative">
                                    Like
                                </span>
                            </span>
                        </div>
                        { postProps?.comment_reactions && postProps?.comment_reactions.length ? (
                            <>
                                <div className="pl-[4px] pr-[8px] flex">
                                    <span className="w-[2px] h-[2px] bg-zinc-700 rounded-full overflow-hidden"></span>
                                </div>
                                <div className="flex flex-row items-center relative">
                                    <span className="flex items-center">
                                        { mostReactedIcons.map((icon, index) => (
                                            <span key={index} className="w-[16px] h-[16px] mr-[-4px] border-[2px] border-solid border-white rounded-full relative cursor-pointer z-20">
                                                    <Image src={icon} alt={`${icon}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                            </span>
                                        )) }
                                    </span>
                                    <div className="flex items-center justify-center">
                                        <span className="text-[12px] text-zinc-500 text-left font-normal relative leading-4">
                                            <span className="pl-[8px] cursor-pointer relative hover:underline transition-all">
                                                { handleFormatNumber(postProps?.comment_reactions?.reduce((sum) => sum + 1, 0)) }
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : null }
                    </div>
                    <div className="w-[1px] h-[12px] bg-zinc-500"></div>
                    <div className="px-[8px] text-[12px] flex items-center">
                        <div className="px-[4px] flex flex-wrap items-center justify-center rounded-xl overflow-hidden cursor-pointer hover:bg-zinc-200"
                            onClick={handleShowCommentInput}>
                            <span className="text-zinc-500 text-left font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Reply
                                </span>
                            </span>
                        </div>
                        { postProps?.comment_reply && postProps?.comment_reply?.length ? (
                            <>
                                <div className="pl-[4px] pr-[8px] flex">
                                    <span className="w-[2px] h-[2px] bg-zinc-700 rounded-full overflow-hidden"></span>
                                </div>
                                <div>
                                    <span className="text-zinc-500 text-left font-normal break-words relative leading-5 transition-all">
                                        { postProps?.comment_reply?.length > 1 ? `${postProps?.comment_reply?.length} replies` : `${postProps?.comment_reply?.length} reply` }
                                    </span>
                                </div>
                            </>
                        ) : null }
                    </div>
                </div>
            </div>
            <div>
                { showCommentInput && <PostItemCommentInput postProps={postProps} isReply={true}/> }
            </div>
        </div>
    );
};

export default PostItemCommentScaffoldControl;