"use client"

import Link from "next/link";
import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useClickOutside } from "@/hooks";
import { MessageContentItemSetting, MessageContentItemSourceImage, MessageContentItemStatus, MessageContentItemText, SmallMoreButton } from "@/components";

const MessageContentItem = ({ messageProps, messageId, setShowDelete }) => {
    const messageIdProps = useSelector(state => state.message, shallowEqual);

    const active = messageId === messageProps?._id;
    const quickSettingRef = useRef();

    const [showMoreButton, setShowMoreButton] = useState(false);
    const [showQuickSetting, setShowQuickSetting] = useState(false);

    const handleShowQuickSetting = (e) => {
        e.preventDefault();

        return setShowQuickSetting((prevState) => !prevState);
    }

    const handleLinkClick = (e) => {
        if (quickSettingRef.current && !quickSettingRef.current.contains(e.target)) {
            if (messageIdProps.action) {
                messageIdProps.action(messageProps?._id);
            }
        }
    };

    useClickOutside(quickSettingRef, showQuickSetting, setShowQuickSetting);

    return (
        <li className="flex flex-col relative" onMouseOver={() => setShowMoreButton(true)} onMouseOut={() => setShowMoreButton(false)} onClick={handleLinkClick}>
            <Link href={`/messages/${messageProps?._id}`}>
                <div className="px-[8px] block relative">
                    <div className="max-w-full flex flex-col flex-shrink-0 grow relative">
                        <div className="flex flex-col items-stretch justify-center p-[8px] m-[-6px]">
                            <div className={`${active ? "bg-zinc-200" : "hover:bg-zinc-200"} flex flex-row flex-shrink-0 flex-nowrap items-center justify-between relative rounded-md cursor-pointer transition-all`}>
                                <MessageContentItemSourceImage messageProps={messageProps}/>
                                <MessageContentItemText messageProps={messageProps}/>
                                <MessageContentItemStatus messageProps={messageProps}/>
                            </div>
                        </div>
                    </div>
                    <div className="top-1/2 right-[48px] -translate-y-1/2 absolute">
                        <SmallMoreButton buttonRef={quickSettingRef} state={showMoreButton} onClick={handleShowQuickSetting}/>
                    </div>
                </div>
            </Link>
            <div>
                { showQuickSetting && <MessageContentItemSetting quickSettingRef={quickSettingRef} setShowDelete={() => setShowDelete(messageProps?._id)}/> }
            </div>
        </li>
    );
};

export default MessageContentItem;