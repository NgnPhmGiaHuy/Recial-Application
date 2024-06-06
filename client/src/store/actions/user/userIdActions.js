export const SET_USER_ID_POST_DATA = "SET_USER_ID_POST_DATA";
export const SET_USER_ID_PROFILE_DATA = "SET_USER_ID_PROFILE_DATA";
export const SET_USER_ID_CONTACT_DATA = "SET_USER_ID_CONTACT_DATA";
export const SET_USER_ID_FRIEND_DATA = "SET_USER_ID_FRIEND_DATA";
export const SET_USER_ID_FOLLOWER_DATA = "SET_USER_ID_FOLLOWER_DATA";
export const SET_USER_ID_FOLLOWING_DATA = "SET_USER_ID_FOLLOWING_DATA";
export const SET_USER_ID_PHOTO_LIST_DATA = "SET_USER_ID_PHOTO_LIST_DATA";
export const SET_USER_ID_VIDEO_LIST_DATA = "SET_USER_ID_VIDEO_LIST_DATA";
export const SET_USER_ID_GROUP_LIST_DATA = "SET_USER_ID_GROUP_LIST_DATA";

export const CREATE_USER_ID_POST_DATA = "CREATE_USER_ID_POST_DATA";
export const CREATE_USER_ID_POST_COMMENT_DATA = "CREATE_USER_ID_POST_COMMENT_DATA";
export const CREATE_USER_ID_POST_REACTION_DATA = "CREATE_USER_ID_POST_REACTION_DATA";

export const UPDATE_USER_ID_POST_REACTION_DATA = "UPDATE_USER_ID_POST_REACTION_DATA";

export const CLEAR_USER_ID_POST_DATA = "CLEAR_USER_ID_POST_DATA";

export const setUserIdPostData = (postData) => ({
    type: SET_USER_ID_POST_DATA,
    payload: postData,
})

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

export const setUserIdVideoListData = (videoListData) => ({
    type: SET_USER_ID_VIDEO_LIST_DATA,
    payload: videoListData,
});

export const setUserIdGroupListData = (groupListData) => ({
    type: SET_USER_ID_GROUP_LIST_DATA,
    payload: groupListData,
});

export const createUserIdPostData = (postData) => ({
    type: CREATE_USER_ID_POST_DATA,
    payload: postData,
})

export const createUserIdPostCommentData = (commentData) => ({
    type: CREATE_USER_ID_POST_COMMENT_DATA,
    payload: commentData,
})

export const createUserIdPostReactionData = (reactionData) => ({
    type: CREATE_USER_ID_POST_REACTION_DATA,
    payload: reactionData,
})

export const updateUserIdPostReactionData = (reactionData) => ({
    type: UPDATE_USER_ID_POST_REACTION_DATA,
    payload: reactionData,
})

export const clearUserIdPostData = () => ({
    type: CLEAR_USER_ID_POST_DATA,
})