"use client"

import { useSelector, shallowEqual } from "react-redux";

import { useMessageTimestampDisplay } from "@/hooks";
import { LoadingComponent, MessageScaffoldContentDestination, MessageScaffoldContentDestinationWithTimeStamp, MessageScaffoldContentFooter, MessageScaffoldContentHeader, MessageScaffoldContentSource, MessageScaffoldContentSourceWithTimeStamp, MessageScaffoldContentStatus } from "@/components";

const MessageScaffoldContent = ({ handleShowInfo }) => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const timestampDisplayMemo = useMessageTimestampDisplay();

    const renderMessageComponent = (message, index) =>  {
        const prevMessage = index > 0 ? messageProps?.message_list?.messages[index - 1] : null;
        if (message.source_id._id === userProps?.user?._id) {
            const shouldDisplay = timestampDisplayMemo[message._id];
            const ComponentToRender = shouldDisplay ? MessageScaffoldContentSourceWithTimeStamp : MessageScaffoldContentSource;

            return <ComponentToRender key={index} messageProps={message} />;
        }
        
        if (message.destination_id._id === userProps?.user?._id) {
            const shouldDisplay = timestampDisplayMemo[message._id];
            const ComponentToRender = shouldDisplay ? MessageScaffoldContentDestinationWithTimeStamp : MessageScaffoldContentDestination;

            return <ComponentToRender key={index} messageProps={message} />;
        }
        return null;
    };

    return (
        <div className="flex flex-col flex-shrink grow basis-0 overflow-hidden relative">
            <MessageScaffoldContentHeader handleShowInfo={handleShowInfo}/>
            <div className="h-full flex flex-col grow basis-full overflow-hidden relative">
                <div ref={messageProps?.message_list?.ref} className="flex flex-col flex-shrink grow basis-auto items-stretch overflow-y-auto overflow-x-hidden isolate relative">
                    <div className="my-[8px]"></div>
                    {/*<MessageScaffoldContentPresentation/>*/}
                    <div className="flex flex-col relative">
                        { messageProps?.isLoading && (
                            <LoadingComponent/>
                        )}
                        { messageProps?.message_list?.messages?.map((message, index) => renderMessageComponent(message, index)) }
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