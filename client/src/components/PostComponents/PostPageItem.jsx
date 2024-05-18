"use client"

import Image from "next/image";
import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { usePostItemData } from "@/hooks";
import { PostItemComment, PostItemContent, PostItemDelete, PostItemFooter, PostItemHeader, PostItemQuickSetting, PostItemReactionButton, PostItemShareSetting } from "@/components";

const PostPageItem = ({ postProps }) => {
    const pageProps = useSelector(state => state.page, shallowEqual);

    const props = { postProps: postProps, pageProps: pageProps }

    const { ref, state, setState, handleState, translateX, translateY } = usePostItemData();

    useEffect(() => {
        return handleState.handleShowPostItemDelete();
    }, [state.deletePostStatus]);

    return (
        <div className="flex flex-row items-stretch justify-start">
            <div className="pr-[24px] flex flex-col items-stretch justify-center relative">
                <div className="h-full flex items-start justify-start relative after:absolute after:w-[1px] after:h-[calc(100%-80px)] after:top-[60px] after:left-[24px] after:bg-zinc-300">
                    <div className="w-[46px] h-[46px] flex items-center justify-center rounded-xl border-2 border-solid border-white overflow-hidden relative">
                        <Image src={pageProps?.profile?.page_picture_url} alt={`${pageProps?.profile?.page_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
            </div>
            <div ref={ref.postRef} className="w-full mb-[24px] flex flex-col justify-center rounded-xl shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative">
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
                    {state.showPostItemDelete && (
                        <PostItemDelete props={props} postDeleteRef={ref.postDeleteRef} handleState={handleState}/>
                    )}
                </div>
                <div>
                    {state.showPostReactionButton && (
                        <PostItemReactionButton props={props} timeoutRef={ref.timeoutRef} translateX={translateX} translateY={translateY} postReactionButtonRef={ref.postReactionButtonRef} handleState={handleState}/>
                    )}
                </div>
                <div ref={ref.postQuickSettingButtonRef}>
                    {state.showPostItemQuickSetting && (
                        <PostItemQuickSetting props={props} translateX={translateX} translateY={translateY} postQuickSettingButtonRef={ref.postQuickSettingButtonRef}/>
                    )}
                </div>
                <div ref={ref.postShareButtonRef}>
                    {state.showPostItemShareSetting && (
                        <PostItemShareSetting translateX={translateX} translateY={translateY} postShareButtonRef={ref.postShareButtonRef}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostPageItem;