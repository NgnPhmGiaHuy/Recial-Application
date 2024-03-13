export const SET_PAGE_DATA = "SET_PAGE_DATA";
export const SET_PAGE_LIKE_DATA = "SET_PAGE_LIKE_DATA";
export const SET_PAGE_FOLLOW_DATA = "SET_PAGE_FOLLOW_DATA";

export const setPageData = (pageData) => ({
    type: SET_PAGE_DATA,
    payload: pageData,
})

export const setPageLikeData = (pageLikeData) => ({
    type: SET_PAGE_LIKE_DATA,
    payload: pageLikeData,
})

export const setPageFollowData = (pageFollowData) => ({
    type: SET_PAGE_FOLLOW_DATA,
    payload: pageFollowData,
})