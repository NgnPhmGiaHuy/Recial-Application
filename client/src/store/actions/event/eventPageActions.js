export const SET_EVENT_PAGE_DATA = "SET_EVENT_PAGE_DATA";
export const SET_EVENT_PAGE_MEMBER_DATA = "SET_EVENT_PAGE_MEMBER_DATA";

export const CLEAR_EVENT_PAGE_DATA = "CLEAR_EVENT_PAGE_DATA";


export const setEventPageData = (eventPageData) => ({
    type: SET_EVENT_PAGE_DATA,
    payload: eventPageData,
})

export const setEventPageMemberData = (eventPageMemberData) => ({
    type: SET_EVENT_PAGE_MEMBER_DATA,
    payload: eventPageMemberData,
})

export const clearEventPageData = () => ({
    type: CLEAR_EVENT_PAGE_DATA,
})