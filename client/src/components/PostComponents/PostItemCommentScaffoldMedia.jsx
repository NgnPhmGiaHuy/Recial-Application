import { ImageWithMetadata } from "@/components";

const PostItemCommentScaffoldMedia = ({ postProps }) => {
    return (
        <div>
            <div className="ml-[44px] pr-[16px] pt-[12px] pb-[12px]">
                <div className="max-w-[300px] max-h-[300px] overflow-hidden relative">
                    <ImageWithMetadata src={postProps?.comment_content_url?.photo_url} alt={`${postProps?.comment_content_url?.photo_url}-image`} fill={true} parentWidth={300} parentHeight={300} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default PostItemCommentScaffoldMedia;