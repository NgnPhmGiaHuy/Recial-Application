import { SET_USER_ID_PROFILE_DATA, SET_USER_ID_CONTACT_DATA, SET_USER_ID_FRIEND_DATA, SET_USER_ID_FOLLOWER_DATA, SET_USER_ID_FOLLOWING_DATA, SET_USER_ID_PHOTO_LIST_DATA, SET_USER_ID_GROUP_LIST_DATA } from "../../actions/user/userIdActions";

const initialState = {
    user: {
        _id: "",
        profile: {},
        contact: {},
        friends: [],
        follower: [],
        following: [],
    },
    photo_list: [],
    group_list: [],
}

const userIdReducer = (state  = initialState, action) => {
    switch (action.type) {
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
        default:
            return state;
    }
};

export default userIdReducer;