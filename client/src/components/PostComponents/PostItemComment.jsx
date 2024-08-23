"use client"

import { useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { PostItemCommentInput, PostItemCommentLoadMore, PostItemCommentScaffold, PostItemCommentSort } from "@/components";

const PostItemComment = ({ commentRef, props }) => {
    const commentSortContentRef = useRef(null);

    const [visibleComments, setVisibleComments] = useState(3);
    const [loadMoreClicked, setLoadMoreClicked] = useState(false);
    const [showCommentSortContent, setShowCommentSortContent, handleShowCommentSortContent] = useToggleState(false);

    const loadMoreComments = () => {
        const remainingComments = props.postProps.comment.length - visibleComments;
        const loadMore = remainingComments > 3 ? 3 : remainingComments;
        setVisibleComments((prevVisible) => prevVisible + loadMore);
        if (visibleComments + loadMore >= props.postProps.comment.length) {
            setLoadMoreClicked(true);
        }
    };

    useClickOutside(commentSortContentRef, showCommentSortContent, setShowCommentSortContent);

    return (
        <div ref={commentRef} className="flex flex-col justify-center relative animate-slideInTop">
            <PostItemCommentInput postProps={props.postProps}/>
            <PostItemCommentSort forwardRef={commentSortContentRef} showState={showCommentSortContent} setShowState={setShowCommentSortContent} handleClick={handleShowCommentSortContent} />
            <div>
                { props.postProps?.comment?.slice(0, visibleComments).map((value, index) => (
                    <PostItemCommentScaffold key={index} postProps={value} />
                )) }
            </div>
            { !loadMoreClicked && visibleComments < props.postProps?.comment?.length && (
                <PostItemCommentLoadMore handleClick={loadMoreComments}/>
            ) }
        </div>
    );
};

export default PostItemComment;