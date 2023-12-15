import Image from "next/image";

const VideoScaffoldItemInfo = ({videoProps}) => {
    return (
        <div className="w-full p-[16px] flex flex-row grow items-end justify-start self-auto bg-transparent overflow-visible static">
            <div className="mr-[8px] max-h-[100px] flex flex-col grow items-stretch justify-start self-auto bg-transparent overflow-hidden static transition-all duration-300">
                <div className="flex flex-row flex-shrink-0 grow-0 items-center justify-start self-auto bg-transparent overflow-visible static">
                    <a href="">
                        <div className="flex flex-row items-center justify-start bg-transparent overflow-visible static">
                            <div className="mr-[12px]">
                                <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full overflow-hidden relative">
                                    <Image src={videoProps.creator.profile_picture_url} alt={`${videoProps.creator.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                            <div>
                                <span className="block text-[14px] text-white text-left font-semibold whitespace-pre-line break-words relative leading-5">
                                    <span className="overflow-hidden relative">
                                        {videoProps.creator.username}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </a>
                    <div className="flex flex-row flex-shrink-0 grow-0 items-center justify-start self-auto bg-transparent overflow-visible static">
                        <span className="mx-[6px] block">
                            <span className="block text-[14px] text-white text-left font-semibold whitespace-pre-line break-words relative leading-5">
                                •
                            </span>
                        </span>
                        <div className="h-[32px] px-[6px] flex flex-row flex-shrink-0 items-center justify-center basis-auto rounded-md border border-solid border-white overflow-hidden cursor-pointer relative hover:bg-black/50">
                            <span className="block text-[14px] text-white text-left font-semibold whitespace-pre-line break-words relative leading-5">
                                <span>
                                    Follow
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-[16px] flex flex-col items-stretch justify-start bg-transparent overflow-visible relative">
                    <div className="h-[18px] flex overflow-hidden relative">
                        <span className="text-[14px] text-white text-left whitespace-nowrap leading-5">
                            <span className="overflow-hidden relative">
                                {videoProps.video_title} &nbsp;
                            </span>
                            {videoProps.tags.map((value, index) => (
                                <a href="" key={index} className="font-semibold hover:font-bold">#${value} &nbsp;</a>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="mt-[16px] flex flex-row flex-shrink-0 grow-0 items-center justify-start self-auto bg-transparent overflow-visible static">
                    <div className="flex flex-col flex-shrink grow-0 items-stretch justify-start self-auto overflow-hidden static">
                        <a href="">
                            <div className="flex flex-row items-center justify-start bg-transparent overflow-visible static">
                                <div className="w-[12px] h-[12px] mr-[4px] flex flex-shrink-0 grow-0 items-stretch justify-start self-auto bg-transparent text-white overflow-visible static">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                        </svg>
                                    </i>
                                </div>
                                <div className="flex flex-row flex-shrink grow-0 items-stretch justify-start self-auto bg-transparent overflow-hidden">
                                    <div className="flex flex-row flex-shrink-0 items-center translate-x-[0%]">
                                        <span className="block text-[14px] text-white text-left font-normal break-words relative leading-5">
                                            <span className="max-w-full block text-ellipsis whitespace-nowrap overflow-hidden relative">
                                            </span>
                                        </span>
                                    </div>
                                    {/* Using slider to move continue the above div   */}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoScaffoldItemInfo;