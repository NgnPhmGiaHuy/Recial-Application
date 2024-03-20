import Image from "next/image";

const MessageContentItemSourceImage = ({ messageProps }) => {
    return (
        <div>
            <div className="flex flex-col flex-shrink-0 relative p-[6px]">
                <div className="w-[56px] h-[56px] relative cursor-pointer">
                    <div className="w-full h-full absolute">
                        <div className="w-full h-full overflow-hidden block rounded-3xl bg-white border border-solid border-gray-500 relative">
                            <div className="w-full h-full flex flex-col relative">
                                <Image src={messageProps?.source?.profile_picture_url} alt={`${messageProps?.source?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageContentItemSourceImage;