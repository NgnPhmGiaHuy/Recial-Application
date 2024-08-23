"use client"

import { useRouter } from "next/navigation";

import { handleFriendRequest } from "@/utils";
import { FriendRequestItemButton, FriendRequestItemInfo, ImageIcon } from "@/components";

const FriendRequestItem = ({ userProps, action }) => {
    const router = useRouter();

    const handleClick = () => {
        if (action) {
            return action(userProps?.user?._id);
        } else {
            return router.push(`/${userProps?.user?._id}`)
        }
    }

    return (
        <div className="pt-[12px] flex flex-col flex-auto justify-between relative" onClick={handleClick}>
            <div className="min-h-[44px] px-[4px] flex items-center justify-between cursor-pointer rounded-xl relative hover:bg-zinc-100 transition-all">
                <div className="my-[8px] mr-[12px]">
                    <ImageIcon src={userProps?.user?.profile?.profile_picture_url} width={60} height={60} />
                </div>
                <div className="my-[-6px] py-[12px] flex flex-wrap grow items-center justify-between basis-0 relative">
                    <FriendRequestItemInfo userProps={userProps}/>
                    <div className="mx-[-12px] flex grow relative">
                        <div className="px-[8px] flex items-stretch justify-between relative">
                            <FriendRequestItemButton color={true} title="Confirm" onClick={(e) => handleFriendRequest(e, "Confirm", userProps?.user?._id)} />
                            <FriendRequestItemButton color={false} title="Delete" onClick={(e) => handleFriendRequest(e, "Delete", userProps?.user?._id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendRequestItem;