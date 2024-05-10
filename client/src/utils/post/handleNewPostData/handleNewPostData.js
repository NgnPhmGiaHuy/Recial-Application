import { fetchDataWithAccessToken } from "@/utils";
import { createPostCommentData, createPostReactionData, updatePostReactionData } from "@/store/actions/post/postActions";

const handleNewPostData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_new_post") {
        // await handleCreateNewPost(data, props, setProps);
    }

    if (type === "delete_post") {
        // await handleDeletePost(data, props, setProps);
    }

    if (type === "create_comment") {
        const { commentId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/comment/?comment=${commentId}`;

        return dispatch(createPostCommentData(await fetchDataWithAccessToken(url, "GET")))
    }

    if (type === "create_reaction") {
        const { reactionId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction=${reactionId}`;

        return dispatch(createPostReactionData(await fetchDataWithAccessToken(url, "GET")));
    }

    if (type === "update_reaction") {
        const { reactionId } = data;
        const url = process.env.NEXT_PUBLIC_API_URL + `/api/v1/secure/reaction/?reaction=${reactionId}`;

        return dispatch(updatePostReactionData(await fetchDataWithAccessToken(url, "GET")));
    }
}

export default handleNewPostData;