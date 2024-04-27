export const SET_MESSAGES_DATA = 'SET_MESSAGES_DATA';
export const SET_MESSAGES_LOADING = 'SET_MESSAGES_LOADING';
export const SET_MESSAGES_ACTIONS = 'SET_MESSAGES_ACTIONS';
export const SET_MESSAGES_DESTINATION_USER = 'SET_MESSAGES_DESTINATION_USER';

export const CLEAR_MESSAGES_DATA = 'CLEAR_MESSAGES_DATA';

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

export const setMessageDestinationUser = (destinationUser) => ({
    type: SET_MESSAGES_DESTINATION_USER,
    payload: destinationUser,
})

export const clearMessageData = () => ({
    type: CLEAR_MESSAGES_DATA,
})