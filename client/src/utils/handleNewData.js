import { fetchCommentData } from "@/app/api/fetchCommentData";
import { fetchUserDataById } from "@/app/api/fetchUserDataById";
import { fetchFriendRequestData } from "@/app/api/fetchFriendRequestData";
import {fetchUserData, fetchUserFriendRequest} from "@/app/api/fetchUserData";
import fetchPostDataById, { fetchPostByPostId } from "@/app/api/fetchPostDataById";

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

export const handleNewPostData = async (data, props, setProps) => {
    const handleCreateNewPost = async () => {
        try {
            const { postId } = data;
            const newPostProps = await fetchPostByPostId({ postId });
            return setProps(prevProps => [newPostProps, ...prevProps]);
        } catch (error) {
            throw error;
        }
    };

    const handleDeletePost = async () => {
        try {
            const { userId } = data;
            const newPostData = await fetchPostDataById({ userId, page: 0 });
            return setProps(newPostData);
        } catch (error) {
            throw error;
        }
    }

    const handleCreateComment = async () => {
        try {
            const { commentId } = data;
            const newCommentProps = await fetchCommentData({ commentId });
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
            console.error("Error fetching comment data:", error);
        }
    };

    if (data.type === "create_new_post") {
        await handleCreateNewPost();
    }

    if (data.type === "delete_post") {
        await handleDeletePost();
    }

    if (data.type === "create_comment") {
        await handleCreateComment();
    }
};

export const handleNewUserData = async (data, props, setProps) => {
    const { type } = data;

    const fetchAndSetUserFriendRequest = async () => {
        localStorage.removeItem("userFriendRequestProps");
         await fetchUserFriendRequest();
    };

    const fetchAndSetUserData = async () => {
        localStorage.removeItem("userProps");
        return await fetchUserData();
    }

    const updateUserProfile = async () => {
        try {
            const userData = await fetchUserData();

            setProps((prevData) => ({ ...prevData, ...userData }));
        } catch (error) {
            throw error;
        }
    }

    const updateFriendRequest = async () => {
        try {
            const { status, friendId, friendRequestId } = data;
            const newFriendProps = await fetchUserDataById(friendId);

            const updatedFriends = status === "Confirm" ? [newFriendProps, ...props.user.friends] : [...props.user.friends];
            const updatedUser = { ...props.user, friends: updatedFriends };

            const updatedFriendRequests = props.friend_request.filter(request => request._id !== friendRequestId);

            const updatedProps = {
                ...props,
                user: updatedUser,
                friend_request: updatedFriendRequests
            };

            setProps(updatedProps);
        } catch (error) {
            throw error;
        }
    };

    const createFriendRequest = async () => {
        try {
            const { friendRequestId } = data;
            const friendRequestProps = await fetchFriendRequestData(friendRequestId);

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

            setProps(updatedProps);
        } catch (error) {
            throw error;
        }
    };

    if (type === "friend_request_create" || type === "friend_request_update") {
        await fetchAndSetUserFriendRequest();
    }

    if (type === "friend_request_update") {
        await updateFriendRequest();
    }

    if (type === "friend_request_create") {
        await createFriendRequest();
    }

    if (type === "user_profile_update") {
        await fetchAndSetUserData();
        await updateUserProfile();
    }
};

