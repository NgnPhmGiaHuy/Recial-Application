import {PostItem} from "@/components";

const Post = ({postRef, userProps, postListProps}) => {
    return (
        <div ref={postRef}>
            {postListProps?.map((value, index) => (
                <PostItem key={index} userProps={userProps} postProps={value}/>
            ))}
        </div>
    );
};

export default Post;