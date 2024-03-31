import { updateComment } from "@/utils";

const createPostComment = (state, action) => {
    if (Array.isArray(state.post_list.posts)) {
        const updatedArrayProps = state.post_list.posts.map(post => {
            if (post.post._id === action.payload.destination.destination_id) {
                const updatedComments = [...post.comment, action.payload.comment].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                return { ...post, comment: updatedComments };
            } else {
                const updatedComments = post.comment.map(comment => updateComment(comment, action));

                return { ...post, comment: updatedComments };
            }
        }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

        return {
            ...state,
            post_list: {
                ref: state.post_list.ref,
                posts: updatedArrayProps,
            },
        };
    } else {
        const updatedObjectProps = { ...state.post_list.posts };
        const { media } = updatedObjectProps;

        if (media) {
            const { _id: mediaId, comment: commentsList } = media;

            if (mediaId === action.payload.destination.destination_id) {
                const updatedComments = [action.payload.comment, ...commentsList.filter(comment => comment._id !== action.payload.destination.destination_id)];

                updatedObjectProps.media.comment = updatedComments;
            } else if (Array.isArray(commentsList)) {
                const updatedComments = commentsList.map(comment => updateComment(comment, action));

                updatedObjectProps.media.comment = updatedComments;
            }

            return {
                ...state,
                post_list: {
                    ref: state.post_list.ref,
                    posts: updatedObjectProps
                },
            };
        }
    }
}

export default createPostComment;