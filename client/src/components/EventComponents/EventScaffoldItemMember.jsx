import Link from "next/link";
import Image from "next/image";

const EventScaffoldItemMember = ({ userProps }) => {
    return (
        <div>
            <div className="w-full h-full p-[12px] relative">
                <div className="w-full flex flex-col justify-between relative">
                    <div className="flex flex-row items-center relative">
                        <Link href={userProps?.user?._id}>
                            <div className="w-[40px] h-[40px] ml-[-14px] border-[2px] border-solid border-zinc-100 rounded-full relative cursor-pointer overflow-hidden">
                                <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                            </div>
                        </Link>
                        <div className="w-[40px] h-[40px] ml-[-14px] flex items-center justify-center border-[2px] border-solid border-zinc-100 rounded-full bg-zinc-200 relative cursor-pointer overflow-hidden z-10">
                            <span className="block text-[16px] text-center text-zinc-500 font-bold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    +40
                                </span>
                            </span>
                        </div>
                        <div className="ml-[12px] flex flex-col justify-between relative">
                            <div>
                                <span className="block text-[14px] text-left text-zinc-700 font-bold break-words relative leading-4">
                                    <span className="overflow-hidden relative">
                                        Member apply
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span className="block text-[10px] text-left text-zinc-700 font-normal break-words relative leading-4">
                                    <span className="overflow-hidden relative">
                                        You, David and 23 more are participating
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

export default EventScaffoldItemMember;