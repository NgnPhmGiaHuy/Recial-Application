"use client"

import { useSelector, shallowEqual } from "react-redux";

import { renderMessageComponent } from "@/utils";
import { useMessageTimestampDisplay } from "@/hooks";
import { LoadingComponent, MessageScaffoldContentFooter, MessageScaffoldContentHeader, MessageScaffoldContentStatus, MessageScaffoldContentPresentation } from "@/components";

const MessageScaffoldContent = ({ handleShowInfo }) => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const timestampDisplayMemo = useMessageTimestampDisplay();

    return (
        <div className="flex flex-col flex-shrink grow basis-0 overflow-hidden relative">
            <MessageScaffoldContentHeader handleShowInfo={handleShowInfo}/>
            <div className="h-full flex flex-col grow basis-full overflow-hidden relative">
                <div ref={messageProps?.message_list?.ref} className="flex flex-col flex-shrink grow basis-auto items-stretch overflow-y-auto overflow-x-hidden isolate relative z-10">
                    <div className="my-[8px]"></div>
                    { messageProps?.noMoreMessage && (
                        <MessageScaffoldContentPresentation/>
                    ) }
                    <div className="flex flex-col relative">
                        { messageProps?.isLoading && !messageProps?.noMoreMessage && (
                            <LoadingComponent/>
                        )}
                        { messageProps?.message_list?.messages?.map((message, index) => renderMessageComponent(message, index, userProps, timestampDisplayMemo)) }
                        { messageProps?.message_list?.messages && messageProps?.message_list?.messages[messageProps?.message_list?.messages.length - 1]?.source && (
                            <MessageScaffoldContentStatus status={{ isSent: true, isRead: messageProps?.message_list?.messages[messageProps?.message_list?.messages.length - 1]?.source?.is_read }}/>
                        ) }
                        <div className="my-[8px]"></div>
                    </div>
                </div>
                <MessageScaffoldContentFooter/>
            </div>
        </div>
    );
};

export default MessageScaffoldContent;