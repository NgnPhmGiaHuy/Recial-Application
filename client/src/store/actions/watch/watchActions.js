export const SET_WATCH_DATA = "SET_WATCH_DATA";
export const SET_WATCH_DATA_LOADING = "SET_WATCH_DATA_LOADING";

export const CREATE_WATCH_SAVED_DATA = "CREATE_WATCH_SAVED_DATA";
export const CREATE_WATCH_REACTION_DATA = "CREATE_WATCH_REACTION_DATA";

export const DELETE_WATCH_SAVED_DATA = "DELETE_WATCH_SAVED_DATA";
export const DELETE_WATCH_REACTION_DATA = "DELETE_WATCH_REACTION_DATA";

export const setWatchData = (data) => ({
    type: SET_WATCH_DATA,
    payload: data,
})

export const setWatchDataLoading = (loading) => ({
    type: SET_WATCH_DATA_LOADING,
    payload: loading,
})

export const createWatchReactionData = (data) => ({
    type: CREATE_WATCH_REACTION_DATA,
    payload: data,
})

export const createWatchSavedData = (data) => ({
    type: CREATE_WATCH_SAVED_DATA,
    payload: data,
})

export const deleteWatchReactionData = (data) => ({
    type: DELETE_WATCH_REACTION_DATA,
    payload: data,
})

export const deleteWatchSavedData = (data) => ({
    type: DELETE_WATCH_SAVED_DATA,
    payload: data,
})