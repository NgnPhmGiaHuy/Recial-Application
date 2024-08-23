"use client"

import { useEffect } from "react";

import { usePostItemData } from "@/hooks";
import { PostItemHeader, PostItemContent, PostItemFooter, PostItemPopup } from "@/components";

const PostItem = ({ postProps }) => {
    const props = { postProps: postProps }

    const { ref, state, setState, handleState, translateX, translateY } = usePostItemData();

    useEffect(() => {
        return handleState.handleShowPostItemDelete();
    }, [state.deletePostStatus]);

    return (
        <div ref={ref.postRef} className="mb-[24px] flex flex-col justify-center rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative">
            <div>
                <div>
                    <PostItemHeader headerRef={ref.headerRef} props={props} handleState={handleState}/>
                </div>
                <div>
                    <PostItemContent contentRef={ref.contentRef} props={props}/>
                </div>
                <div>
                    <PostItemFooter footerRef={ref.footerRef} footerCommentRef={ref.footerCommentRef} timeoutRef={ref.timeoutRef} props={props} handleState={handleState}/>
                </div>
            </div>
            <PostItemPopup forwardRef={ref} state={state} handleState={handleState} props={props} translateX={translateX} translateY={translateY} />
        </div>
    );
};

export default PostItem;