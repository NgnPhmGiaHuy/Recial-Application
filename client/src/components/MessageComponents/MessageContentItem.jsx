"use client"

import Link from "next/link";
import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useClickOutside, useToggleState } from "@/hooks";
import { MessageContentItemSetting, MessageContentItemSourceImage, MessageContentItemStatus, MessageContentItemText, SmallMoreButton } from "@/components";

const MessageContentItem = ({ messageProps, messageId }) => {
    const messageIdProps = useSelector(state => state.message, shallowEqual);

    const active = messageId === messageProps?._id;
    const messageQuickSettingItemButtonRef = useRef();

    const [showHeaderMessageContentItemMoreButton, setShowHeaderMessageContentItemMoreButton] = useState(false);
    const [showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting, handleShowHeaderMessageItemQuickSettingButton] = useToggleState(false);

    useClickOutside(messageQuickSettingItemButtonRef, showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting);

    return (
        <li className="relative" onMouseOver={() => setShowHeaderMessageContentItemMoreButton(true)} onMouseOut={() => setShowHeaderMessageContentItemMoreButton(false)} onClick={messageIdProps.action && (() => messageIdProps.action(messageProps?._id))}>
            <Link href={`/messages/${messageProps?._id}`}>
                <div className="px-[8px] relative">
                    <div className="flex flex-col flex-shrink-0 grow relative">
                        <div className="flex flex-col items-stretch p-[8px] m-[-6px]">
                            <div
                                className={`${active ? "bg-zinc-200" : "hover:bg-zinc-200"} flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative rounded-md cursor-pointer transition-all`}>
                                <div className="flex flex-row flex-shrink items-center justify-center relative">
                                    <MessageContentItemSourceImage messageProps={messageProps}/>
                                    <MessageContentItemText messageProps={messageProps}/>
                                </div>
                                <MessageContentItemStatus messageProps={messageProps}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SmallMoreButton buttonRef={messageQuickSettingItemButtonRef}
                                         state={showHeaderMessageContentItemMoreButton}
                                         onClick={handleShowHeaderMessageItemQuickSettingButton}/>
                    </div>
                </div>
            </Link>
            <div>
                { showHeaderMessageItemQuickSetting && <MessageContentItemSetting messageQuickSettingItemButtonRef={messageQuickSettingItemButtonRef}/> }
            </div>
        </li>
    );
};

export default MessageContentItem;