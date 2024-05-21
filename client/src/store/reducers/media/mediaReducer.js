import { SET_MEDIA_DATA, SET_MEDIA_DATA_AUTHOR, SET_MEDIA_DATA_RECENT, SET_MEDIA_DATA_COMMENT, SET_MEDIA_DATA_REACTION } from "@/store/actions/media/mediaActions";
import { CLEAR_MEDIA_DATA, CLEAR_MEDIA_DATA_RECENT } from "@/store/actions/media/mediaActions";

const initialState = {
    user: null,
    comment: null,
    reaction: null,
    media_recent: null,
}

const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEDIA_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_MEDIA_DATA_AUTHOR:
            return {
                ...state,
                user: action.payload,
            }
        case SET_MEDIA_DATA_RECENT:
            return {
                ...state,
                media_recent: action.payload,
            }
        case SET_MEDIA_DATA_COMMENT:
            return {
                ...state,
                comment: action.payload,
            }
        case SET_MEDIA_DATA_REACTION:
            return {
                ...state,
                reaction: action.payload,
            }
        case CLEAR_MEDIA_DATA:
            return initialState;
        case CLEAR_MEDIA_DATA_RECENT:
            return {
                ...state,
                media_recent: null,
            }
        default:
            return state;
    }
};

export default mediaReducer;