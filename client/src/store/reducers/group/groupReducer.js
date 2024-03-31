import { SET_GROUP_DATA, SET_GROUP_POST_DATA, SET_GROUP_MEMBER_DATA, SET_GROUP_REQUEST_DATA, SET_GROUP_ACTIVITY_DATA, SET_GROUP_CURRENT_USER_ROLE_DATA, CLEAR_GROUP_CURRENT_USER_ROLE_DATA } from "@/store/actions/group/groupActions";

const initialState = {
    profile: null,
    members: null,
    activity: null,
    requests: null,
    post_list: null,
    currentUserRole: null,
}

const groupReducer = (state  = initialState, action) => {
    switch (action.type) {
        case SET_GROUP_DATA:
            return {
                ...state,
                profile: action.payload,
            };
        case SET_GROUP_POST_DATA:
            return {
                ...state,
                post_list: {
                    ref: action.payload.ref,
                    posts: action.payload.posts,
                },
            };
        case SET_GROUP_MEMBER_DATA:
            return {
                ...state,
                members: action.payload,
            };
        case SET_GROUP_REQUEST_DATA:
            return {
                ...state,
                requests: action.payload,
            };
        case SET_GROUP_ACTIVITY_DATA:
            return {
                ...state,
                activity: action.payload,
            };
        case SET_GROUP_CURRENT_USER_ROLE_DATA:
            return {
                ...state,
                currentUserRole: action.payload,
            }
        case CLEAR_GROUP_CURRENT_USER_ROLE_DATA:
            return {
                ...state,
                currentUserRole: null,
            }
        default:
            return state;
    }
};


export default groupReducer;