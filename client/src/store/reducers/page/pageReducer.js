import { SET_PAGE_DATA, SET_PAGE_POST_DATA, SET_PAGE_LIKE_DATA, SET_PAGE_FOLLOW_DATA, SET_PAGE_CURRENT_USER_ROLE_DATA, CLEAR_PAGE_CURRENT_USER_ROLE_DATA } from "@/store/actions/page/pageActions";

const initialState = {
    like: null,
    follow: null,
    profile: null,
    post_list: null,
    currentUserRole: null,
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_DATA:
            return {
                ...state,
                profile: action.payload,
            };
        case SET_PAGE_POST_DATA:
            console.log(action.payload)
            return {
                ...state,
                post_list: {
                    ref: action.payload.ref,
                    posts: action.payload.posts,
                },
            };
        case SET_PAGE_LIKE_DATA:
            return {
                ...state,
                like: action.payload,
            };
        case SET_PAGE_FOLLOW_DATA:
            return {
                ...state,
                follow: action.payload,
            };
        case SET_PAGE_CURRENT_USER_ROLE_DATA:
            return {
                ...state,
                currentUserRole: action.payload,
            }
        case CLEAR_PAGE_CURRENT_USER_ROLE_DATA:
            return {
                ...state,
                currentUserRole: null,
            }
        default:
            return state;
    }
};

export default pageReducer;