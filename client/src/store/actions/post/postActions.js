export const SET_POST_DATA = "SET_POST_DATA";

export const CREATE_POST_DATA = "CREATE_POST_DATA";
export const CREATE_POST_COMMENT_DATA = "CREATE_POST_COMMENT_DATA";
export const CREATE_POST_REACTION_DATA = "CREATE_POST_REACTION_DATA";

export const UPDATE_POST_REACTION_DATA = "UPDATE_POST_REACTION_DATA";

export const CLEAR_POST_DATA = "CLEAR_POST_DATA";

export const setPostData = (postData) => ({
    type: SET_POST_DATA,
    payload: postData,
})

export const createPostData = (postData) => ({
    type: CREATE_POST_DATA,
    payload: postData,
})

export const createPostCommentData = (commentData) => ({
    type: CREATE_POST_COMMENT_DATA,
    payload: commentData,
})

export const createPostReactionData = (reactionData) => ({
    type: CREATE_POST_REACTION_DATA,
    payload: reactionData,
})

export const updatePostReactionData = (reactionData) => ({
    type: UPDATE_POST_REACTION_DATA,
    payload: reactionData,
})

export const clearPostData = () => ({
    type: CLEAR_POST_DATA,
})