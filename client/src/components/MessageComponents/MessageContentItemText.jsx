import { useSelector } from "react-redux";

import { formatShortTimeAgo } from "@/utils";

const MessageContentItemText = ({ messageProps }) => {
    const userProps = useSelector((state) => state.user);

    return (
        <div>
            <div className="flex flex-row flex-shrink flex-wrap grow basis-auto items-center justify-between relative">
                <div className="max-w-full flex flex-col flex-shrink-0 grow relative p-[6px]">
                    <span className="block text-[15px] text-black text-left font-medium break-words leading-5">
                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                            { messageProps?.source?._id === userProps?.user?._id ? (
                                messageProps?.destination?.profile?.username || messageProps?.destination?.profile?.firstname + " " + messageProps?.destination?.profile?.lastname
                            ) : (
                                messageProps?.source?.profile?.username || messageProps?.source?.profile?.firstname + " " + messageProps?.source?.profile?.lastname
                            ) }
                        </span>
                    </span>
                    <div className="min-h-[16px] flex flex-row items-center pt-[6px]">
                        <span className="flex items-center break-words pr-[2px]">
                            <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                <span className="max-w-[150px] block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                    {messageProps?.message_content}
                                </span>
                            </span>
                        </span>
                        <span className="flex items-center break-words">
                            <span className="block text-[13px] text-gray-500 font-normal break-words leading-4 mx-[4px]">
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis relative">
                                    <span> · </span>
                                </span>
                            </span>
                        </span>
                        <span className="flex items-center break-words pl-[2px]">
                            <span className="block text-[14px] text-gray-500 font-normal break-words leading-4">
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis line-clamp-1 relative">
                                    {formatShortTimeAgo(messageProps?.updated_at)}
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageContentItemText;