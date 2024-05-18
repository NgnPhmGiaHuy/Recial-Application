import Link from "next/link";
import Image from "next/image";

import { calculateAttachmentStyles } from "@/utils";
import { PostItemContentText } from "@/components";

const PostItemContent = ({ contentRef, props }) => {
    return (
        <div ref={contentRef}>
            { props.postProps?.post?.post_content && (
                <PostItemContentText props={props}/>
            ) }
            <div className="mt-[8px] px-[6px]">
                {(props.postProps?.photo && props.postProps?.photo?.length) ? (
                    <div className="w-full h-0 pt-[75%] block overflow-hidden bg-white relative">
                        {props.postProps?.photo?.length === 1 ? (
                            <Link href={`/post/?user=${props.postProps?.post?.user?._id}&post=${props.postProps?.post?._id}&photo=${props.postProps?.photo[0]._id}`}>
                                <div className="w-full h-full top-0 left-0 block absolute">
                                    <div className="w-full h-full flex overflow-hidden relative">
                                        <Image src={props.postProps?.photo[0]?.photo_url} alt={`${props.postProps?.photo[0]?.photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" loading="lazy" className="w-full h-full object-cover object-center rounded-xl bg-no-repeat"/>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            props.postProps?.photo?.map((value, index) => {
                                const { insetStyles, width, height } = calculateAttachmentStyles(props.postProps?.photo?.length, index);

                                return (
                                    <Link key={index} href={`/post/?user=${props.postProps?.post?.user?._id}&post=${props.postProps?.post?._id}&photo=${value._id}`}>
                                        <div className="p-[4px] block absolute" style={{...insetStyles, width, height}}>
                                            <div className="relative w-full h-full">
                                                <Image src={value?.photo_url} alt={`${value?.photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" loading="lazy" className="object-cover rounded-xl"/>
                                                {props.postProps?.photo?.length > 6 && index === 4 ? (
                                                    <div className="absolute inset-0 rounded-xl bg-gray-900 bg-opacity-60 transition-opacity">
                                                        <div className="w-full h-full flex items-center justify-center relative">
                                                            <span className="block text-[32px] text-white font-semibold break-words leading-10">
                                                                <span className="overflow-hidden relative">
                                                                    +{props.postProps?.photo?.length - index - 1}
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default PostItemContent;