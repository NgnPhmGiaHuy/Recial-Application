import Image from "next/image";

import {calculateAttachmentStyles} from "@/utils";
import Link from "next/link";

const PostItemContent = ({ postProps }) => {
    return (
        <div>
            <div className="px-[16px] pb-[16px] pt-[4px]">
                <div className="flex flex-col relative">
                    <span className="block text-[15px] text-black text-left font-normal break-words leading-5 relative">
                        <div>
                            <span className="overflow-hidden line-clamp-5 break-words">
                                {postProps?.postData?.post_content}
                            </span>
                        </div>
                        <div>
                            <span>
                                {postProps?.postTags?.map((value, index) => (
                                    <a key={index} href="" className="mr-[4px] text-lime-500 hover:text-lime-700 transition-all">
                                        #{value}
                                    </a>
                                ))}
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div className="mt-[8px]">
                <div className="w-full h-0 pt-[75%] block overflow-x-hidden overflow-y-hidden bg-white border-t border-b border-solid border-zinc-200  relative">
                    {postProps?.postAttachments?.length === 1 ? (
                        <Link href={`/photo/?user=${postProps?.postAuthor?._id}&set=${postProps?.postAttachments[0]._id}`}>
                            <div className="w-full h-full top-0 left-0 block absolute">
                                <div className="w-full h-full flex overflow-hidden relative">
                                    <Image src={postProps?.postAttachments[0]?.attachment_url} alt={`${postProps?.postAttachments[0]?.attachment_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="w-full h-full object-contain object-center bg-no-repeat"/>
                                </div>
                            </div>
                        </Link>
                    ) : (
                        postProps?.postAttachments?.map((value, index) => {
                            const {insetStyles, width, height} = calculateAttachmentStyles(postProps?.postAttachments?.length, index);

                            return (
                                <Link key={index} href={`/photo/?user=${postProps?.postAuthor?._id}&set=${value._id}`}>
                                    <div className="block absolute" style={{...insetStyles, width, height}}>
                                        <div className="relative w-full h-full">
                                            <Image src={value?.attachment_url} alt={`${value?.attachment_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover outline outline-black"/>
                                            {postProps?.postAttachments?.length > 6 && index === 4 ? (
                                                <div className="absolute inset-0 bg-gray-900 bg-opacity-60 transition-opacity">
                                                    <div className="w-full h-full flex items-center justify-center relative">
                                                        <span className="block text-[32px] text-white font-semibold break-words leading-10">
                                                            <span className="overflow-hidden relative">
                                                                +{postProps?.postAttachments?.length - index - 1}
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
            </div>
        </div>
    )
}

export default PostItemContent;