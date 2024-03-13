export const SET_MEDIA_DATA = "SET_MEDIA_DATA";
export const CLEAR_MEDIA_DATA = "CLEAR_MEDIA_DATA";

export const setMediaData = (mediaData) => ({
    type: SET_MEDIA_DATA,
    payload: mediaData,
})

export const clearMediaData = () => ({
    type: CLEAR_MEDIA_DATA,
})