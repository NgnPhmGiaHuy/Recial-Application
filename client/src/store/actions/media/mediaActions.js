export const SET_MEDIA_DATA = "SET_MEDIA_DATA";
export const SET_MEDIA_DATA_AUTHOR = "SET_MEDIA_DATA_AUTHOR";
export const SET_MEDIA_DATA_RECENT = "SET_MEDIA_DATA_RECENT";
export const SET_MEDIA_DATA_COMMENT = "SET_MEDIA_DATA_COMMENT";
export const SET_MEDIA_DATA_REACTION = "SET_MEDIA_DATA_REACTION";

export const CLEAR_MEDIA_DATA = "CLEAR_MEDIA_DATA";

export const setMediaData = (mediaData) => ({
    type: SET_MEDIA_DATA,
    payload: mediaData,
})

export const setMediaAuthor = (mediaAuthor) => ({
    type: SET_MEDIA_DATA_AUTHOR,
    payload: mediaAuthor,
})

export const setMediaRecent = (mediaRecent) => ({
    type: SET_MEDIA_DATA_RECENT,
    payload: mediaRecent,
})

export const setMediaComment = (mediaComment) => ({
    type: SET_MEDIA_DATA_COMMENT,
    payload: mediaComment,
})

export const setMediaReaction = (mediaReaction) => ({
    type: SET_MEDIA_DATA_REACTION,
    payload: mediaReaction,
})

export const clearMediaData = () => ({
    type: CLEAR_MEDIA_DATA,
})