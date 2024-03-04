import Image from "next/image";

import { PageCoverNavigation, PageCoverProfileSubHeader } from "@/components";

const PageCover = ({ userProps }) => {
    return (
        <section className="flex flex-col relative">
            <div className="flex flex-col relative">
                <div className="w-full h-[340px] flex flex-col relative">
                    <div className="top-0 right-0 bottom-0 left-0 absolute">
                        <figure className="w-full h-[340px] rounded-xl overflow-hidden relative">
                            {userProps?.user?.profile_cover_photo_url && (
                                <div className="w-full h-full bg-white relative">
                                    <Image src={userProps?.user?.profile_cover_photo_url} alt={`${userProps?.user?.profile_cover_photo_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            )}
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <div className="-top-1/3 left-[calc(50%-64px)] absolute z-10">
                        <div className="mt-[64px] flex flex-col items-center justify-center relative">
                            <div className="h-0 relative">
                                <div className="w-[128px] h-[128px] border-2 border-solid border-white rounded-xl overflow-hidden relative translate-y-[-100%]">
                                    <Image src={userProps?.user?.profile_picture_url} alt={`${userProps?.user?.profile_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                                <div className="bottom-[-8px] right-[-8px] absolute">
                                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-white bg-lime-500 overflow-hidden cursor-pointer hover:bg-lime-700 relative transition-all">
                                        <i>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                                            </svg>
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[8px] flex flex-col relative">
                            <div className="flex flex-col relative">
                                    <span className="block text-[32px] text-black text-left font-semibold break-words leading-10">
                                        <span className="overflow-hidden text-ellipsis relative">
                                            {userProps?.user?.username || userProps?.user?.firstname + " " + userProps?.user?.lastname}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <PageCoverNavigation/>
                        <PageCoverProfileSubHeader/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageCover;