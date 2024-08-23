import Link from "next/link";
import Image from "next/image";

import { ImageIcon } from "@/components";

const PostItemHeaderImage = ({ props }) => {
    return (
        <div>
            <div className="mr-[8px] flex flex-col justify-center relative">
                { props.postProps?.post?.group ? (
                    <>
                        <div className="w-[40px] h-[40px] relative">
                            <Link href={`/groups/${props.postProps?.post?.group?._id}`}>
                                <ImageIcon src={props.postProps?.post?.group?.group_picture_url} isBlur={true} borderRadius={6} outlineStyle="solid" />
                            </Link>
                            <Link href={`/${props.postProps?.post?.user?._id}`}>
                                <div className="w-[30px] h-[30px] bottom-[-5px] right-[-5px] rounded-full overflow-hidden outline outline-white absolute">
                                    <Image src={props.postProps?.post?.user?.profile?.profile_picture_url} alt={`${props.postProps?.post?.user?.profile?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </Link>
                        </div>
                    </>
                ) : props.postProps?.page ? (
                    <Link href={`/pages/${props.postProps?.page?._id}`}>
                        <ImageIcon src={props.postProps?.page?.page_picture_url} isBlur={true} />
                    </Link>
                ) : (
                    <Link href={`/${props.postProps?.post?.user?._id}`}>
                        <ImageIcon src={props.postProps?.post?.user?.profile?.profile_picture_url} isBlur={true} />
                    </Link>
                ) }
            </div>
        </div>
    );
};

export default PostItemHeaderImage;