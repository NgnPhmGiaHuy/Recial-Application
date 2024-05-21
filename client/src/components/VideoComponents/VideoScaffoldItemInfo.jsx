import Image from "next/image";
import Link from "next/link";

const VideoScaffoldItemInfo = ({ videoProps }) => {
    return (
        <div className="flex justify-between gap-[10px]">
            <div className="left-0 absolute">
                <Link href={`/${videoProps?.user?._id}`}>
                    <div
                        className="w-[56px] h-[56px] flex items-center justify-center rounded-full overflow-hidden relative">
                        <Image src={videoProps?.user?.profile?.profile_picture_url}
                               alt={`${videoProps?.user?.profile?.profile_picture_url}-image`} fill={true}
                               sizes="(max-width: 768px) 100vw" className="object-cover"/>
                    </div>
                </Link>
            </div>
            <div>
                <div className="flex flex-row items-center relative">
                    <Link href={`/${videoProps?.user?._id}`} className="group">
                        <span className="block text-[18px] text-left text-black font-extrabold break-words relative leading-6 group-hover:underline">
                            {videoProps?.user?.profile?.username || videoProps?.user?.profile?.firstname + " " + videoProps?.user?.profile?.lastname}
                        </span>
                    </Link>
                </div>
                <div className="w-full flex overflow-hidden relative">
                    <div className="w-full line-clamp-2 text-ellipsis relative">
                        <span className="text-[14px] text-black text-left leading-5">
                            <span className="overflow-hidden relative">
                                {videoProps?.video_title} &nbsp;
                            </span>
                            {videoProps?.tags?.map((value, index) => (
                                <a href="" key={index} className="font-semibold hover:font-bold">#${value} &nbsp;</a>
                            ))}
                        </span>
                    </div>
                </div>
                <div className="mb-[12px]">
                    <a href="">
                        <div className="flex flex-row items-center justify-start bg-transparent overflow-visible static">
                            <div className="w-[12px] h-[12px] mr-[4px] flex flex-shrink-0 grow-0 items-stretch justify-start self-auto bg-transparent text-black overflow-visible static">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"/>
                                    </svg>
                                </i>
                            </div>
                            <div className="flex flex-row flex-shrink grow-0 items-stretch justify-start self-auto bg-transparent overflow-hidden">
                                <div className="flex flex-row flex-shrink-0 items-center translate-x-[0%]">
                                    <span className="block text-[14px] text-black text-left font-normal break-words relative leading-5 hover:underline">
                                        <span className="max-w-full block text-ellipsis whitespace-nowrap overflow-hidden relative">
                                            sonido original - Skime_zero
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <div className="h-[32px] px-[16px] flex flex-row flex-shrink-0 items-center justify-center basis-auto rounded-xl border border-solid border-lime-700 overflow-hidden cursor-pointer relative hover:bg-lime-500/20">
                    <span className="block text-[14px] text-lime-700 text-left font-semibold whitespace-pre-line break-words relative leading-5">
                        Follow
                    </span>
                </div>
            </div>
        </div>
    );
};

export default VideoScaffoldItemInfo;