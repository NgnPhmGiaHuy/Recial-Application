import { PostItemHeaderControl, PostItemHeaderDetail, PostItemHeaderImage } from "@/components";

const PostItemHeader = ({ headerRef, props, handleState }) => {
    return (
        <div ref={headerRef} className="mb-[12px] px-[16px] pt-[12px] flex flex-row items-start">
            <div className="flex flex-row flex-shrink grow items-center relative">
                <PostItemHeaderImage props={props} />
                <div className="max-w-[600px] my-[-5px] flex flex-col grow">
                    <PostItemHeaderDetail props={props} />
                </div>
            </div>
            <PostItemHeaderControl handleState={handleState} />
        </div>
    )
}

export default PostItemHeader;