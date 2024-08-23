"use client"

import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { useClickOutside, useSearchData, useToggleState } from "@/hooks";
import { MessageHeaderChatBox, MessageHeaderContent, MessageHeaderCreate, MessageHeaderQuickSetting, SmallSearchInput } from "@/components";

const MessageHeader = ({ forwardedRef }) => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageQuickSettingButtonRef = useRef(null);

    const messageFilterFunction = (item, searchQuery) => item.conversation_name?.toLowerCase().includes(searchQuery.toLowerCase());
    const { searchQuery, filteredSearchData, handleSearchInputChange } = useSearchData(userProps?.user_messages?.message_list?.messages, messageFilterFunction);

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
                        <div ref={userProps?.user_messages?.message_list?.ref} className="flex flex-col flex-shrink grow no-scrollbar overflow-x-hidden overflow-y-auto overscroll-y-contain basis-full relative">
                            <div className="flex flex-col grow relative">
                                <MessageHeaderChatBox forwardRef={messageQuickSettingButtonRef} handleOnclick={handleMessageQuickSettingButton}/>
                                <div>
                                    <div className="px-[16px]">
                                        <SmallSearchInput id="message-header-search" name="session-message-header-search" placeholder="Search in Recial Message" value={searchQuery} onChange={handleSearchInputChange}/>
                                    </div>
                                    <MessageHeaderCreate/>
                                </div>
                            </div>
                            <MessageHeaderContent userMessages={filteredSearchData}/>
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