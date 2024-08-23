const PostItemCommentLoadMore = ({ handleClick }) => {
    return (
        <div>
            <div className="mx-[16px] mb-[8px] relative">
                <div className="px-[8px] py-[2px] w-fit flex flex-col rounded-xl cursor-pointer relative hover:bg-zinc-200 transition-all" onClick={handleClick}>
                    <span className="text-[16px] text-zinc-500 text-left font-bold break-words relative leading-5">
                        <span>Load more comments</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PostItemCommentLoadMore;