import { fetchUserData } from "@/utils";
import { setUserFriendRequestData, setUserProfileData } from "@/store/actions/user/userActions";

const handleNewUserData = async (data, dispatch) => {
    const { type } = data;

    if (type === "user_profile_update") {
        return dispatch(setUserProfileData(await fetchUserData("profile")));
    }

    if (type === "friend_request_create" || type === "friend_request_update") {
        return dispatch(setUserFriendRequestData(await fetchUserData("friend-request")));
    }
};

export default handleNewUserData;