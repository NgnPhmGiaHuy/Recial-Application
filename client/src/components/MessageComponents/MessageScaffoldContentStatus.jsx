import Image from "next/image";
import { useSelector } from "react-redux";

const MessageScaffoldContentStatus = ({ status }) => {
    const userProps = useSelector(state => state.user);

    return (
        <div>
            <div className="flex justify-end relative">
                { status?.isRead && (
                    <div className="my-[8px] mr-[4px]">
                        <div className="w-[14px] h-[14px] flex items-center justify-center rounded-full overflow-hidden relative">
                            <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        </div>
                    </div>
                ) }
                {status?.isSent && (
                    <div className="mx-[16px] my-[-4px]">
                        <span className="block text-[12px] text-center text-zinc-500 font-normal break-words relative leading-3">
                            <span className="overflow-hidden relative">
                                Sent
                            </span>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessageScaffoldContentStatus;