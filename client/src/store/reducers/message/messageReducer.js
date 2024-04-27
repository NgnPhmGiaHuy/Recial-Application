import { SET_MESSAGES_DATA, SET_MESSAGES_ACTIONS, SET_MESSAGES_LOADING, SET_MESSAGES_DESTINATION_USER } from "@/store/actions/message/messageAction";
import { CLEAR_MESSAGES_DATA } from "@/store/actions/message/messageAction";

const initialState = {
    user: null,
    action: null,
    isLoading: false,
    message_list: {
        ref: null,
        messages: null,
    },
}

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES_DATA:
            return {
                ...state,
                message_list: {
                    ref: action.payload.ref,
                    messages: action.payload.messages,
                },
            }
        case SET_MESSAGES_ACTIONS:
            return {
                ...state,
                action: action.payload,
            }
        case SET_MESSAGES_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case SET_MESSAGES_DESTINATION_USER:
            return {
                ...state,
                user: action.payload,
            }
        case CLEAR_MESSAGES_DATA:
            return {
                ...state,
                message_list: {
                    ref: null,
                    messages: null,
                },
            }
        default:
            return state;
    }
}

export default messageReducer;