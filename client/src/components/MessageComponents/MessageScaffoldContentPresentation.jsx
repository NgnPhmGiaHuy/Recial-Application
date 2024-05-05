import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

const MessageScaffoldContentPresentation = () => {
    const messageProps = useSelector((state) => state.message, shallowEqual);

    return (
        <div role="Presentation">
            <div className="mb-[120px]">
                <div className="px-[12px] pt-[20px] flex flex-col justify-start relative">
                    <div className="mb-[20px] flex justify-center relative">
                        <div className="w-[60px] h-[60px] flex items-center justify-center rounded-xl bg-white overflow-hidden relative">
                            <Image src={messageProps?.conversation?.conversation_picture_url} alt={`${messageProps?.conversation?.conversation_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                    <div className="mb-[16px] flex justify-center relative">
                        <span className="block text-[16px] text-black text-center font-semibold break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                { messageProps?.conversation?.conversation_name }
                            </span>
                        </span>
                    </div>
                    <div className="mb-[8px] flex justify-center relative">
                        <span className="block text-[12px] text-zinc-500 text-center font-normal break-words relative leading-3">
                            <span className="overflow-hidden relative">
                                Recial
                            </span>
                        </span>
                    </div>
                    <div className="mb-[8px] flex justify-center relative">
                        <span className="block text-[12px] text-zinc-500 text-center font-normal break-words relative leading-3">
                            <span className="overflow-hidden relative">
                                You're friends on Recial
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageScaffoldContentPresentation;