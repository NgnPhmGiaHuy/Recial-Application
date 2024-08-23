import { useOverflowText } from "@/hooks";

const PostItemCommentScaffoldContent = ({ postProps }) => {
    const { textRef, showMoreText, isOverflowing, handleShowMoreText } = useOverflowText();

    return (
        <div>
            <div className="ml-[44px] pr-[16px] pb-[12px] pl-[12px] bg-zinc-200 rounded-b-xl overflow-hidden relative">
                <div className="max-w-[928px] block relative">
                    <div>
                        <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-4"} webkit-box text-[14px] text-black text-left font-normal break-words relative leading-5`}>
                            { postProps?.comment_text }
                        </span>
                    </div>
                    { !showMoreText && isOverflowing ? (
                        <button type="button" className="ml-[8px] px-[4px] bottom-[-1px] right-0 bg-zinc-200 rounded-xl absolute z-10" onClick={handleShowMoreText}>
                            <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5 hover:text-black transition-all">
                                ...see more
                            </span>
                        </button>
                    ) : showMoreText && isOverflowing ? (
                        <button type="button" className="ml-[8px] px-[4px] bottom-[-1px] right-0 bg-zinc-200 rounded-xl absolute z-10" onClick={handleShowMoreText}>
                            <span className="text-[14px] text-zinc-500 text-left font-normal break-words relative leading-5 hover:text-black transition-all">
                                ...see less
                            </span>
                        </button>
                    ) : null }
                </div>
            </div>
        </div>
    );
};

export default PostItemCommentScaffoldContent;