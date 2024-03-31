import { getCommentData, getReactionData } from "@/utils";
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

        return dispatch(createPostCommentData(await getCommentData(commentId)))
    }

    if (type === "create_reaction") {
        const { reactionId } = data;

        return dispatch(createPostReactionData(await getReactionData(reactionId)));
    }

    if (type === "update_reaction") {
        const { reactionId } = data;

        return dispatch(updatePostReactionData(await getReactionData(reactionId)));
    }
}

export default handleNewPostData;