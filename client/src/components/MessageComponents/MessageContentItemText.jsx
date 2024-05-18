import { shallowEqual, useSelector } from "react-redux";

import { formatShortTimeAgo } from "@/utils";

const MessageContentItemTextDot = () => {
    return (
        <div>
            <span className="flex items-center break-words">
                <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                    <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                        <span> · </span>
                    </span>
                </span>
            </span>
        </div>
    )
}

const MessageContentItemText = ({messageProps}) => {
    const userProps = useSelector((state) => state.user, shallowEqual);

    const shouldDisplayParticipant = messageProps?.participants && messageProps.participants.length <= 2;
    const shouldDisplayConversationName = !shouldDisplayParticipant && messageProps?.conversation_name;
    const participantToDisplay = shouldDisplayParticipant ? messageProps.participants.find(participant => participant._id !== userProps.user?._id) : null;
    const participantName = participantToDisplay ? participantToDisplay?.profile?.username || `${participantToDisplay?.profile?.firstname} ${participantToDisplay?.profile?.lastname}` : null;

    return (
        <>
            <div className="max-w-full min-w-0 flex flex-row flex-shrink flex-wrap grow basis-auto items-center justify-between box-border relative">
                <div className="max-w-full p-[6px] flex flex-col flex-shrink-0 grow box-border relative">
                    <div>
                        <span className="max-w-full min-w-0 block text-[15px] text-black text-left font-medium break-words leading-5">
                            <span className="block whitespace-nowrap text-ellipsis overflow-x-hidden overflow-y-hidden relative">
                                { shouldDisplayParticipant ? participantName : shouldDisplayConversationName ? messageProps.conversation_name : "" }
                            </span>
                        </span>
                        <div className="min-h-[16px] flex  items-center pt-[6px]">
                            { messageProps?.nearest_message?.message_status?.toLowerCase().toString() === "delete" && (
                                <>
                                    <span className="flex items-center break-words pr-[2px]">
                                        <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                            <span className="max-w-[180px] block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                This message have been deleted
                                            </span>
                                        </span>
                                    </span>
                                    <MessageContentItemTextDot/>
                                </>
                            ) }
                            { messageProps?.nearest_message?.message_content && (
                                <>
                                    <span className="flex items-center break-words pr-[2px]">
                                        <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                            <span className="max-w-[180px] block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                                {messageProps?.nearest_message?.message_content}
                                            </span>
                                        </span>
                                    </span>
                                    <MessageContentItemTextDot/>
                                </>
                            ) }
                            { messageProps?.nearest_message?.updated_at && (
                                <span className="flex items-center break-words pl-[2px]">
                                    <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis line-clamp-1 relative">
                                            { formatShortTimeAgo(messageProps?.nearest_message?.updated_at) }
                                        </span>
                                    </span>
                                </span>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageContentItemText;