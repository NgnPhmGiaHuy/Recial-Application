export const SET_WATCH_DATA = "SET_WATCH_DATA";
export const SET_WATCH_DATA_LOADING = "SET_WATCH_DATA_LOADING";

export const setWatchData = (data) => ({
    type: SET_WATCH_DATA,
    payload: data,
})

export const setWatchDataLoading = (loading) => ({
    type: SET_WATCH_DATA_LOADING,
    payload: loading,
})