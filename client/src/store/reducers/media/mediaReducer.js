import { SET_MEDIA_DATA, CLEAR_MEDIA_DATA } from "@/store/actions/media/mediaActions";

const initialState = {
    media: null,
}

const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MEDIA_DATA:
            return {
                ...state,
                media: action.payload,
            };
        case CLEAR_MEDIA_DATA:
            return {
                ...state,
                media: null,
            }
        default:
            return state;
    }
};

export default mediaReducer;