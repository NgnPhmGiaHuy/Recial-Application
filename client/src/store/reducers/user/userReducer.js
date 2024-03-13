import { SET_USER_PROFILE_DATA, SET_USER_NOTIFICATION_DATA, SET_USER_CONTACT_DATA, SET_USER_MESSAGE_DATA, SET_USER_SETTING_DATA, SET_USER_FRIEND_DATA, SET_USER_SEARCH_DATA, SET_USER_FOLLOWING_DATA, SET_USER_FOLLOWER_DATA, SET_USER_PHOTO_LIST_DATA, SET_USER_GROUP_LIST_DATA, SET_USER_FRIEND_REQUEST_DATA } from "../../actions/user/userActions";

const initialState = {
    user: {
        _id: "",
        profile: {},
        contact: {},
        friends: [],
        follower: [],
        following: [],
    },
    search: [],
    settings: {},
    messages: [],
    photo_list: [],
    group_list: [],
    notifications: [],
    friend_request: [],
}

const userReducer = (state  = initialState, action) => {
    switch (action.type) {
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
                messages: action.payload,
            };
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
        default:
            return state;
    }
};

export default userReducer;