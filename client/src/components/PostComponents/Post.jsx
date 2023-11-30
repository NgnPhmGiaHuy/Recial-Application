import {PostItem} from "@/components";

const Post = ({postListData}) => {
    return (
        <div>
            {postListData.map((value, index) => (
                <PostItem key={index} postProps={value}/>
            ))}
        </div>
    );
};

export default Post;