import { createPostComment, createPostReaction, updatePostReaction } from "@/utils";

import { SET_USER_POST_DATA, SET_USER_PROFILE_DATA, SET_USER_NOTIFICATION_DATA, SET_USER_CONTACT_DATA, SET_USER_MESSAGE_DATA, SET_USER_MESSAGE_LOADING, SET_USER_SETTING_DATA, SET_USER_FRIEND_DATA, SET_USER_SEARCH_DATA, SET_USER_FOLLOWING_DATA, SET_USER_FOLLOWER_DATA, SET_USER_PHOTO_LIST_DATA, SET_USER_GROUP_LIST_DATA, SET_USER_FRIEND_REQUEST_DATA } from "../../actions/user/userActions";
import { CREATE_USER_POST_DATA, CREATE_USER_POST_COMMENT_DATA, CREATE_USER_POST_REACTION_DATA } from "../../actions/user/userActions";
import { UPDATE_USER_POST_REACTION_DATA } from "../../actions/user/userActions";
import { DELETE_USER_POST_DATA } from "../../actions/user/userActions";
import { CLEAR_USER_POST_DATA, CLEAR_USER_MESSAGE_DATA } from "../../actions/user/userActions";

const initialState = {
    user: {
        _id: "",
        profile: null,
        contact: null,
        friends: null,
        follower: null,
        following: null,
    },
    search: null,
    settings: null,
    post_list: null,
    group_list: null,
    photo_list: null,
    user_messages: {
        isLoading: false,
        message_list: null,
    },
    notifications: null,
    friend_request: null,
}

const userReducer = (state  = initialState, action) => {
    switch (action.type) {
        case SET_USER_POST_DATA:
            return {
                ...state,
                post_list: {
                    ref: action.payload.ref,
                    posts: action.payload.posts,
                }
            }
        case SET_USER_PROFILE_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    _id: action.payload.user_id,
                    profile: action.payload.profile,
                },
            };
        case SET_USER_NOTIFICATION_DATA:
            return {
                ...state,
                notifications: action.payload,
            };
        case SET_USER_CONTACT_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    contact: action.payload,
                },
            };
        case SET_USER_MESSAGE_DATA:
            return {
                ...state,
                user_messages: {
                    ...state.user_messages,
                    message_list: {
                        ref: action.payload.ref,
                        messages: action.payload.messages,
                    },
                }
            };
        case SET_USER_MESSAGE_LOADING:
            return {
                ...state,
                user_messages: {
                    ...state.user_messages,
                    isLoading: action.payload,
                }
            }
        case SET_USER_SETTING_DATA:
            return {
                ...state,
                settings: action.payload,
            };
        case SET_USER_FRIEND_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    friends: action.payload
                },
            };
        case SET_USER_SEARCH_DATA:
            return {
                ...state,
                search: action.payload,
            };
        case SET_USER_FOLLOWER_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    follower: action.payload
                },
            };
        case SET_USER_FOLLOWING_DATA:
            return {
                ...state,
                user: {
                    ...state.user,
                    following: action.payload
                },
            };
        case SET_USER_PHOTO_LIST_DATA:
            return {
                ...state,
                photo_list: action.payload,
            };
        case SET_USER_GROUP_LIST_DATA:
            return {
                ...state,
                group_list: action.payload,
            };
        case SET_USER_FRIEND_REQUEST_DATA:
            return {
                ...state,
                friend_request: action.payload,
            };
        case CREATE_USER_POST_DATA:
             return {
                 ...state,
                 post_list: {
                     ref: state.post_list.ref,
                     posts: [action.payload, ...state.post_list.posts],
                 }
             };
        case CREATE_USER_POST_COMMENT_DATA:
            return createPostComment(state, action);
        case CREATE_USER_POST_REACTION_DATA:
            return createPostReaction(state, action);
        case UPDATE_USER_POST_REACTION_DATA:
            return updatePostReaction(state, action);
        case DELETE_USER_POST_DATA:
            const updatedPosts = state.post_list.posts.filter(post => post.post._id !== action.payload);

            return {
                ...state,
                post_list: {
                    ref: state.post_list.ref,
                    posts: updatedPosts,
                }
            };
        case CLEAR_USER_POST_DATA:
            return {
                ...state,
                post_list: null,
            };
        case CLEAR_USER_MESSAGE_DATA:
            return {
                ...state,
                messages: null,
            }
        default:
            return state;
    }
};

export default userReducer;