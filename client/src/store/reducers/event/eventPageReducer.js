import { SET_EVENT_PAGE_DATA, SET_EVENT_PAGE_MEMBER_DATA, CLEAR_EVENT_PAGE_DATA } from "@/store/actions/event/eventPageActions";

const initialState = {
    event: [],
}

const eventPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EVENT_PAGE_DATA:
            return {
                ...state,
                event: action.payload,
            };
        case SET_EVENT_PAGE_MEMBER_DATA:
            return {

            };
        case CLEAR_EVENT_PAGE_DATA:{
            return {
                ...state,
                event: null,
            }
        }
        default:
            return state;
    }
};

export default eventPageReducer;