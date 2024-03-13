export const SET_USER_ID_PROFILE_DATA = "SET_USER_ID_PROFILE_DATA";
export const SET_USER_ID_CONTACT_DATA = "SET_USER_ID_CONTACT_DATA";
export const SET_USER_ID_FRIEND_DATA = "SET_USER_ID_FRIEND_DATA";
export const SET_USER_ID_FOLLOWER_DATA = "SET_USER_ID_FOLLOWER_DATA";
export const SET_USER_ID_FOLLOWING_DATA = "SET_USER_ID_FOLLOWING_DATA";
export const SET_USER_ID_PHOTO_LIST_DATA = "SET_USER_ID_PHOTO_LIST_DATA";
export const SET_USER_ID_GROUP_LIST_DATA = "SET_USER_ID_GROUP_LIST_DATA";

export const setUserIdProfileData = (profileData) => ({
    type: SET_USER_ID_PROFILE_DATA,
    payload: profileData,
})

export const setUserIdContactData = (contactData) => ({
    type: SET_USER_ID_CONTACT_DATA,
    payload: contactData,
})

export const setUserIdFriendData = (friendData) => ({
    type: SET_USER_ID_FRIEND_DATA,
    payload: friendData,
});

export const setUserIdFollowingData = (followingData) => ({
    type: SET_USER_ID_FOLLOWING_DATA,
    payload: followingData,
});

export const setUserIdFollowerData = (followerData) => ({
    type: SET_USER_ID_FOLLOWER_DATA,
    payload: followerData,
});

export const setUserIdPhotoListData = (photoListData) => ({
    type: SET_USER_ID_PHOTO_LIST_DATA,
    payload: photoListData,
});

export const setUserIdGroupListData = (groupListData) => ({
    type: SET_USER_ID_GROUP_LIST_DATA,
    payload: groupListData,
});
