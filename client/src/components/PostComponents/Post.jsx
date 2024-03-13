import { PostItem } from "@/components";

const Post = ({ postRef, isCurrentUser, postListProps }) => {
    return (
        <div ref={postRef}>
            {postListProps?.map((value, index) => (
                <PostItem key={index} isCurrentUser={isCurrentUser} postProps={value} />
            ))}
        </div>
    );
};

export default Post;