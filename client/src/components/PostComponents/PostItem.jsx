"use client"

import {useCallback, useEffect, useRef, useState} from "react";

import {postItemShareSettingList} from "@/constants/PostConstants";
import {PostItemHeader, PostItemContent, PostItemFooter, QuickSettingItem, PostItemComment} from "@/components";
import {useClickOutside} from "@/hooks";

const PostItem = ({userData, userProps, postProps}) => {
    const postItemQuickSettingList = [
        {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
            ),
            settingItemTitle: "Save post",
            settingItemSubtitle: "Add this to your saved items.",
            hasSettingItemSwitchButton: false,
        }, {
            isSettingItemBreak: true,
        },{
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
            ),
            settingItemTitle: "Turn on notifications for this post",
            hasSettingItemSwitchButton: false,
        }, {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            ),
            settingItemTitle: "Embed",
            hasSettingItemSwitchButton: false,
        }, {
            isSettingItemBreak: true,
        }, {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
            ),
            settingItemTitle: "Hide post",
            settingItemSubtitle: "See fewer posts like this.",
            hasSettingItemSwitchButton: false,
        },{
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            settingItemTitle: `Snooze ${postProps?.user?.username || postProps?.user?.firstname + " " + postProps?.user?.lastname} for 30 days`,
            settingItemSubtitle: "Temporarily stop seeing posts.",
            hasSettingItemSwitchButton: false,
        }, {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 18L16 12M8 12l8 6" />
                </svg>
            ),
            settingItemTitle: "Unfollow this page",
            settingItemSubtitle: "Stop seeing posts from this Page",
            hasSettingItemSwitchButton: false,
        }, {
            isSettingItemBreak: false,
            settingItemIcon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
            ),
            settingItemTitle: `Block ${postProps?.user?.username || postProps?.user?.firstname + " " + postProps?.user?.lastname}'s profile`,
            settingItemSubtitle: "You won't be able to see or contact each other.",
            hasSettingItemSwitchButton: false,
        },
    ]

    const postItemRef = useRef(null)
    const postItemShareSettingButtonRef = useRef(null);
    const postItemQuickSettingButtonRef = useRef(null);

    const [showPostItemComment, setShowPostItemComment] = useState(false);
    const [showPostItemQuickSetting, setShowPostItemQuickSetting] = useState(false);
    const [showPostItemShareSetting, setShowPostItemShareSetting] = useState(false);

    const [postItemTranslateXValue, setPostItemTranslateXValue] = useState(0);
    const [postItemTranslateYValue, setPostItemTranslateYValue] = useState(0);
    const [postItemShareSettingTranslateYValue, setPostItemShareSettingTranslateYValue] = useState(0);
    const [postItemQuickSettingTranslateYValue, setPostItemQuickSettingTranslateYValue] = useState(0);

    const handleShowPostItemComment = useCallback(() => {
        setShowPostItemComment((prevShowPostItemComment) => !prevShowPostItemComment);
    }, []);

    const handleShowPostItemQuickSetting = useCallback(() => {
        setShowPostItemQuickSetting((prevShowPostItemQuickSetting) => !prevShowPostItemQuickSetting);
    }, []);

    const handleShowPostShareSetting = useCallback(() => {
        setShowPostItemShareSetting((prevShowPostItemShareSetting) => !prevShowPostItemShareSetting);
    }, []);

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

    useEffect(() => {

    }, [postProps]);

    useClickOutside(postItemQuickSettingButtonRef, showPostItemQuickSetting, setShowPostItemQuickSetting)
    useClickOutside(postItemShareSettingButtonRef, showPostItemShareSetting, setShowPostItemShareSetting)

    return (
        <div className="mb-[24px] flex flex-col justify-center rounded-md shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] bg-white relative" ref={postItemRef}>
            <div>
                <PostItemHeader postProps={postProps} handleShowPostItemQuickSetting={handleShowPostItemQuickSetting}/>
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
            <div ref={postItemQuickSettingButtonRef}>
                {showPostItemQuickSetting ? (
                    <div ref={postItemQuickSettingButtonRef} className="absolute top-0 left-0 translate-x-[400px] translate-y-[50px] z-50" style={{ "--tw-translate-x": `${postItemTranslateXValue}px` }}>
                        <div className="relative mt-[15px] rounded-l-md rounded-r-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-x-hidden overflow-y-hidden rounded-l-md rounded-r-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                    <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            {postItemQuickSettingList.map((value, index) => (
                                                <QuickSettingItem key={index} settingProps={value}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="12" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[-1] scale-y-[-1] translate-x-[-60px]" style={{ "--tw-translate-y": `${postItemQuickSettingTranslateYValue + 5}px` }} fill="white">
                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
            <div ref={postItemShareSettingButtonRef}>
                {showPostItemShareSetting ? (
                    <div ref={postItemShareSettingButtonRef} className="absolute top-0 left-0 translate-x-[525px] translate-y-[800px] z-50" style={{ "--tw-translate-x": `${postItemTranslateXValue}px`, "--tw-translate-y": `${postItemTranslateYValue}px`}}>
                        <div className="relative mt-[15px] rounded-l-md rounded-r-md shadow-[rgba(0,_0,_0,_0.24)_4px_7px_50px_1px]">
                            <div className="overflow-x-hidden overflow-y-hidden rounded-l-md rounded-r-md bg-white">
                                <div className="flex flex-col grow items-stretch origin-top-left relative">
                                    <div className="w-[344px] py-[8px] overflow-x-hidden overflow-y-auto overscroll-y-contain flex flex-col relative">
                                        <div className="flex flex-col grow relative">
                                            {postItemShareSettingList.map((value, index) => (
                                                <QuickSettingItem key={index} settingProps={value}/>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <svg height="12" viewBox="0 0 21 12" width="21" className="absolute right-0 bottom-[calc(100%-1)] scale-x-[1] scale-y-[-1] translate-x-[-220px]" style={{ "--tw-translate-y": `${postItemShareSettingTranslateYValue + 5}px` }} fill="white">
                                <path d="M20.685.12c-2.229.424-4.278 1.914-6.181 3.403L5.4 10.94c-2.026 2.291-5.434.62-5.4-2.648V.12h20.684z"></path>
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default PostItem;