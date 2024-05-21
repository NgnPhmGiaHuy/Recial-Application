import { SET_WATCH_DATA, SET_WATCH_DATA_LOADING } from "@/store/actions/watch/watchActions";

const initialState = {
    watch_list: {
        ref: null,
        video_list: null,
    },
    isLoading: false,
}

const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WATCH_DATA:
            return {
                ...state,
                watch_list: {
                    ref: action.payload.ref,
                    video_list: action.payload.videos,
                },
            }
        case SET_WATCH_DATA_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        default:
            return state;
    }
}

export default watchReducer;