import { fetchDataWithAccessToken } from "@/utils";
import { createUserPostCommentData, createUserPostData, createUserPostReactionData, deleteUserPostData, updateUserPostReactionData } from "@/store/actions/user/userActions";

const handleNewUserPostData = async (data, dispatch) => {
    const { type } = data;

    if (type === "delete_post") {
        const { postId } = data;

        return dispatch(deleteUserPostData(postId));
    }

    if (type === "create_new_post") {
        const { postId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/public/post/post/?post=${postId}`;

        return dispatch(createUserPostData(await fetchDataWithAccessToken(url, "GET")));
    }

    if (type === "create_comment") {
        const { commentId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/comment/?comment=${commentId}`;

        return dispatch(createUserPostCommentData(await fetchDataWithAccessToken(url, "GET")))
    }

    if (type === "create_reaction") {
        const { reactionId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction=${reactionId}`;

        return dispatch(createUserPostReactionData(await fetchDataWithAccessToken(url, "GET")));
    }

    if (type === "update_reaction") {
        const { reactionId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction=${reactionId}`;

        return dispatch(updateUserPostReactionData(await fetchDataWithAccessToken(url, "GET")));
    }
}

export default handleNewUserPostData;