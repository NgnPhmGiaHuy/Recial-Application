import Image from "next/image";

const MessageScaffoldContentDestination = ({ messageProps }) => {
    return (
        <div>
            <div className="mx-[8px] mb-[12px] flex flex-row relative">
                <div className="pl-[14px] pr-[8px] flex flex-col justify-end self-stretch">
                    <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full overflow-hidden relative">
                        <Image src={messageProps?.source_id?.profile_picture_url} alt={`${messageProps?.source_id?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
                <div className="flex flex-shrink grow relative">
                    <div className="max-w-[calc(100%-70px-5px)] flex flex-col justify-end self-stretch relative">
                        <div className="flex flex-col grow justify-end self-stretch">
                            <div className="flex flex-col items-end relative">
                                <div className="max-w-[564px] px-[12px] py-[8px] bg-zinc-200 rounded-xl overflow-hidden relative">
                                    <span
                                        className="block text-[14px] text-left text-black font-normal break-words relative leading-5">
                                        <div className="my-[4px] text-left text-black whitespace-pre-wrap">
                                            { messageProps?.message_content }
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldContentDestination;