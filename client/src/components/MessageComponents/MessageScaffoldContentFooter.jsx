"use client"

import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import { handleCreateConversationData, handleMultipleImageFileUpload } from "@/utils";
import { useClickOutside, useContentEditable, useResetInput, useSetMessageData } from "@/hooks";
import { MediumChatInput, MediumChatInputImage, MessageScaffoldContentFooterButton } from "@/components";
import { MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS, MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON, MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON, MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON } from "@/constants/MessageConstants/MessageScaffoldContentFooterConstants";

const MessageScaffoldContentFooter = ({ participants }) => {
    const router = useRouter();
    const iconRef = useRef(null);
    const chatInputRef = useRef(null);

    const [showIconPanel, setShowIconPanel] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileUpload = (event) => handleMultipleImageFileUpload(event, setSelectedImages);

    const { messageSubmitStatus , setMessageSubmitStatus, handleSetMessageData } = useSetMessageData();
    const { inputRef, inputText, setInputText, setAllowSubmit, handleAddEmoji, handleInputTextChange } = useContentEditable();

    const handleSubmitMessage = async () => {
        const trimmedText = inputText ? inputText.trim() : "";

        await handleSetMessageData({ inputText: trimmedText, inputImage: selectedImages, conversationId: null });
    }

    const handleCreateConversationAndSubmitMessage = async () => {
        const trimmedText = inputText ? inputText.trim() : "";
        const userIds = participants.map((participant) => participant.user._id);
        const createdConversation = await handleCreateConversationData(userIds);

        await handleSetMessageData({ inputText: trimmedText, inputImage: selectedImages, conversationId: createdConversation._id });

        return router.push(`/messages/${createdConversation._id}`);
    }

    const inputAction = MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS(() => chatInputRef.current.click());

    useClickOutside(iconRef, showIconPanel, setShowIconPanel);
    useResetInput(inputRef, inputText, setInputText, setAllowSubmit, messageSubmitStatus, setMessageSubmitStatus, () => setSelectedImages([]));

    return (
        <div>
            <div className="py-[8px] flex items-end shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative">
                <MessageScaffoldContentFooterButton button={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.button} toolTip={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.toolTip}/>
                <div className="flex grow overflow-x-auto relative">
                    <div className="flex flex-row flex-shrink-0 items-end justify-between relative">
                        { !inputText && selectedImages?.length === 0 && (
                            inputAction.map((value, index) => (
                                <MessageScaffoldContentFooterButton key={index} button={value.button} onClick={value.onClick} toolTip={value.toolTip}/>
                            ))
                        ) }
                    </div>
                    <div className="w-full flex flex-shrink items-center justify-center relative">
                        <div className="w-full h-full flex flex-col">
                            <div className="flex-grow rounded-xl bg-zinc-100 relative">
                                <div>
                                    <input ref={chatInputRef} type="file" className="hidden" accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv" multiple={true} onChange={handleFileUpload}/>
                                    { selectedImages?.length > 0 && (
                                        <MediumChatInputImage inputRef={chatInputRef} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
                                    ) }
                                </div>
                                <MediumChatInput
                                    forwardRef={inputRef}
                                    inputText={inputText}
                                    handleInputState={handleInputTextChange}
                                    handleShowIconPanel={() => setShowIconPanel(prevState => !prevState)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <MessageScaffoldContentFooterButton onClick={participants ? handleCreateConversationAndSubmitMessage : handleSubmitMessage} button={inputText || selectedImages?.length > 0 ? MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON.button : MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.button} toolTip={inputText || selectedImages?.length > 0 ? MESSAGE_SCAFFOLD_CONTENT_FOOTER_SEND_BUTTON.toolTip : MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.toolTip}/>
            </div>
            { showIconPanel && (
                <div className="bottom-[44px] right-[40px] absolute z-20">
                    <div ref={iconRef} className="w-full h-full shadow-2xl relative">
                        <Picker data={data} onEmojiSelect={(emoji) => handleAddEmoji(emoji)} />
                    </div>
                </div>
            ) }
        </div>
    );
};

export default MessageScaffoldContentFooter;