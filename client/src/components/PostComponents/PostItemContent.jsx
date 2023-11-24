import Image from "next/image";

const PostItemContent = ({postData}) => {
    return (
        <div>
            <div className="px-[16px] pb-[16px] pt-[4px]">
                <div className="flex flex-col relative">
                    <span className="block text-[15px] text-black text-left font-normal break-words leading-5 relative">
                        <div>
                            {postData.postContent}
                        </div>
                        <div>
                            <span>
                                {postData.postTags.map((value, index) => (
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
                <a href="" className="relative">
                    <div className="w-full h-0 pt-[75%] block overflow-x-hidden overflow-y-hidden bg-white border-t border-b border-solid border-zinc-200  relative">
                        <div className="w-full h-full top-0 left-0 block absolute">
                            <div className="w-full h-full flex overflow-hidden relative">
                                <Image src={postData.postAttachments[0].picture} alt={`${postData.postAttachments[0].picture}-image`} fill className="w-full h-full object-contain object-center bg-no-repeat"/>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default PostItemContent;