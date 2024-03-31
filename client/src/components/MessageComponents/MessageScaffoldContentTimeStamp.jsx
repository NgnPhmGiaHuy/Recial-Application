import { formatTimestampForCover } from "@/utils";

const MessageScaffoldContentTimeStamp = () => {
    return (
        <div>
            <div className="flex flex-col justify-end relative">
                <div className="px-[20px] pt-[10px] pb-[16px]">
                    <div className="max-w-[456px] mx-auto my-[2px] relative">
                        <span className="block text-[12px] text-center text-zinc-500 font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {formatTimestampForCover(new Date())}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldContentTimeStamp;