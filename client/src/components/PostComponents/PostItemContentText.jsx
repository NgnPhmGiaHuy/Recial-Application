import Link from "next/link";

import { useOverflowText } from "@/hooks";

const PostItemContentText = ({ props }) => {
    const { textRef, showMoreText, isOverflowing, handleShowMoreText } = useOverflowText();

    return (
        <div>
            <div className="px-[16px] pb-[16px] pt-[4px]">
                <div className="flex flex-col relative">
                    <span className="block text-[15px] text-black text-left font-normal break-words leading-5 relative">
                        <div>
                            <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-5"} webkit-box`}>
                                {props.postProps?.post?.post_content}
                            </span>
                        </div>
                        <div>
                            <span>
                                {props.postProps?.postTags?.map((value, index) => (
                                    <Link key={index} href=""
                                       className="mr-[4px] text-lime-500 hover:text-lime-700 transition-all">
                                        #{value}
                                    </Link>
                                ))}
                            </span>
                        </div>
                        {!showMoreText && isOverflowing ? (
                            <span
                                className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all"
                                onClick={handleShowMoreText}>
                                <span className="overflow-hidden relative">
                                    See more
                                </span>
                            </span>
                        ) : showMoreText && isOverflowing ? (
                            <span
                                className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all"
                                onClick={handleShowMoreText}>
                                <span className="overflow-hidden relative">
                                    See less
                                </span>
                            </span>
                        ) : null}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PostItemContentText;