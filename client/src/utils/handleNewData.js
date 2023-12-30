import {fetchCommentData} from "@/app/api/fetchCommentData";
import {fetchPostByPostId} from "@/app/api/fetchPostDataById";
import {fetchUserDataById} from "@/app/api/fetchUserDataById";

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

export const handleNewData = async (data, props, setProps) => {
    if (data.type === "create_new_post") {
        const newPostId = data.postId;

        try {
            const newPostProps = await fetchPostByPostId({ postId: newPostId });
            setProps((prevProps) => [newPostProps, ...prevProps]);
        } catch (error) {
            console.error("Error fetching post data:", error);
        }
    } else if (data.type === "create_comment") {
        const newCommentId = data.commentId;

        try {
            const newCommentProps = await fetchCommentData({ commentId: newCommentId });
            const { destination_id } = newCommentProps.destination;

            if (Array.isArray(props)) {
                const updatedArrayProps = props.map(post => {
                    if (post.post._id === destination_id) {
                        const updatedComments = [...post.comment, newCommentProps.comment].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                        return { ...post, comment: updatedComments };
                    } else {
                        const updatedComments = post.comment.map(comment => {
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
                        }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

                        return { ...post, comment: updatedComments };
                    }
                });

                setProps(updatedArrayProps);
            } else {
                const updatedObjectProps = { ...props };
                const { media } = updatedObjectProps;

                if (media) {
                    const { _id: mediaId, comment: commentsList } = media;

                    if (mediaId === destination_id) {
                        const updatedComments = [newCommentProps.comment, ...commentsList.filter(comment => comment._id !== destination_id)];
                        updatedObjectProps.media.comment = updatedComments;
                    } else if (Array.isArray(commentsList)) {
                        const updatedComments = commentsList.map(comment => {
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
                        });

                        updatedObjectProps.media.comment = updatedComments;
                    }

                    setProps(updatedObjectProps);
                }
            }
        } catch (error) {
            console.error("Error fetching comment data:", error);
        }
    }
};

export const handeNewUserData = async (data, props, setProps) => {
    if (data.type === "friend_request_update") {
        const status = data.status;
        const friendId = data.friendId;
        const friendRequestId = data.friendRequestId;

        try {
            const newFriendProps = await fetchUserDataById(friendId);

            const updatedFriends = status === "Confirm" ? [newFriendProps, ...props.user.friends] : [...props.user.friends];
            const updatedUser = { ...props.user, friends: updatedFriends };

            const updatedFriendRequests = props.friend_request.filter(
                request => request._id !== friendRequestId
            );

            const updatedProps = {
                ...props,
                user: updatedUser,
                friend_request: updatedFriendRequests
            };

            setProps(updatedProps);
        } catch (error) {
            console.error("Error fetching friend request data:", error);
        }
    }
}
