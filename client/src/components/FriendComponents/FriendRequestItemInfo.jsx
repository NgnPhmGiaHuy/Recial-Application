import Image from "next/image";

import { formatShortTimeAgo } from "@/utils";

const FriendRequestItemInfo = ({ userProps }) => {
    return (
        <>
            <div className="min-w-[50%] py-[6px] pr-[12px] flex flex-col grow relative">
                <div className="my-[-5px]">
                    <div className="flex items-center justify-between relative">
                        <div className="flex grow basis-0 relative">
                            <span className="block text-[16px] text-black font-bold break-words leading-5 overflow-hidden line-clamp-1">
                                { userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname }
                            </span>
                        </div>
                        <div className="mr-[8px] flex flex-shrink-0 justify-center self-start relative">
                            <div className="mr-[-16px] flex items-center">
                                <span className="block text-[14px] text-zinc-500 font-medium break-words leading-5">
                                    { formatShortTimeAgo(userProps?.updated_at) }
                                </span>
                            </div>
                        </div>
                    </div>
                    { userProps?.mutual_friends?.length && (
                        <div className="flex items-center justify-between relative">
                            <div className="flex items-center relative">
                                <div className="ml-[8px] flex items-center relative">
                                    { userProps?.mutual_friends?.slice(0, 3).map((value, index) => {
                                        const zIndexValue = 10 - index;

                                        return (
                                            <div key={index} style={{zIndex: zIndexValue}} className="w-[20px] h-[20px] ml-[-8px] border-[2px] border-solid border-white rounded-full cursor-pointer overflow-hidden relative">
                                                <Image src={value.user?.profile?.profile_picture_url} alt={`${value.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                            </div>
                                        );
                                    }) }
                                </div>
                                <span className="block text-[14px] text-zinc-500 font-medium break-words leading-5 overflow-hidden">
                                    { userProps?.user?.profile?.mutual_friends?.length } mutual friends
                                </span>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </>
    );
};

export default FriendRequestItemInfo;