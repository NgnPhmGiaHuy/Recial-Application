import { shallowEqual, useSelector } from "react-redux";

import { formatShortTimeAgo } from "@/utils";
import { MessagePresentationImage, MessageScaffoldInfoHeaderButton } from "@/components";

import MESSAGE_SCAFFOLD_INFO_HEADER_BUTTON from "@/constants/MessageConstants/MessageScaffoldInfoHeaderConstants";

const MessageScaffoldInfoHeader = () => {
    const userProps = useSelector((state) => state.user, shallowEqual);
    const messageProps = useSelector((state) => state.message, shallowEqual);

    const otherUserProps = messageProps?.conversation?.participants?.length <= 2 ? messageProps?.conversation?.participants.filter(conversation => conversation._id !== userProps?.user?._id) : null;

    const button = MESSAGE_SCAFFOLD_INFO_HEADER_BUTTON({ userProps: otherUserProps && otherUserProps[0], displayProfile: messageProps?.conversation?.participants?.length <= 2 });

    const participantPictureUrl = messageProps?.conversation?.participants?.slice(0, 2).map((pictureUrl) => pictureUrl?.profile?.profile_picture_url);
    const conversationPictureUrl = messageProps?.conversation?.conversation_picture_url ? messageProps?.conversation?.conversation_picture_url : participantPictureUrl;

    return (
        <div>
            <div className="flex flex-col flex-shrink-0 grow relative">
                <div className="pt-[16px] pb-[12px] flex flex-col flex-shrink-0 items-center relative">
                    <div className="w-[72px] h-[72px] flex items-center justify-center rounded-xl overflow-hidden relative">
                        <MessagePresentationImage conversationPictureUrl={conversationPictureUrl}/>
                    </div>
                </div>
                <div className="px-[16px] flex flex-col flex-shrink-0 items-center relative">
                    <span className="block text-[16px] text-black text-center font-semibold break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            { messageProps?.conversation?.conversation_name }
                        </span>
                    </span>
                </div>
                <div className="flex flex-col flex-shrink-0 items-center relative">
                    <div className="pt-[8px] flex flex-col flex-shrink-0 items-center relative">
                        <span className="block text-[12px] text-zinc-500 text-center font-normal break-words relative leading-3">
                            <span className="overflow-hidden relative">
                                Active { formatShortTimeAgo(messageProps?.conversation?.updated_at) } ago
                            </span>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col flex-shrink-0 items-center relative">
                    <div className="pt-[16px] px-[12px] flex flex-row flex-shrink-0 items-stretch justify-center">
                        { button.map((value, index) => (
                            <MessageScaffoldInfoHeaderButton key={index} button={value}/>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldInfoHeader;