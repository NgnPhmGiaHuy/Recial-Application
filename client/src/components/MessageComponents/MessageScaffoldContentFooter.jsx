"use client"

import {useEffect, useRef, useState} from "react";

import {useMessageData, useSetMessageData} from "@/hooks";
import { handleMultipleImageFileUpload } from "@/utils";
import { MediumChatInput, MediumChatInputImage, MessageScaffoldContentFooterButton } from "@/components";
import { MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS, MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON, MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON, MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON } from "@/constants/MessageConstants/MessageScaffoldContentFooterConstants";

const MessageScaffoldContentFooter = () => {
    const inputRef = useRef(null);

    const [text, setText] = useState(null);
    const [isText, setIsText] = useState(false);

    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileUpload = (event) => handleMultipleImageFileUpload(event, setSelectedImages);

    const { messageSubmitStatus , handleSetMessageData } = useSetMessageData();

    const handleSubmitMessage = async () => {
        const trimmedText = text.trim();

        await handleSetMessageData({ inputText: trimmedText, inputImage: selectedImages });
    }

    useEffect(() => {
        const resetInput = () => {
            setText(null);
            setIsText(false);
            setSelectedImages([]);
        }

        resetInput();
    }, [messageSubmitStatus]);

    const inputAction = MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS(() => inputRef.current.click());

    return (
        <div>
            <div className="py-[8px] flex items-end shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                <MessageScaffoldContentFooterButton button={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.button} toolTip={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.toolTip}/>
                <div className="flex grow overflow-x-auto relative">
                    <div className="flex flex-row flex-shrink-0 items-end justify-between relative">
                        { !isText && selectedImages.length === 0 && (
                            inputAction.map((value, index) => (
                                <MessageScaffoldContentFooterButton key={index} button={value.button} onClick={value.onClick} toolTip={value.toolTip}/>
                            ))
                        ) }
                    </div>
                    <div className="w-full flex flex-shrink items-center justify-center relative">
                        <div className="w-full h-full flex flex-col">
                            <div className="flex-grow rounded-xl bg-zinc-100 relative">
                                <div>
                                    <input ref={inputRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" multiple={true} onChange={handleFileUpload}/>
                                    { selectedImages.length ? (
                                        <MediumChatInputImage inputRef={inputRef} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                                    ) : null }
                                </div>
                                <MediumChatInput submitStatus={messageSubmitStatus} setText={setText} setIsText={setIsText}/>
                            </div>
                        </div>
                    </div>
                </div>
                <MessageScaffoldContentFooterButton onClick={handleSubmitMessage} button={isText ? MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON.button : MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.button} toolTip={isText ? MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON.toolTip : MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.toolTip}/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentFooter;