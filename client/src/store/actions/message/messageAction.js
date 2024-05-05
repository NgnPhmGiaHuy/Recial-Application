export const SET_MESSAGES_DATA = "SET_MESSAGES_DATA";
export const SET_MESSAGES_LOADING = "SET_MESSAGES_LOADING";
export const SET_MESSAGES_ACTIONS = "SET_MESSAGES_ACTIONS";
export const SET_NO_MORE_MESSAGES = "SET_NO_MORE_MESSAGES";
export const SET_MESSAGES_CONVERSATION_INFO = "SET_MESSAGES_CONVERSATION_INFO";

export const UPDATE_MESSAGE_DATA = "UPDATE_MESSAGE_DATA";

export const CREATE_MESSAGE_DATA = "CREATE_MESSAGE_DATA";

export const CLEAR_MESSAGES_DATA = "CLEAR_MESSAGES_DATA";

export const setMessageData = (messageData) => ({
    type: SET_MESSAGES_DATA,
    payload: messageData,
})

export const setMessageLoading = (messageLoading) => ({
    type: SET_MESSAGES_LOADING,
    payload: messageLoading,
})

export const setMessageActions = (actions) => ({
    type: SET_MESSAGES_ACTIONS,
    payload: actions,
})

export const setNoMoreMessages = (messages) => ({
    type: SET_NO_MORE_MESSAGES,
    payload: messages,
})

export const setMessageConversationInfo = (conversation) => ({
    type: SET_MESSAGES_CONVERSATION_INFO,
    payload: conversation,
})

export const updateMessageData = (messageData) => ({
    type: UPDATE_MESSAGE_DATA,
    payload: messageData,
})

export const createMessageData = (messageData) => ({
    type: CREATE_MESSAGE_DATA,
    payload: messageData,
})

export const clearMessageData = () => ({
    type: CLEAR_MESSAGES_DATA,
})