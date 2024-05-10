import { SET_MESSAGES_DATA, SET_MESSAGES_ACTIONS, SET_MESSAGES_LOADING, SET_NO_MORE_MESSAGES, SET_MESSAGES_CONVERSATION_INFO } from "@/store/actions/message/messageAction";
import { UPDATE_MESSAGE_DATA, UPDATE_MESSAGE_DATA_AFTER_DELETED } from "@/store/actions/message/messageAction";
import { CREATE_MESSAGE_DATA } from "@/store/actions/message/messageAction";
import { CLEAR_MESSAGES_DATA } from "@/store/actions/message/messageAction";

const initialState = {
    action: null,
    isLoading: false,
    conversation: null,
    noMoreMessage: false,
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
        case SET_NO_MORE_MESSAGES:
            return {
                ...state,
                noMoreMessage: action.payload,
            }
        case SET_MESSAGES_CONVERSATION_INFO:
            return {
                ...state,
                conversation: action.payload,
            }
        case UPDATE_MESSAGE_DATA:
            const updatedMessages = state.message_list.messages.slice();

            updatedMessages.unshift(...action.payload);

            return {
                ...state,
                message_list: {
                    ref: state.message_list.ref,
                    messages: [...updatedMessages],
                }
            }
        case UPDATE_MESSAGE_DATA_AFTER_DELETED:
            const updatedMessageData = state.message_list.messages.map((value) => {
                if (value._id.toString() === action.payload._id.toString()) {
                    return action.payload;
                }

                return value;
            })

            return {
                ...state,
                message_list: {
                    ref: state.message_list.ref,
                    messages: updatedMessageData,
                }
            }
        case CREATE_MESSAGE_DATA:
            const createdMessages = state.message_list.messages.slice();

            createdMessages.push(action.payload);

            return {
                ...state,
                message_list: {
                    ref: state.message_list.ref,
                    messages: createdMessages,
                },
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