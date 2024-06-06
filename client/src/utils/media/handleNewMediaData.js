import { fetchDataWithAccessToken } from "@/utils";
import { createMediaCommentData, deleteMediaReactionData, createMediaReactionData } from "@/store/actions/media/mediaActions";

const handleNewMediaData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_reaction") {
        const { reactionId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction=${reactionId}`;

        return dispatch(createMediaReactionData(await fetchDataWithAccessToken(url, "GET")));
    }

    if (type === "delete_reaction") {
        const { reactionId } = data;

        return dispatch(deleteMediaReactionData(reactionId))
    }

    if (type === "create_media_comment") {
        const { commentId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/comment/?comment=${commentId}`;

        return dispatch(createMediaCommentData(await fetchDataWithAccessToken(url, "GET")))
    }
}

export default handleNewMediaData;