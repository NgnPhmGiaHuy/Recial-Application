import { MediumChatInput, MessageScaffoldContentFooterButton } from "@/components";
import { MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS, MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON, MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON } from "@/constants/MessageConstants/MessageScaffoldContentFooterConstants";

const MessageScaffoldContentFooter = () => {
    return (
        <div>
            <div className="py-[12px] flex items-end relative">
                <MessageScaffoldContentFooterButton button={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.button} toolTip={MESSAGE_SCAFFOLD_CONTENT_FOOTER_MORE_BUTTON.toolTip}/>
                <div className="flex grow overflow-x-auto relative">
                    <div className="flex flex-row flex-shrink-0 items-center justify-between relative">
                        {MESSAGE_SCAFFOLD_CONTENT_FOOTER_ACTIONS_BUTTONS.map((value, index) => (
                            <MessageScaffoldContentFooterButton key={index} button={value.button} toolTip={value.toolTip}/>
                        ))}
                    </div>
                    <div className="w-full flex flex-shrink items-center justify-center relative">
                        <MediumChatInput id="chat-input" name="session-chat-input" placeholder="Aa"/>
                    </div>
                </div>
                <MessageScaffoldContentFooterButton button={MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.button} toolTip={MESSAGE_SCAFFOLD_CONTENT_FOOTER_LIKE_BUTTON.toolTip}/>
            </div>
        </div>
    );
};

export default MessageScaffoldContentFooter;