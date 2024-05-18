import { MessagePresentationImage } from "@/components";

const MessageContentItemSourceImage = ({ messageProps }) => {
    const participantPictureUrl = messageProps?.participants?.slice(0, 2).map((pictureUrl) => pictureUrl?.profile?.profile_picture_url);
    const conversationPictureUrl = messageProps?.conversation_picture_url ? messageProps?.conversation_picture_url : participantPictureUrl;

    return (
        <>
            <div className="flex flex-col flex-shrink-0 relative p-[6px]">
                <div className="w-[56px] h-[56px] relative cursor-pointer">
                    <div className="w-full h-full absolute">
                        <MessagePresentationImage conversationPictureUrl={conversationPictureUrl}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MessageContentItemSourceImage;