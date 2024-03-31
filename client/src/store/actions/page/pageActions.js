export const SET_PAGE_DATA = "SET_PAGE_DATA";
export const SET_PAGE_POST_DATA = "SET_PAGE_POST_DATA";
export const SET_PAGE_LIKE_DATA = "SET_PAGE_LIKE_DATA";
export const SET_PAGE_FOLLOW_DATA = "SET_PAGE_FOLLOW_DATA";
export const SET_PAGE_CURRENT_USER_ROLE_DATA = "SET_PAGE_CURRENT_USER_ROLE_DATA";
export const CLEAR_PAGE_CURRENT_USER_ROLE_DATA = "CLEAR_PAGE_CURRENT_USER_ROLE_DATA";

export const setPageData = (pageData) => ({
    type: SET_PAGE_DATA,
    payload: pageData,
})

export const setPagePostData = (postData) => ({
    type: SET_PAGE_POST_DATA,
    payload: postData,
})

export const setPageLikeData = (pageLikeData) => ({
    type: SET_PAGE_LIKE_DATA,
    payload: pageLikeData,
})

export const setPageFollowData = (pageFollowData) => ({
    type: SET_PAGE_FOLLOW_DATA,
    payload: pageFollowData,
})

export const setPageCurrentUserRole = (userRole) => ({
    type: SET_PAGE_CURRENT_USER_ROLE_DATA,
    payload: userRole,
})

export const clearPageCurrentUserRole = () => ({
    type: CLEAR_PAGE_CURRENT_USER_ROLE_DATA,
})