import Image from "next/image";

import Message from "@/public/images/Icon/message.png";

const MessageNoChatSelected = () => {
    return (
        <div className="w-full h-full bg-white">
            <div className="w-full h-full flex flex-col grow relative">
                <div className="w-full h-full flex items-center justify-center relative">
                    <div className="flex flex-shrink grow basis-full relative">
                        <div className="flex flex-col grow justify-center relative">
                            <div className="pb-[12px] flex flex-col flex-shrink-0 items-center justify-center relative">
                                <div className="w-[256px] h-[256px] flex items-center justify-center relative overflow-hidden">
                                    <Image src={Message} alt={`${Message}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                            <div className="pt-[20px] flex flex-col flex-shrink-0 items-center relative">
                                <span className="block text-[20px] text-black text-center font-bold break-words relative leading-6">
                                    <span className="overflow-hidden relative">
                                        No chats selected
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageNoChatSelected;