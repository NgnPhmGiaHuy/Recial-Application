import { getCommentData, getPostDataByPostId, getReactionData } from "@/utils";
import { createUserPostCommentData, createUserPostData, createUserPostReactionData, deleteUserPostData, updateUserPostReactionData } from "@/store/actions/user/userActions";

const handleNewUserPostData = async (data, dispatch) => {
    const { type } = data;

    if (type === "delete_post") {
        const { postId } = data;

        return dispatch(deleteUserPostData(postId));
    }

    if (type === "create_new_post") {
        const { postId } = data;

        return dispatch(createUserPostData(await getPostDataByPostId(postId)))
    }

    if (type === "create_comment") {
        const { commentId } = data;

        return dispatch(createUserPostCommentData(await getCommentData(commentId)))
    }

    if (type === "create_reaction") {
        const { reactionId } = data;

        return dispatch(createUserPostReactionData(await getReactionData(reactionId)));
    }

    if (type === "update_reaction") {
        const { reactionId } = data;

        return dispatch(updateUserPostReactionData(await getReactionData(reactionId)));
    }
}

export default handleNewUserPostData;