import Image from "next/image";
import { useSelector } from "react-redux";

const MessageContentItemSourceImage = ({ messageProps }) => {
    const userProps = useSelector((state) => state.user);

    const shouldDisplayConversationPicture = messageProps?.participants && messageProps?.participants.length > 2;
    const participantPictureToDisplay = shouldDisplayConversationPicture ? null : messageProps.participants.find(participant => participant._id !== userProps.user?._id);
    const conversationPictureUrl = shouldDisplayConversationPicture ? messageProps?.conversation_picture_url : participantPictureToDisplay.profile.profile_picture_url;

    return (
        <div>
            <div className="flex flex-col flex-shrink-0 relative p-[6px]">
                <div className="w-[56px] h-[56px] relative cursor-pointer">
                    <div className="w-full h-full absolute">
                        <div className="w-full h-full overflow-hidden block rounded-3xl bg-white border border-solid border-gray-500 relative">
                            <div className="w-full h-full flex flex-col relative">
                                <Image src={conversationPictureUrl} alt={`${conversationPictureUrl}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageContentItemSourceImage;