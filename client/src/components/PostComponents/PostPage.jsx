import { PostPageItem } from "@/components";

const PostPage = ({ postRef, pagePostProps }) => {
    return (
        <div ref={postRef}>
            {pagePostProps?.map((value, index) => (
                <PostPageItem key={index} postProps={value}/>
            ))}
        </div>
    );
};

export default PostPage;