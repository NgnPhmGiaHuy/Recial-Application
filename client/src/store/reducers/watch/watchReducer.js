import { SET_WATCH_DATA, SET_WATCH_DATA_LOADING } from "@/store/actions/watch/watchActions";
import { CREATE_WATCH_SAVED_DATA, CREATE_WATCH_REACTION_DATA } from "@/store/actions/watch/watchActions";
import { DELETE_WATCH_SAVED_DATA, DELETE_WATCH_REACTION_DATA } from "@/store/actions/watch/watchActions";

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
        case CREATE_WATCH_SAVED_DATA:
            const updatedWatchSavedData = state.watch_list.video_list.map((value) => {
                if (value._id.toString() === action.payload.videoId.toString()) {
                    const updatedValue = [action.payload.userId.toString(), ...value.saved];

                    return {
                        ...value,
                        saved: updatedValue,
                    }
                }

                return value;
            })

            return {
                ...state,
                watch_list: {
                    ref: state.watch_list.ref,
                    video_list: updatedWatchSavedData,
                }
            }
        case CREATE_WATCH_REACTION_DATA:
            const updatedWatchReactionData = state.watch_list.video_list.map((value) => {
                if (value._id.toString() === action.payload.destinationId.toString()) {
                    const updatedValue = [action.payload.sourceId.toString(), ...value.reaction];

                    return {
                        ...value,
                        reaction: updatedValue,
                    }
                }

                return value;
            })

            return {
                ...state,
                watch_list: {
                    ref: state.watch_list.ref,
                    video_list: updatedWatchReactionData,
                }
            }
        case DELETE_WATCH_SAVED_DATA:
            const updatedWatchListAfterDeleteSaved = state.watch_list.video_list.map((value) => {
                if (value._id.toString() === action.payload.videoId.toString()) {
                    const updatedValue = value.saved.filter((value) => value !== action.payload.userId.toString());

                    return {
                        ...value,
                        saved: updatedValue,
                    }
                }

                return value;
            })

            return {
                ...state,
                watch_list: {
                    ref: state.watch_list.ref,
                    video_list: updatedWatchListAfterDeleteSaved,
                }
            }
        case DELETE_WATCH_REACTION_DATA:
            const updatedWatchListAfterDeleteReaction = state.watch_list.video_list.map((value) => {
                if (value._id.toString() === action.payload.destinationId.toString()) {
                    const updatedValue = value.reaction.filter((value) => value !== action.payload.sourceId.toString());

                    return {
                        ...value,
                        reaction: updatedValue,
                    }
                }

                return value;
            })

            return {
                ...state,
                watch_list: {
                    ref: state.watch_list.ref,
                    video_list: updatedWatchListAfterDeleteReaction,
                }
            }
        default:
            return state;
    }
}

export default watchReducer;