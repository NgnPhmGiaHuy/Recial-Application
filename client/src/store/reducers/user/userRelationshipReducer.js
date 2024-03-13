import { SET_USER_RELATIONSHIP } from "@/store/actions/user/userRelationshipActions";

const initialState = {
    isCurrentUser: false,
    isFriend: false,
    isFriendRequest: false,
};

const userRelationshipReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_RELATIONSHIP:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default userRelationshipReducer;