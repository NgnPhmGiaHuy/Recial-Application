"use client"

import { useEffect, useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { postItemShareSettingList } from "@/constants/PostConstants";
import {
    PostItemHeader,
    PostItemContent,
    PostItemFooter,
    QuickSettingItem,
    PostItemComment,
    PostItemDelete, PostItemShareSetting, PostItemQuickSetting
} from "@/components";

const PostItem = ({ userData, userProps, postProps, isCurrentUser }) => {
    const postItemRef = useRef(null);
    const postItemDeleteRef = useRef(null);
    const postItemShareSettingButtonRef = useRef(null);
    const postItemQuickSettingButtonRef = useRef(null);


    const [deletePostStatus, setDeletePostStatus, handleDeletePostStatus] = useToggleState(false);
    const [showPostItemDelete, setShowPostItemDelete, handleShowPostItemDelete] = useToggleState(false);
    const [showPostItemComment, setShowPostItemComment, handleShowPostItemComment] = useToggleState(false);
    const [showPostItemShareSetting, setShowPostItemShareSetting, handleShowPostShareSetting] = useToggleState(false);
    const [showPostItemQuickSetting, setShowPostItemQuickSetting, handleShowPostItemQuickSetting] = useToggleState(false);

    const [postItemTranslateXValue, setPostItemTranslateXValue] = useState(0);
    const [postItemTranslateYValue, setPostItemTranslateYValue] = useState(0);
    const [postItemShareSettingTranslateYValue, setPostItemShareSettingTranslateYValue] = useState(0);
    const [postItemQuickSettingTranslateYValue, setPostItemQuickSettingTranslateYValue] = useState(0);

    useEffect(() => {
        if (postItemRef.current && postItemQuickSettingButtonRef.current && showPostItemQuickSetting){
            setPostItemTranslateXValue(postItemRef.current.clientWidth - postItemQuickSettingButtonRef.current.clientWidth - 25);
        }

        if (postItemRef.current && postItemShareSettingButtonRef.current && showPostItemShareSetting){
            setPostItemTranslateXValue(postItemRef.current.clientWidth * 46 / 55 - postItemShareSettingButtonRef.current.clientWidth *  105 / 253);
        }

        if (postItemRef.current && postItemShareSettingButtonRef.current && showPostItemShareSetting){
            setPostItemTranslateYValue(postItemRef.current.clientHeight);
        }

        if (postItemQuickSettingButtonRef.current && showPostItemQuickSetting) {
            setPostItemQuickSettingTranslateYValue(-postItemQuickSettingButtonRef.current.clientHeight);
        }

        if (postItemShareSettingButtonRef.current && showPostItemShareSetting) {
            setPostItemShareSettingTranslateYValue(-postItemShareSettingButtonRef.current.clientHeight);
        }
    }, [showPostItemQuickSetting, showPostItemShareSetting])

    useClickOutside(postItemDeleteRef, showPostItemDelete, handleShowPostItemDelete);
    useClickOutside(postItemQuickSettingButtonRef, showPostItemQuickSetting, setShowPostItemQuickSetting);
    useClickOutside(postItemShareSettingButtonRef, showPostItemShareSetting, setShowPostItemShareSetting);

    useEffect(() => {
        handleShowPostItemDelete();
    }, [deletePostStatus]);

    return (
        <div className="mb-[24px] flex flex-col justify-center rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative" ref={postItemRef}>
            <div>
                <PostItemHeader postProps={postProps} handleShowPostItemDelete={handleShowPostItemDelete} handleShowPostItemQuickSetting={handleShowPostItemQuickSetting}/>
            </div>
            <div>
                <PostItemContent postProps={postProps}/>
            </div>
            <div>
                <PostItemFooter postProps={postProps} handleShowPostShareSetting={handleShowPostShareSetting} handleShowPostItemComment={handleShowPostItemComment}/>
            </div>
            <div>
                {showPostItemComment ? (
                    <PostItemComment userData={userData} userProps={userProps} postProps={postProps} />
                ) : null}
            </div>
            <div>
                {(showPostItemDelete && isCurrentUser) && (
                    <PostItemDelete postProps={postProps} postItemDeleteRef={postItemDeleteRef} handleDeletePostStatus={handleDeletePostStatus} handleShowPostItemDelete={handleShowPostItemDelete}/>
                )}
            </div>
            <div ref={postItemQuickSettingButtonRef}>
                {(showPostItemQuickSetting && !isCurrentUser) && (
                    <PostItemQuickSetting postProps={postProps} postItemQuickSettingButtonRef={postItemQuickSettingButtonRef} postItemTranslateXValue={postItemTranslateXValue} postItemQuickSettingTranslateYValue={postItemQuickSettingTranslateYValue}/>
                )}
            </div>
            <div ref={postItemShareSettingButtonRef}>
                {showPostItemShareSetting && (
                    <PostItemShareSetting postItemShareSettingButtonRef={postItemShareSettingButtonRef} postItemTranslateXValue={postItemTranslateXValue} postItemTranslateYValue={postItemTranslateYValue} postItemShareSettingTranslateYValue={postItemShareSettingTranslateYValue} />
                )}
            </div>
        </div>
    );
};

export default PostItem;