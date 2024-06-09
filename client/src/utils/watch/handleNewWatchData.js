import { createWatchReactionData, createWatchSavedData, deleteWatchReactionData, deleteWatchSavedData } from "@/store/actions/watch/watchActions";

const handlerNewWatchData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_reaction") {
        const { sourceId } = data;
        const { reactionId } = data;
        const { destinationId } = data;

        return dispatch(createWatchReactionData({ sourceId, reactionId, destinationId }));
    }

    if (type === "delete_reaction") {
        const { sourceId } = data;
        const { reactionId } = data;
        const { destinationId } = data;

        return dispatch(deleteWatchReactionData({ sourceId, reactionId, destinationId }))
    }

    if (type === "create_video_saved") {
        const { savedId } = data;
        const { userId } = data;
        const { videoId } = data;

        return dispatch(createWatchSavedData({ userId, savedId, videoId }));
    }

    if (type === "delete_video_saved") {
        const { savedId } = data;
        const { userId } = data;
        const { videoId } = data;

        return dispatch(deleteWatchSavedData({ userId, savedId, videoId }));
    }
}

export default handlerNewWatchData;