import { getCommentData } from "@/app/api/fetchCommentData";
import { getReactionData } from "@/app/api/fetchReactionData";
import { getUserDataById } from "@/app/api/fetchUserDataById";
import { getFriendRequestData } from "@/app/api/fetchFriendRequestData";
import { getPostDataByUserId, getPostDataByPostId } from "@/app/api/fetchPostDataById";
import { getUserData, getUserFriendRequest, getUserPhotoList } from "@/app/api/fetchUserData";

const updateNestedComments = (comments, destinationId, newComment) => {
    return comments.map(comment => {
        const updatedComment = { ...comment };
        if (comment._id === destinationId) {
            updatedComment.comment_reply = [
                ...comment.comment_reply,
                newComment
            ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (comment.comment_reply.length > 0) {
            updatedComment.comment_reply = updateNestedComments(
                comment.comment_reply,
                destinationId,
                newComment
            );
        }

        return updatedComment;
    });
};

const handleDeletePost = async (data, props, setProps) => {
    try {
        const { userId } = data;

        const newPostData = await getPostDataByUserId({ userId, page: 0 });

        await fetchAndSetUserPhoto();

        return setProps(newPostData);
    } catch (error) {
        return console.error(error);
    }
}

const handleCreateNewPost = async (data, props, setProps) => {
    try {
        const { postId } = data;

        const newPostProps = await getPostDataByPostId(postId);

        if (newPostProps && newPostProps.photo) {
            await fetchAndSetUserPhoto();
        }

        return setProps(prevProps => [newPostProps, ...prevProps]);
    } catch (error) {
        return console.error(error);
    }
};

const handleCreateComment = async (data, props, setProps) => {
    try {
        const { commentId } = data;
        const newCommentProps = await getCommentData(commentId);
        const { destination_id } = newCommentProps.destination;

        const updateComment = (comment) => {
            if (comment._id === destination_id) {
                const updatedReplies = [
                    ...comment.comment_reply,
                    newCommentProps.comment
                ].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                return { ...comment, comment_reply: updatedReplies };
            } else {
                return {
                    ...comment,
                    comment_reply: updateNestedComments(
                        comment.comment_reply,
                        destination_id,
                        newCommentProps.comment
                    )
                };
            }
        };

        if (Array.isArray(props)) {
            const updatedArrayProps = props.map(post => {
                if (post.post._id === destination_id) {
                    const updatedComments = [...post.comment, newCommentProps.comment].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                    return { ...post, comment: updatedComments };
                } else {
                    const updatedComments = post.comment.map(updateComment);

                    return { ...post, comment: updatedComments };
                }
            }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

            return setProps(updatedArrayProps);
        } else {
            const updatedObjectProps = { ...props };
            const { media } = updatedObjectProps;

            if (media) {
                const { _id: mediaId, comment: commentsList } = media;

                if (mediaId === destination_id) {
                    const updatedComments = [newCommentProps.comment, ...commentsList.filter(comment => comment._id !== destination_id)];

                    updatedObjectProps.media.comment = updatedComments;
                } else if (Array.isArray(commentsList)) {
                    const updatedComments = commentsList.map(updateComment);

                    updatedObjectProps.media.comment = updatedComments;
                }

                return setProps(updatedObjectProps);
            }
        }
    } catch (error) {
        return console.error(error);
    }
};

const updatePostReaction = async (data, props, setProps) => {
    try {
        const { reactionId } = data;

        const reactionData = await getReactionData(reactionId);

        const updatePostReaction = props.map(post => {
            if (post.post._id === reactionData.destination.destination_id) {
                post.reaction = post.reaction.map(reaction => {
                    if (reaction._id === reactionData._id) {
                        return reactionData;
                    }
                    return reaction;
                })
            }
            return post;
        });

        return setProps(updatePostReaction);
    } catch (error) {
        return console.error(error);
    }
};

const updateUserProfile = async (data, props, setProps) => {
    try {
        const userData = await getUserData();

        return setProps((prevData) => ({ ...prevData, ...userData }));
    } catch (error) {
        return console.error(error);
    }
};

const updateUserFriendRequest = async (data, props, setProps) => {
    try {
        const { status, friendId, friendRequestId } = data;

        const newFriendProps = await getUserDataById(friendId);

        const updatedFriends = status === "Confirm" ? [newFriendProps, ...props.user.friends] : [...props.user.friends];
        const updatedUser = { ...props.user, friends: updatedFriends };

        const updatedFriendRequests = props.friend_request.filter(request => request._id !== friendRequestId);

        const updatedProps = {
            ...props,
            user: updatedUser,
            friend_request: updatedFriendRequests
        };

        return setProps(updatedProps);
    } catch (error) {
        return console.error(error);
    }
};

const createPostReaction = async (data, props, setProps) => {
    try {
        const { reactionId } = data;

        const reactionData = await getReactionData(reactionId);

        const updatePostReaction = props.map(post => {
            if (post.post._id === reactionData.destination.destination_id) {
                return {
                    ...post,
                    reaction: [reactionData, ...post.reaction],
                };
            }
            return post;
        })

        return setProps(updatePostReaction);
    } catch (error) {
        return console.error(error);
    }
};

const createUserFriendRequest = async (data, props, setProps) => {
    try {
        const { friendRequestId } = data;

        const friendRequestProps = await getFriendRequestData(friendRequestId);

        const updatedProps = {
            ...props,
            friend_request: [
                {
                    _id: friendRequestProps._id,
                    user: friendRequestProps.source,
                    created_at: friendRequestProps.created_at,
                    updated_at: friendRequestProps.updated_at,
                },
                ...props.friend_request,
            ],
        };

        return setProps(updatedProps);
    } catch (error) {
        return console.error(error);
    }
};

const fetchAndSetUserData = async () => {
    localStorage.removeItem("userProps");

    return await getUserData();
};

const fetchAndSetUserPhoto = async () => {
    localStorage.removeItem("userPhotoListProps");

    return await getUserPhotoList();
};

const fetchAndSetUserFriendRequest = async () => {
    localStorage.removeItem("userFriendRequestProps");

    return await getUserFriendRequest();
};

export const handleNewPostData = async (data, props, setProps) => {
    if (data.type === "create_new_post") {
        await handleCreateNewPost(data, props, setProps);
    }

    if (data.type === "delete_post") {
        await handleDeletePost(data, props, setProps);
    }

    if (data.type === "create_comment") {
        await handleCreateComment(data, props, setProps);
    }

    if (data.type === "create_post_reaction") {
        await createPostReaction(data, props, setProps);
    }

    if (data.type === "update_post_reaction") {
        await updatePostReaction(data, props, setProps);
    }
};

export const handleNewUserData = async (data, props, setProps) => {
    const { type } = data;

    if (type === "friend_request_create" || type === "friend_request_update") {
        await fetchAndSetUserFriendRequest();
    }

    if (type === "friend_request_update") {
        await updateUserFriendRequest(data, props, setProps);
    }

    if (type === "friend_request_create") {
        await createUserFriendRequest(data, props, setProps);
    }

    if (type === "user_profile_update") {
        await fetchAndSetUserData();
        await updateUserProfile(data, props, setProps);
    }
};

