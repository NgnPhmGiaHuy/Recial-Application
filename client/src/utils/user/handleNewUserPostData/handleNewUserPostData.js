import { getCommentData, getReactionData } from "@/utils";
import { createUserPostCommentData, createUserPostReactionData, updateUserPostReactionData } from "@/store/actions/user/userActions";

const handleNewUserPostData = async (data, dispatch) => {
    const { type } = data;

    if (type === "create_new_post") {
        // await handleCreateNewPost(data, props, setProps);
    }

    if (type === "delete_post") {
        // await handleDeletePost(data, props, setProps);
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