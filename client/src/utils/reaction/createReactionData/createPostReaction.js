const createPostReaction = (state, action) => {
    const createPostReaction = state.post_list.posts.map(post => {
        if (post.post._id === action.payload.destination_id) {
            return {
                ...post,
                reaction: [action.payload, ...post.reaction],
            };
        }
        return post;
    })

    return {
        ...state,
        post_list: {
            ref: state.post_list.ref,
            posts: createPostReaction
        },
    }
}

export default createPostReaction;