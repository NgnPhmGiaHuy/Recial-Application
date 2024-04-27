"use client"

import { useState } from "react";

import { MediumChatInput, MessageScaffoldContentFooterButton } from "@/components";
import {
    MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS,
    MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON,
    MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON,
    MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON
} from "@/constants/MessageConstants/MessageScaffoldContentFooterConstants";

const MessageScaffoldContentFooter = () => {
    const [isText, setIsText] = useState(false);

    return (
        <div>
            <div className="py-[12px] flex items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                <MessageScaffoldContentFooterButton button={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.button} toolTip={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.toolTip}/>
                <div className="flex grow overflow-x-auto relative">
                    <div className="flex flex-row flex-shrink-0 items-center justify-between relative">
                        { !isText && (
                            MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS.map((value, index) => (
                                <MessageScaffoldContentFooterButton key={index} button={value.button} toolTip={value.toolTip}/>
                            ))
                        ) }
                    </div>
                    <div className="w-full flex flex-shrink items-center justify-center relative">
                        <MediumChatInput setIsText={setIsText}/>
                    </div>
                </div>
                <MessageScaffoldContentFooterButton button={isText ? MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON.button : MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.button} toolTip={isText ? MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON.toolTip : MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.toolTip}/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentFooter;