import Image from "next/image";
import { useRouter } from "next/navigation";

import { formatShortTimeAgo } from "@/utils";
import { setUserFriendRequest } from "@/app/api/fetchUserData";
import { FriendRequestItemButton } from "@/components";

const FriendRequestItem = ({ userProps, action }) => {
    const router = useRouter();

    const handleClick = () => {
        if (action) {
            return action(userProps?.user?._id);
        } else {
            return router.push(`/${userProps?.user?._id}`)
        }
    }

    const handleFriendRequest = async (e, status) => {
        e.stopPropagation();
        try {
            return await setUserFriendRequest(status, userProps);
        } catch (error) {
            return console.error('Error handling friend request:', error);
        }
    }

    return (
        <div className="pt-[12px] flex flex-col flex-auto justify-between relative" onClick={handleClick}>
            <div className="min-h-[44px] px-[4px] flex flex-row items-center justify-between cursor-pointer rounded-xl relative hover:bg-zinc-100 transition-all">
                <div className="my-[8px] mr-[12px] flex flex-col self-start relative">
                    <div className="w-[60px] h-[60px] flex flex-col items-center rounded-full overflow-hidden relative">
                        <Image src={userProps?.user?.profile?.profile_picture_url} alt={`${userProps?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </div>
                <div className="my-[-6px] py-[12px] flex flex-row flex-shrink flex-wrap grow items-center justify-between basis-0 relative">
                    <div className="min-w-[50%] py-[6px] pr-[12px] flex flex-col flex-shrink basis-1/2 grow relative">
                        <div className="my-[-5px] flex flex-col">
                            <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                <div className="flex flex-col flex-shrink grow basis-0 relative">
                                    <span className="block text-[16px] text-black font-bold break-words relative leading-5">
                                        <span className="overflow-hidden line-clamp-1 relative">
                                            {userProps?.user?.profile?.username || userProps?.user?.profile?.firstname + " " + userProps?.user?.profile?.lastname}
                                        </span>
                                    </span>
                                </div>
                                <div className="mr-[8px] flex flex-col flex-shrink-0 justify-center self-start relative">
                                    <div className="mr-[-16px] flex items-center">
                                        <span className="block text-[14px] text-zinc-500 font-medium break-words relative leading-5">
                                            {formatShortTimeAgo(userProps?.updated_at)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {userProps?.mutual_friends?.length && (
                                <div className="flex flex-row flex-nowrap items-center justify-between relative">
                                    <div className="flex flex-row items-center justify-between relative">
                                        <div className="ml-[8px] flex flex-row items-center justify-center relative">
                                            {userProps?.mutual_friends?.slice(0, 3).map((value, index) => {
                                                const zIndexValue = 10 - index;
                                                return (
                                                    <div key={index} style={{zIndex: zIndexValue}} className="w-[20px] h-[20px] ml-[-8px] border-[2px] border-solid border-white rounded-full relative cursor-pointer overflow-hidden">
                                                        <Image src={value.user?.profile?.profile_picture_url} alt={`${value.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="flex flex-col items-center relative">
                                            <span className="block text-[14px] text-zinc-500 font-medium break-words relative leading-5">
                                                <span className="overflow-hidden relative">
                                                    {userProps?.user?.profile?.mutual_friends?.length} mutual friends
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mx-[-12px] flex flex-col grow relative">
                        <div className="px-[8px] flex flex-row flex-wrap items-stretch justify-between relative">
                            <FriendRequestItemButton color={true} title="Confirm" onClick={(e) => handleFriendRequest(e,  "Confirm")}/>
                            <FriendRequestItemButton color={false} title="Delete" onClick={(e) => handleFriendRequest(e,  "Delete")}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendRequestItem;