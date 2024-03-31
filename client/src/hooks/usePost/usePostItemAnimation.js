"use client"

import { useEffect, useState } from "react";

const usePostItemAnimation = (ref, state) => {
    const [postItemTranslateXValue, setPostItemTranslateXValue] = useState(0);
    const [postItemTranslateYValue, setPostItemTranslateYValue] = useState(0);
    const [postItemShareSettingTranslateYValue, setPostItemShareSettingTranslateYValue] = useState(0);
    const [postItemQuickSettingTranslateYValue, setPostItemQuickSettingTranslateYValue] = useState(0);
    const [postItemReactionButtonTranslateYValue, setPostItemReactionButtonTranslateYValue] = useState(0);

    useEffect(() => {
        if (ref.postRef.current && ref.headerRef.current && ref.contentRef.current && ref.footerRef.current && ref.postReactionButtonRef.current && ref.footerCommentRef.current && ref.commentRef.current && state.showPostReactionButton) {
            setPostItemReactionButtonTranslateYValue(ref.postRef.current.clientHeight - ref.footerRef.current.clientHeight - ref.commentRef.current.clientHeight)
        } else if (ref.postRef.current && ref.headerRef.current && ref.contentRef.current && ref.footerRef.current && ref.postReactionButtonRef.current && ref.footerCommentRef.current && state.showPostReactionButton) {
            setPostItemReactionButtonTranslateYValue(ref.postRef.current.clientHeight - ref.footerRef.current.clientHeight)
        } else {
            setPostItemReactionButtonTranslateYValue(ref.headerRef.current.clientHeight + ref.contentRef.current.clientHeight - ref.footerRef.current.clientHeight/2)
        }

        if (ref.postRef.current && ref.postQuickSettingButtonRef.current && state.showPostItemQuickSetting){
            setPostItemTranslateXValue(ref.postRef.current.clientWidth - ref.postQuickSettingButtonRef.current.clientWidth - 25);
        }

        if (ref.postRef.current && ref.postShareButtonRef.current && state.showPostItemShareSetting){
            setPostItemTranslateXValue(ref.postRef.current.clientWidth * 46 / 55 - ref.postShareButtonRef.current.clientWidth *  105 / 253);
        }

        if (ref.headerRef.current && ref.contentRef.current && ref.footerRef.current && ref.postShareButtonRef.current && state.showPostItemShareSetting){
            setPostItemTranslateYValue(ref.headerRef.current.clientHeight + ref.contentRef.current.clientHeight + ref.footerRef.current.clientHeight);
        }

        if (ref.postQuickSettingButtonRef.current && state.showPostItemQuickSetting) {
            setPostItemQuickSettingTranslateYValue(-ref.postQuickSettingButtonRef.current.clientHeight);
        }

        if (ref.postShareButtonRef.current && state.showPostItemShareSetting) {
            setPostItemShareSettingTranslateYValue(-ref.postShareButtonRef.current.clientHeight);
        }
    }, [state.showPostReactionButton, state.showPostItemQuickSetting, state.showPostItemShareSetting]);

    const translateX = {
        postItemTranslateXValue: postItemTranslateXValue,
    };

    const translateY = {
        postItemTranslateYValue: postItemTranslateYValue,
        postItemShareSettingTranslateYValue: postItemShareSettingTranslateYValue,
        postItemQuickSettingTranslateYValue: postItemQuickSettingTranslateYValue,
        postItemReactionButtonTranslateYValue: postItemReactionButtonTranslateYValue,
    }

    return { translateX, translateY };
}

export default usePostItemAnimation