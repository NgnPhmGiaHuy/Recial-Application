"use client"

import { useRef, useState } from "react";

import { useClickOutside, useToggleState } from "@/hooks";
import { MessageContentItemSetting, MessageContentItemSourceImage, MessageContentItemStatus, MessageContentItemText, SmallButtonMore } from "@/components";

const MessageContentItem = ({ messageProps, action }) => {
    const messageQuickSettingItemButtonRef = useRef();

    const [showHeaderMessageContentItemMoreButton, setShowHeaderMessageContentItemMoreButton] = useState(false);
    const [showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting, handleShowHeaderMessageItemQuickSettingButton] = useToggleState(false);

    useClickOutside(messageQuickSettingItemButtonRef, showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting);

    return (
        <li className="relative" onMouseOver={() => setShowHeaderMessageContentItemMoreButton(true)} onMouseOut={() => setShowHeaderMessageContentItemMoreButton(false)} onClick={() => action(messageProps?.source?._id)}>
            <div className="px-[8px] relative">
                <div className="flex flex-col flex-shrink-0 grow relative">
                    <div className="flex flex-col items-stretch p-[8px] m-[-6px]">
                        <div className="flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative rounded-md cursor-pointer hover:bg-zinc-100 transition-all">
                            <MessageContentItemSourceImage messageProps={messageProps}/>
                            <MessageContentItemText messageProps={messageProps}/>
                            <MessageContentItemStatus messageProps={messageProps}/>
                        </div>
                    </div>
                </div>
                <div>
                    <SmallButtonMore buttonRef={messageQuickSettingItemButtonRef} state={showHeaderMessageContentItemMoreButton} onClick={handleShowHeaderMessageItemQuickSettingButton}/>
                </div>
            </div>
            <div>
                { showHeaderMessageItemQuickSetting && <MessageContentItemSetting messageQuickSettingItemButtonRef={messageQuickSettingItemButtonRef}/> }
            </div>
        </li>
    );
};

export default MessageContentItem;