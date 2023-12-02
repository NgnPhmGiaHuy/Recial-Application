import {PostItem} from "@/components";

const Post = ({postListProps}) => {
    return (
        <div>
            {postListProps.map((value, index) => (
                <PostItem key={index} postProps={value}/>
            ))}
        </div>
    );
};

export default Post;