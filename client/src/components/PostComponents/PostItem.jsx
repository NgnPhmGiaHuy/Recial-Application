"use client"

import { useEffect } from "react";

import { usePostItemData } from "@/hooks";
import { PostItemHeader, PostItemContent, PostItemFooter, PostItemComment, PostItemDelete, PostItemShareSetting, PostItemQuickSetting, PostItemReactionButton } from "@/components";

const PostItem = ({ userData, userProps, postProps, isCurrentUser }) => {
    const props = { userData: userData, userProps: userProps, postProps: postProps }

    const { ref, state, setState, handleState, translateX, translateY } = usePostItemData();

    useEffect(() => {
        return handleState.handleShowPostItemDelete();
    }, [state.deletePostStatus]);

    return (
        <div ref={ref.postRef} className="mb-[24px] flex flex-col justify-center rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative">
            <div>
                <PostItemHeader headerRef={ref.headerRef} props={props} handleState={handleState}/>
            </div>
            <div>
                <PostItemContent contentRef={ref.contentRef} props={props}/>
            </div>
            <div>
                <PostItemFooter footerRef={ref.footerRef} footerCommentRef={ref.footerCommentRef} timeoutRef={ref.timeoutRef} props={props} handleState={handleState}/>
            </div>
            <div>
                {state.showPostItemComment && (
                    <PostItemComment commentRef={ref.commentRef} props={props}/>
                )}
            </div>
            <div>
                {(state.showPostItemDelete && isCurrentUser) && (
                    <PostItemDelete props={props} postDeleteRef={ref.postDeleteRef} handleState={handleState}/>
                )}
            </div>
            <div>
                {state.showPostReactionButton && (
                    <PostItemReactionButton props={props} timeoutRef={ref.timeoutRef} translateX={translateX} translateY={translateY}
                                            postReactionButtonRef={ref.postReactionButtonRef} handleState={handleState}/>
                )}
            </div>
            <div ref={ref.postQuickSettingButtonRef}>
                {(state.showPostItemQuickSetting && !isCurrentUser) && (
                    <PostItemQuickSetting props={props} translateX={translateX} translateY={translateY} postQuickSettingButtonRef={ref.postQuickSettingButtonRef}/>
                )}
            </div>
            <div ref={ref.postShareButtonRef}>
                {state.showPostItemShareSetting && (
                    <PostItemShareSetting translateX={translateX} translateY={translateY} postShareButtonRef={ref.postShareButtonRef}/>
                )}
            </div>
        </div>
    );
};

export default PostItem;