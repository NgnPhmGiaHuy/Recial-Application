import { SET_PAGE_DATA, SET_PAGE_LIKE_DATA, SET_PAGE_FOLLOW_DATA } from "@/store/actions/page/pageActions";

const initialState = {
    like: null,
    follow: null,
    profile: null,
}

const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGE_DATA:
            return {
                ...state,
                profile: action.payload,
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
        default:
            return state;
    }
};

export default pageReducer;