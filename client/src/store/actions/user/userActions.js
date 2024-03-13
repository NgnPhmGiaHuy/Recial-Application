export const SET_USER_PROFILE_DATA = "SET_USER_PROFILE_DATA";
export const SET_USER_CONTACT_DATA = "SET_USER_CONTACT_DATA";
export const SET_USER_NOTIFICATION_DATA = "SET_USER_NOTIFICATION_DATA";
export const SET_USER_MESSAGE_DATA = "SET_USER_MESSAGE_DATA";
export const SET_USER_SETTING_DATA = "SET_USER_SETTING_DATA";
export const SET_USER_FRIEND_DATA = "SET_USER_FRIEND_DATA";
export const SET_USER_SEARCH_DATA = "SET_USER_SEARCH_DATA";
export const SET_USER_FOLLOWER_DATA = "SET_USER_FOLLOWER_DATA";
export const SET_USER_FOLLOWING_DATA = "SET_USER_FOLLOWING_DATA";
export const SET_USER_PHOTO_LIST_DATA = "SET_USER_PHOTO_LIST_DATA";
export const SET_USER_GROUP_LIST_DATA = "SET_USER_GROUP_LIST_DATA";
export const SET_USER_FRIEND_REQUEST_DATA = "SET_USER_FRIEND_REQUEST_DATA";

export const setUserProfileData = (profileData) => ({
    type: SET_USER_PROFILE_DATA,
    payload: profileData,
})

export const setUserContactData = (contactData) => ({
    type: SET_USER_CONTACT_DATA,
    payload: contactData,
})

export const setUserNotificationData = (notificationData) => ({
    type: SET_USER_NOTIFICATION_DATA,
    payload: notificationData,
})

export const setUserMessageData = (messageData) => ({
    type: SET_USER_MESSAGE_DATA,
    payload: messageData,
})

export const setUserSettingData = (settingData) => ({
    type: SET_USER_SETTING_DATA,
    payload: settingData,
})

export const setUserFriendData = (friendData) => ({
    type: SET_USER_FRIEND_DATA,
    payload: friendData,
});

export const setUserSearchData = (searchData) => ({
    type: SET_USER_SEARCH_DATA,
    payload: searchData,
});

export const setUserFollowingData = (followingData) => ({
    type: SET_USER_FOLLOWING_DATA,
    payload: followingData,
});

export const setUserFollowerData = (followerData) => ({
    type: SET_USER_FOLLOWER_DATA,
    payload: followerData,
});

export const setUserPhotoListData = (photoListData) => ({
    type: SET_USER_PHOTO_LIST_DATA,
    payload: photoListData,
});

export const setUserGroupListData = (groupListData) => ({
    type: SET_USER_GROUP_LIST_DATA,
    payload: groupListData,
});

export const setUserFriendRequestData = (friendRequestData) => ({
    type: SET_USER_FRIEND_REQUEST_DATA,
    payload: friendRequestData,
});