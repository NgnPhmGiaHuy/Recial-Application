import {PostItem} from "@/components";

const Post = ({postRef, userData, userProps, postListProps}) => {
    return (
        <div ref={postRef}>
            {postListProps?.map((value, index) => (
                <PostItem key={index} userData={userData} userProps={userProps} postProps={value} />
            ))}
        </div>
    );
};

export default Post;