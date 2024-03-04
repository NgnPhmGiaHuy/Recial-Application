import Image from "next/image";

const EventAsideActivityItem = ({ userProps }) => {
    return (
        <div>
            <div className="py-[10px] flex items-start relative">
                <div className="flex flex-row item-start justify-between relative">
                    <div className="flex flex-col flex-shrink-0 relative">
                        <a href="">
                            <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full overflow-hidden relative">
                                <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </a>
                    </div>
                    <div className="ml-[12px]">
                        <div className="flex flex-col items-start justify-start relative">
                            <div>
                                <span className="block text-[13px] text-black text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden line-clamp-2 relative">
                                        David Kim is now participating to the Awesome Pool Party with Friends event.
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[12px] text-zinc-500 text-left font-normal break-words relative leading-5">
                                    <span className="overflow-hidden line-clamp-1 relative">
                                        23 minutes ago
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

export default EventAsideActivityItem;