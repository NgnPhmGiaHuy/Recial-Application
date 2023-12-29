import Link from "next/link";
import Image from "next/image";

import { useOverflowText } from "@/hooks";
import { calculateAttachmentStyles } from "@/utils";

const PostItemContent = ({ postProps }) => {
    const {textRef, showMoreText, isOverflowing, handleShowMoreText} = useOverflowText();

    return (
        <div>
            <div className="px-[16px] pb-[16px] pt-[4px]">
                <div className="flex flex-col relative">
                    <span className="block text-[15px] text-black text-left font-normal break-words leading-5 relative">
                        <div>
                            <span ref={textRef} className={`${showMoreText ? "" : "line-clamp-5"} webkit-box`}>
                                {postProps?.post?.post_content}
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
                        {!showMoreText && isOverflowing ? (
                            <span
                                className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all" onClick={handleShowMoreText}>
                                    <span className="overflow-hidden relative">
                                        See more
                                    </span>
                                </span>
                        ) : showMoreText && isOverflowing ? (
                            <span className="text-[16px] text-zinc-500 font-semibold break-words cursor-pointer relative leading-5 hover:underline transition-all"
                                  onClick={handleShowMoreText}>
                                    <span className="overflow-hidden relative">
                                        See less
                                    </span>
                                </span>
                        ) : null}
                    </span>
                </div>
            </div>
            <div className="mt-[8px]">
                {postProps?.photo && postProps?.photo?.length ? (
                    <div className="w-full h-0 pt-[75%] block overflow-x-hidden overflow-y-hidden bg-white border-t border-b border-solid border-zinc-200  relative">
                        {postProps?.photo?.length === 1 ? (
                            <Link href={`/post/?user=${postProps?.user?._id}&post=${postProps?.post?._id}&photo=${postProps?.photo[0]._id}`}>
                                <div className="w-full h-full top-0 left-0 block absolute">
                                    <div className="w-full h-full flex overflow-hidden relative">
                                        <Image src={postProps?.photo[0]?.photo_url} alt={`${postProps?.photo[0]?.photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="w-full h-full object-contain object-center bg-no-repeat"/>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            postProps?.photo?.map((value, index) => {
                                const {insetStyles, width, height} = calculateAttachmentStyles(postProps?.photo?.length, index);

                                return (
                                    <Link key={index} href={`/post/?user=${postProps?.user?._id}&post=${postProps?.post?._id}&photo=${postProps?.photo[0]._id}`}>
                                        <div className="block absolute" style={{...insetStyles, width, height}}>
                                            <div className="relative w-full h-full">
                                                <Image src={value?.photo_url} alt={`${value?.photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover outline outline-black"/>
                                                {postProps?.photo?.length > 6 && index === 4 ? (
                                                    <div className="absolute inset-0 bg-gray-900 bg-opacity-60 transition-opacity">
                                                        <div className="w-full h-full flex items-center justify-center relative">
                                                            <span className="block text-[32px] text-white font-semibold break-words leading-10">
                                                                <span className="overflow-hidden relative">
                                                                    +{postProps?.photo?.length - index - 1}
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