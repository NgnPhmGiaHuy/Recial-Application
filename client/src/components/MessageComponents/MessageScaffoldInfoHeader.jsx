import Image from "next/image";

import { useSelector } from "react-redux";
import { formatShortTimeAgo } from "@/utils";
import { MessageScaffoldInfoHeaderButton } from "@/components";

import MESSAGE_SCAFFOLD_INFO_HEADER_BUTTON from "@/constants/MessageConstants/MessageScaffoldInfoHeaderConstants";

const MessageScaffoldInfoHeader = () => {
    const button = MESSAGE_SCAFFOLD_INFO_HEADER_BUTTON();
    const messageProps = useSelector((state) => state.message);

    return (
        <div>
            <div className="flex flex-col flex-shrink-0 grow relative">
                <div className="pt-[16px] pb-[12px] flex flex-col flex-shrink-0 items-center relative">
                    <div
                        className="w-[72px] h-[72px] flex items-center justify-center rounded-xl overflow-hidden relative">
                        <Image src={messageProps?.user?.profile?.profile_picture_url} alt={`${messageProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
                <div className="px-[16px] flex flex-col flex-shrink-0 items-center relative">
                    <span className="block text-[16px] text-black text-center font-semibold break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            { messageProps?.user?.profile?.username || messageProps?.user?.profile?.firstname + messageProps?.user?.profile?.lastname }
                        </span>
                    </span>
                </div>
                <div className="flex flex-col flex-shrink-0 items-center relative">
                    <div className="pt-[8px] flex flex-col flex-shrink-0 items-center relative">
                        <span className="block text-[12px] text-zinc-500 text-center font-normal break-words relative leading-3">
                            <span className="overflow-hidden relative">
                                Active { formatShortTimeAgo(messageProps?.user?.updated_at) } ago
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