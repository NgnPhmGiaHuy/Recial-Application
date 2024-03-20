import Image from "next/image";

const MessageContentItemStatus = ({ messageProps }) => {
    return (
        <div>
            <div className="flex flex-col flex-shrink-0 relative p-[6px]">
                <div className="flex flex-row flex-nowrap items-center">
                    <i className="w-[20px] h-[20px] flex items-center justify-center rounded-full overflow-hidden relative">
                        { messageProps?.is_mute ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 003.844.148m-3.844-.148a23.856 23.856 0 01-5.455-1.31 8.964 8.964 0 002.3-5.542m3.155 6.852a3 3 0 005.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 003.536-1.003A8.967 8.967 0 0118 9.75V9A6 6 0 006.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"/>
                            </svg>
                        ) : messageProps?.is_read ? (
                            <Image src={messageProps?.destination?.profile_picture_url} alt={`${messageProps?.destination?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                        ) : null }
                    </i>
                </div>
            </div>
        </div>
    );
};

export default MessageContentItemStatus;