import { PostItem } from "@/components";

const Post = ({ postRef, userData, userProps, isCurrentUser, postListProps }) => {
    return (
        <div ref={postRef}>
            {postListProps?.map((value, index) => (
                <PostItem key={index} userData={userData} userProps={userProps} isCurrentUser={isCurrentUser} postProps={value} />
            ))}
        </div>
    );
};

export default Post;