"use client"

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

import { toggleEditProfile } from "@/store/actions/toggle/toggleActions";
import { handleCreateConversationData, handleSentFriendRequest } from "@/utils";

const useUserProfile = (userCheck, userProps) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleToggleEditProfile = async () => {
        if (userCheck?.isCurrentUser) {
            return dispatch(toggleEditProfile());
        }
        if (!userCheck?.isCurrentUser) {
            const createdConversation = await handleCreateConversationData(userProps?.user?._id);
            return router.push(`/messages/${createdConversation._id}`);
        }
    };

    const handleClick = async () => {
        if (!userCheck?.isCurrentUser && !userCheck?.isFriend && !userCheck?.isFriendRequest) {
            await handleSentFriendRequest(userProps.user._id);
        }
    };

    return { handleToggleEditProfile, handleClick };
}

export default useUserProfile;