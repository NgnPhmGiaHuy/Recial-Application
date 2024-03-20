"use client"

import { useEffect, useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { MessageHeaderChatBox, MessageHeaderContent, MessageHeaderCreate, MessageHeaderQuickSetting, SmallSearchInput } from "@/components";

const MessageHeader = ({ forwardedRef }) => {
    const messageQuickSettingButtonRef = useRef(null);

    const [messageQuickSettingTranslateYValue, setMessageQuickSettingTranslateYValue] = useState(-415);
    const [showMessageQuickSetting, setShowMessageQuickSetting, handleMessageQuickSettingButton] = useToggleState(false);

    useEffect(() => {
        if (messageQuickSettingButtonRef.current && showMessageQuickSetting) {
            setMessageQuickSettingTranslateYValue(-messageQuickSettingButtonRef.current.clientHeight);
        }
    }, [showMessageQuickSetting]);

    useClickOutside(messageQuickSettingButtonRef, showMessageQuickSetting, setShowMessageQuickSetting);

    return (
        <div ref={forwardedRef} className="absolute top-0 left-0 translate-x-[-172px] translate-y-[48px]">
            <div className="mt-[5px] mr-[8px] animate-slideInTop">
                <div className="overflow-hidden rounded-xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                    <div className="w-[360px] max-h-[calc(100vh-56px-16px)] flex flex-col">
                        <div className="flex flex-col flex-shrink grow no-scrollbar overflow-x-hidden overflow-y-auto overscroll-y-contain basis-full relative">
                            <div className="flex flex-col grow relative">
                                <MessageHeaderChatBox messageQuickSettingButtonRef={messageQuickSettingButtonRef} handleMessageQuickSettingButton={handleMessageQuickSettingButton}/>
                                <div>
                                    <div className="px-[16px]">
                                        <SmallSearchInput id="message-header-search" name="session-message-header-search" placeholder="Search in Recial Message"/>
                                    </div>
                                    <MessageHeaderCreate/>
                                </div>
                            </div>
                            <MessageHeaderContent/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                { showMessageQuickSetting && <MessageHeaderQuickSetting messageQuickSettingButtonRef={messageQuickSettingButtonRef} messageQuickSettingTranslateYValue={messageQuickSettingTranslateYValue}/> }
            </div>
        </div>
    );
};

export default MessageHeader;