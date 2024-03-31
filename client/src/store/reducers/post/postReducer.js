import { createPostComment, createPostReaction, updatePostReaction } from "@/utils";

import { SET_POST_DATA } from "@/store/actions/post/postActions";
import { CREATE_POST_DATA, CREATE_POST_COMMENT_DATA, CREATE_POST_REACTION_DATA } from "@/store/actions/post/postActions";
import { UPDATE_POST_REACTION_DATA } from "@/store/actions/post/postActions";

import { CLEAR_POST_DATA } from "@/store/actions/post/postActions";

const initialState = {
    post_list: null,
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_DATA:
            return {
                ...state,
                post_list: {
                    ref: action.payload.ref,
                    posts: action.payload.posts,
                },
            };
        case CREATE_POST_DATA:
            return {
                ...state,
            }
        case CREATE_POST_COMMENT_DATA:
            return createPostComment(state, action);
        case CREATE_POST_REACTION_DATA:
            return createPostReaction(state, action);
        case UPDATE_POST_REACTION_DATA:
            return updatePostReaction(state, action);
        case CLEAR_POST_DATA:
            return {
                ...state,
                post_list: null,
            };
        default:
            return state;
    }
};

export default postReducer;