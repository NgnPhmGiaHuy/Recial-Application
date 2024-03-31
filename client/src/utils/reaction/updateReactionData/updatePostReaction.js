const updatePostReaction = (state, action) => {
    const updatePostReaction = state.post_list.posts.map(post => {
        if (post.post._id === action.payload.destination_id) {
            post.reaction = post.reaction.map(reaction => {
                if (reaction._id === action.payload._id) {
                    return action.payload;
                }
                return reaction;
            })
        }
        return post;
    });

    return {
        ...state,
        post_list: {
            ref: state.post_list.ref,
            posts: updatePostReaction,
        },
    }
}

export default updatePostReaction;