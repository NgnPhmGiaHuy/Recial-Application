import {
    TOGGLE_HEADER_MENU, TOGGLE_HEADER_MESSAGE, TOGGLE_HEADER_NOTIFICATION, TOGGLE_HEADER_SEARCH_HISTORY, TOGGLE_HEADER_PERSONAL_ACCOUNT,
    TOGGLE_CREATE_POST_AUDIENCE, TOGGLE_CREATE_POST_MEDIA_INPUT,
    TOGGLE_CREATE_POST, TOGGLE_CREATE_POST_PANEL,
    TOGGLE_EDIT_PROFILE,
    TOGGLE_GROUP_PRIVACY,
    TOGGLE_GROUP_VISIBLE
} from "@/store/actions/toggle/toggleActions";

const initialState = {
    showMenu: false,
    showMessage: false,
    showNotification: false,
    showSearchHistory: false,
    showPersonalAccount: false,
    showCreatePost: false,
    showCreatePostPanel: true,
    showCreatePostAudience: false,
    showCreatePostMediaInput: false,
    showEditProfile: false,
    showGroupPrivacy: false,
    showGroupVisible: false,
};

const toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_HEADER_MENU:
            return {
                ...state,
                showMenu: !state.showMenu,
            };
        case TOGGLE_HEADER_MESSAGE:
            return {
                ...state,
                showMessage: !state.showMessage,
            };
        case TOGGLE_HEADER_NOTIFICATION:
            return {
                ...state,
                showNotification: !state.showNotification,
            };
        case TOGGLE_HEADER_SEARCH_HISTORY:
            return {
                ...state,
                showSearchHistory: !state.showSearchHistory,
            };
        case TOGGLE_HEADER_PERSONAL_ACCOUNT:
            return {
                ...state,
                showPersonalAccount: !state.showPersonalAccount,
            };
        case TOGGLE_EDIT_PROFILE:
            return {
                ...state,
                showEditProfile: !state.showEditProfile,
            };
        case TOGGLE_GROUP_PRIVACY:
            return {
                ...state,
                showGroupPrivacy: !state.showGroupPrivacy,
            };
        case TOGGLE_GROUP_VISIBLE:
            return {
                ...state,
                showGroupVisible: !state.showGroupVisible,
            };
        case TOGGLE_CREATE_POST:
            return {
                ...state,
                showCreatePost: !state.showCreatePost,
            };
        case TOGGLE_CREATE_POST_PANEL:
            return {
                ...state,
                showCreatePostPanel: !state.showCreatePostPanel,
            };
        case TOGGLE_CREATE_POST_AUDIENCE:
            return {
                ...state,
                showCreatePostAudience: !state.showCreatePostAudience,
            };
        case TOGGLE_CREATE_POST_MEDIA_INPUT:
            return {
                ...state,
                showCreatePostMediaInput: !state.showCreatePostMediaInput,
            };
        default:
            return state;
    }
};

export default toggleReducer;