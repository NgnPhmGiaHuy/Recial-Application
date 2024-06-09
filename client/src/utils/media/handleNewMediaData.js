import { fetchDataWithAccessToken } from "@/utils";
import { createMediaCommentData, createMediaCommentReactionData, createMediaReactionData, createMediaSavedData, deleteMediaReactionData, deleteMediaSavedData, deleteMediaCommentReactionData } from "@/store/actions/media/mediaActions";

const handleNewMediaData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_reaction") {
        const { sourceId } = data;

        return dispatch(createMediaReactionData(sourceId.toString()));
    }

    if (type === "create_comment_reaction") {
        const { sourceId, destinationId } = data;

        return dispatch(createMediaCommentReactionData({ sourceId: sourceId.toString(), destinationId: destinationId.toString() }));
    }

    if (type === "delete_reaction") {
        const { sourceId } = data;

        return dispatch(deleteMediaReactionData(sourceId.toString()))
    }

    if (type === "delete_comment_reaction") {
        const { sourceId, destinationId } = data;

        return dispatch(deleteMediaCommentReactionData({ sourceId: sourceId.toString(), destinationId: destinationId.toString() }))
    }

    if (type === "create_video_saved") {
        const { userId } = data;

        return dispatch(createMediaSavedData(userId.toString()));
    }

    if (type === "delete_video_saved") {
        const { userId } = data;

        return dispatch(deleteMediaSavedData(userId.toString()));
    }

    if (type === "create_media_comment") {
        const { commentId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/comment/?comment=${commentId}`;

        return dispatch(createMediaCommentData(await fetchDataWithAccessToken(url, "GET")))
    }
}

export default handleNewMediaData;