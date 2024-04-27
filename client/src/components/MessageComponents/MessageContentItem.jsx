"use client"

import Link from "next/link";
import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useClickOutside, useToggleState } from "@/hooks";
import { MessageContentItemSetting, MessageContentItemSourceImage, MessageContentItemStatus, MessageContentItemText, SmallMoreButton } from "@/components";

const MessageContentItem = ({ messageProps, messageId }) => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageIdProps = useSelector(state => state.message, shallowEqual);

    const active = userProps?.user?._id === messageProps?.source?._id ? messageId === messageProps?.destination?._id : messageId === messageProps?.source?._id;
    const messageQuickSettingItemButtonRef = useRef();

    const [showHeaderMessageContentItemMoreButton, setShowHeaderMessageContentItemMoreButton] = useState(false);
    const [showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting, handleShowHeaderMessageItemQuickSettingButton] = useToggleState(false);

    useClickOutside(messageQuickSettingItemButtonRef, showHeaderMessageItemQuickSetting, setShowHeaderMessageItemQuickSetting);

    return (
        <li className="relative" onMouseOver={() => setShowHeaderMessageContentItemMoreButton(true)} onMouseOut={() => setShowHeaderMessageContentItemMoreButton(false)} onClick={() => messageIdProps.action(messageProps?.source?._id === userProps?.user?._id ? messageProps?.destination?._id : messageProps?.source?._id)}>
            <Link href={`/messages/${messageProps?.source?._id === userProps?.user?._id ? messageProps?.destination?._id : messageProps?.source?._id}`}>
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
                {showHeaderMessageItemQuickSetting &&
                    <MessageContentItemSetting messageQuickSettingItemButtonRef={messageQuickSettingItemButtonRef}/>}
            </div>
        </li>
    );
};

export default MessageContentItem;