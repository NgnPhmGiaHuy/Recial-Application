import { createPostComment, createPostReaction, updatePostReaction } from "@/utils";

import { SET_USER_ID_POST_DATA, SET_USER_ID_PROFILE_DATA, SET_USER_ID_CONTACT_DATA, SET_USER_ID_FRIEND_DATA, SET_USER_ID_FOLLOWER_DATA, SET_USER_ID_FOLLOWING_DATA, SET_USER_ID_PHOTO_LIST_DATA, SET_USER_ID_GROUP_LIST_DATA } from "../../actions/user/userIdActions";
import { CREATE_USER_ID_POST_DATA, CREATE_USER_ID_POST_COMMENT_DATA, CREATE_USER_ID_POST_REACTION_DATA } from "../../actions/user/userIdActions";
import { UPDATE_USER_ID_POST_REACTION_DATA } from "../../actions/user/userIdActions";
import { CLEAR_USER_ID_POST_DATA } from "../../actions/user/userIdActions";

const initialState = {
    user: {
        _id: "",
        profile: null,
        contact: null,
        friends: null,
        follower: null,
        following: null,
    },
    post_list: null,
    photo_list: null,
    group_list: null,
}

const userIdReducer = (state  = initialState, action) => {
    switch (action.type) {
        case SET_USER_ID_POST_DATA:
            return {
                ...state,
                post_list: {
                    ref: action.payload.ref,
                    posts: action.payload.posts,
                }
            }
        case SET_USER_ID_PROFILE_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    _id: action.payload.user_id,
                    profile: action.payload.profile,
                },
            };
        case SET_USER_ID_CONTACT_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    contact: action.payload,
                },
            };
        case SET_USER_ID_FRIEND_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    friends: action.payload
                },
            };
        case SET_USER_ID_FOLLOWER_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    follower: action.payload
                },
            };
        case SET_USER_ID_FOLLOWING_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    following: action.payload
                },
            };
        case SET_USER_ID_PHOTO_LIST_DATA:
            return {
                ...state,
                photo_list: action.payload,
            };
        case SET_USER_ID_GROUP_LIST_DATA:
            return {
                ...state,
                group_list: action.payload,
            };
        case CREATE_USER_ID_POST_COMMENT_DATA:
            return createPostComment(state, action);
        case CREATE_USER_ID_POST_REACTION_DATA:
            return createPostReaction(state, action);
        case UPDATE_USER_ID_POST_REACTION_DATA:
            return updatePostReaction(state, action);
        case CLEAR_USER_ID_POST_DATA:
            return {
                ...state,
                post_list: null,
            }
        default:
            return state;
    }
};

export default userIdReducer;