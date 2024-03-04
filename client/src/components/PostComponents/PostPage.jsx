import { PostPageItem } from "@/components";

const PostPage = ({ postRef, userData, userProps, isCurrentUser, postListProps }) => {
    return (
        <div ref={postRef}>
            {postListProps?.map((value, index) => (
                <PostPageItem key={index} userData={userData} userProps={userProps} isCurrentUser={isCurrentUser} postProps={value} />
            ))}
        </div>
    );
};

export default PostPage;