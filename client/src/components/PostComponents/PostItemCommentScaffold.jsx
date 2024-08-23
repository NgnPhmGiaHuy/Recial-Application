"use client"

import { useState } from "react";

import { PostItemCommentLoadMore, PostItemCommentScaffoldContent, PostItemCommentScaffoldControl, PostItemCommentScaffoldHeader, PostItemCommentScaffoldMedia } from "@/components";

const PostItemCommentScaffold = ({ postProps, isRely }) => {
    const [visibleComments, setVisibleComments] = useState(3);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);

    const loadMoreComments = () => {
        const remainingComments = postProps?.comment_reply?.length - visibleComments;
        const loadMore = remainingComments > 3 ? 3 : remainingComments;

        setVisibleComments((prevVisible) => prevVisible + loadMore);

        if (visibleComments + loadMore >= postProps?.comment_reply?.length) {
            return setLoadMoreClicked(true);
        }
    };

    return (
        <article className={`${isRely ? "ml-[16px]" : "mx-[16px]"} mb-[12px] relative`}>
            <PostItemCommentScaffoldHeader postProps={postProps} />
            <PostItemCommentScaffoldContent postProps={postProps} />
            { postProps?.comment_content_url && (
                <PostItemCommentScaffoldMedia postProps={postProps} />
            ) }
            <div>
                <PostItemCommentScaffoldControl postProps={postProps}/>
                <div className="ml-[44px] mt-[8px] pl-[8px]">
                    {postProps?.comment_reply?.slice(0, 3).map((value, index) => (
                        <PostItemCommentScaffold key={index} postProps={value} isRely={true}/>
                    ))}
                </div>
                { !loadMoreClicked && visibleComments < postProps?.comment_reply?.length && (
                    <PostItemCommentLoadMore handleClick={loadMoreComments} />
                ) }
            </div>
        </article>
    );
};

export default PostItemCommentScaffold;