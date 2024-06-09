export const SET_MEDIA_DATA = "SET_MEDIA_DATA";
export const SET_MEDIA_SAVED_DATA = "SET_MEDIA_SAVED_DATA";
export const SET_MEDIA_AUTHOR_DATA = "SET_MEDIA_AUTHOR_DATA";
export const SET_MEDIA_RECENT_DATA = "SET_MEDIA_RECENT_DATA";
export const SET_MEDIA_COMMENT_DATA = "SET_MEDIA_COMMENT_DATA";
export const SET_MEDIA_REACTION_DATA = "SET_MEDIA_REACTION_DATA";

export const CREATE_MEDIA_SAVED_DATA = "CREATE_MEDIA_SAVED_DATA";
export const CREATE_MEDIA_COMMENT_DATA = "CREATE_MEDIA_COMMENT_DATA";
export const CREATE_MEDIA_COMMENT_REACTION_DATA = "CREATE_MEDIA_COMMENT_REACTION_DATA";
export const CREATE_MEDIA_REACTION_DATA = "CREATE_MEDIA_REACTION_DATA";

export const DELETE_MEDIA_SAVED_DATA = "DELETE_MEDIA_SAVED_DATA";
export const DELETE_MEDIA_REACTION_DATA = "DELETE_MEDIA_REACTION_DATA";
export const DELETE_MEDIA_COMMENT_REACTION_DATA = "DELETE_MEDIA_COMMENT_REACTION_DATA";

export const CLEAR_MEDIA_DATA = "CLEAR_MEDIA_DATA";
export const CLEAR_MEDIA_DATA_RECENT = "CLEAR_MEDIA_DATA_RECENT";

export const setMediaData = (mediaData) => ({
    type: SET_MEDIA_DATA,
    payload: mediaData,
})

export const setMediaSavedData = (mediaSaved) => ({
    type: SET_MEDIA_SAVED_DATA,
    payload: mediaSaved,
})

export const setMediaAuthorData = (mediaAuthor) => ({
    type: SET_MEDIA_AUTHOR_DATA,
    payload: mediaAuthor,
})

export const setMediaRecentData = (mediaRecent) => ({
    type: SET_MEDIA_RECENT_DATA,
    payload: mediaRecent,
})

export const setMediaCommentData = (mediaComment) => ({
    type: SET_MEDIA_COMMENT_DATA,
    payload: mediaComment,
})

export const setMediaReactionData = (mediaReaction) => ({
    type: SET_MEDIA_REACTION_DATA,
    payload: mediaReaction,
})

export const createMediaSavedData = (mediaSaved) => ({
    type: CREATE_MEDIA_SAVED_DATA,
    payload: mediaSaved,
})

export const createMediaCommentData = (commentData) => ({
    type: CREATE_MEDIA_COMMENT_DATA,
    payload: commentData,
})

export const createMediaCommentReactionData = (reactionData) => ({
    type: CREATE_MEDIA_COMMENT_REACTION_DATA,
    payload: reactionData,
})

export const createMediaReactionData = (reactionData) => ({
    type: CREATE_MEDIA_REACTION_DATA,
    payload: reactionData,
})

export const deleteMediaSavedData = (savedData) => ({
    type: DELETE_MEDIA_SAVED_DATA,
    payload: savedData,
})

export const deleteMediaReactionData = (reactionData) => ({
    type: DELETE_MEDIA_REACTION_DATA,
    payload: reactionData,
})

export const deleteMediaCommentReactionData = (reactionData) => ({
    type: DELETE_MEDIA_COMMENT_REACTION_DATA,
    payload: reactionData,
})

export const clearMediaData = () => ({
    type: CLEAR_MEDIA_DATA,
})

export const clearMediaDataRecent = () => ({
    type: CLEAR_MEDIA_DATA_RECENT,
})