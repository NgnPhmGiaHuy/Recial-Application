export const SET_GROUP_DATA = "SET_GROUP_DATA";
export const SET_GROUP_POST_DATA = "SET_GROUP_POST_DATA";
export const SET_GROUP_MEMBER_DATA = "SET_GROUP_MEMBER_DATA";
export const SET_GROUP_REQUEST_DATA = "SET_GROUP_REQUEST_DATA";
export const SET_GROUP_ACTIVITY_DATA = "SET_GROUP_ACTIVITY_DATA";
export const SET_GROUP_CURRENT_USER_ROLE_DATA = "SET_GROUP_CURRENT_USER_ROLE_DATA";
export const CLEAR_GROUP_CURRENT_USER_ROLE_DATA = "CLEAR_GROUP_CURRENT_USER_ROLE_DATA";

export const setGroupData = (groupData) => ({
    type: SET_GROUP_DATA,
    payload: groupData,
})

export const setGroupPostData = (postData) => ({
    type: SET_GROUP_POST_DATA,
    payload: postData,
})

export const setGroupMemberData = (memberData) => ({
    type: SET_GROUP_MEMBER_DATA,
    payload: memberData,
})

export const setGroupRequestData = (requestData) => ({
    type: SET_GROUP_REQUEST_DATA,
    payload: requestData,
})

export const setGroupActivityData = (activityData) => ({
    type: SET_GROUP_ACTIVITY_DATA,
    payload: activityData,
})

export const setGroupCurrentUserRole = (userRole) => ({
    type: SET_GROUP_CURRENT_USER_ROLE_DATA,
    payload: userRole,
})

export const clearGroupCurrentUserRole = () => ({
    type: CLEAR_GROUP_CURRENT_USER_ROLE_DATA,
})