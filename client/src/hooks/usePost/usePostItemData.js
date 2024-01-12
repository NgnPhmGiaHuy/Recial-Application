"use client"

import { useEffect, useRef, useState } from "react";
import { useClickOutside, useToggleState } from "@/hooks";

export const usePostItemData = () => {
    const { ref } = usePostItemRef();
    const { state, setState, handleState } = usePostItemToggleState(ref);
    const { translateX, translateY } = usePostItemTranslate(ref, state)

    useClickOutside(ref.postDeleteRef, state.showPostItemDelete, handleState.handleShowPostItemDelete);
    useClickOutside(ref.postShareButtonRef, state.showPostItemShareSetting, handleState.handleShowPostShareSetting);
    useClickOutside(ref.postReactionButtonRef, state.showPostReactionButton, handleState.handleShowPostReactionButton);
    useClickOutside(ref.postQuickSettingButtonRef, state.showPostItemQuickSetting, handleState.handleShowPostItemQuickSetting);

    return { ref, state, setState, handleState, translateX, translateY };
};

const usePostItemRef = () => {
    const postRef = useRef(null);
    const headerRef = useRef(null);
    const contentRef = useRef(null);
    const footerRef = useRef(null);
    const footerCommentRef = useRef(null);
    const commentRef = useRef(null);
    const timeoutRef = useRef(null);
    const postDeleteRef = useRef(null);
    const postShareButtonRef = useRef(null);
    const postReactionButtonRef = useRef(null);
    const postQuickSettingButtonRef = useRef(null);

    const ref = {
        postRef: postRef,
        headerRef: headerRef,
        contentRef: contentRef,
        footerRef: footerRef,
        footerCommentRef: footerCommentRef,
        commentRef: commentRef,
        timeoutRef: timeoutRef,
        postDeleteRef: postDeleteRef,
        postShareButtonRef: postShareButtonRef,
        postReactionButtonRef: postReactionButtonRef,
        postQuickSettingButtonRef: postQuickSettingButtonRef,
    }

    return { ref };
}

const usePostItemTranslate = (ref, state) => {
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

const usePostItemToggleState = (ref) => {
    const [deletePostStatus, setDeletePostStatus, handleDeletePostStatus] = useToggleState(false);
    const [showPostItemDelete, setShowPostItemDelete, handleShowPostItemDelete] = useToggleState(false);
    const [showPostItemComment, setShowPostItemComment, handleShowPostItemComment] = useToggleState(false);
    const [showPostReactionButton, setShowPostReactionButton, handleShowPostReactionButton] = useToggleState(false);
    const [showPostItemShareSetting, setShowPostItemShareSetting, handleShowPostShareSetting] = useToggleState(false);
    const [showPostItemQuickSetting, setShowPostItemQuickSetting, handleShowPostItemQuickSetting] = useToggleState(false);

    const state = {
        deletePostStatus: deletePostStatus,
        showPostItemDelete: showPostItemDelete,
        showPostItemComment: showPostItemComment,
        showPostReactionButton: showPostReactionButton,
        showPostItemShareSetting: showPostItemShareSetting,
        showPostItemQuickSetting: showPostItemQuickSetting,
    };

    const setState = {
        setDeletePostStatus: setDeletePostStatus,
        setShowPostItemDelete: setShowPostItemDelete,
        setShowPostItemComment: setShowPostItemComment,
        setShowPostReactionButton: setShowPostReactionButton,
        setShowPostItemShareSetting: setShowPostItemShareSetting,
        setShowPostItemQuickSetting: setShowPostItemQuickSetting,
    }

    const handleState = {
        handleMouseEnter: async () => {
            clearTimeout(ref.timeoutRef.current);
            ref.timeoutRef.current = setTimeout(() => {
                setShowPostReactionButton(true);
            }, 150);
        },
        handleMouseLeave: async () => {
            ref.timeoutRef.current = setTimeout(() => {
                setShowPostReactionButton(false);
            }, 750);
        },
        handleDeletePostStatus: handleDeletePostStatus,
        handleShowPostItemDelete: handleShowPostItemDelete,
        handleShowPostItemComment: handleShowPostItemComment,
        handleShowPostShareSetting: handleShowPostShareSetting,
        handleShowPostReactionButton: handleShowPostReactionButton,
        handleShowPostItemQuickSetting: handleShowPostItemQuickSetting,
    }

    return { state, setState, handleState };
}