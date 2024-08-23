import Image from "next/image";
import { shallowEqual, useSelector } from "react-redux";

import { PageCoverNavigation, PageCoverProfileSubHeader, PlusIcon } from "@/components";

const PageCover = () => {
    const pageProps = useSelector(state => state.page, shallowEqual);

    return (
        <section className="flex flex-col relative">
            <div className="flex flex-col relative">
                <div className="w-full h-[340px] flex flex-col relative">
                    <div className="top-0 right-0 bottom-0 left-0 absolute">
                        <figure className="w-full h-[340px] rounded-xl overflow-hidden relative">
                            {pageProps?.profile?.page_cover_picture_url && (
                                <div className="w-full h-full bg-white relative">
                                    <Image src={pageProps?.profile?.page_cover_picture_url} alt={`${pageProps?.profile?.page_cover_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            )}
                        </figure>
                    </div>
                </div>
                <div className="flex flex-col relative">
                    <div className="w-full -top-1/3 absolute z-10">
                        <div className="mt-[64px] flex flex-col items-center justify-center relative">
                            <div className="h-0 relative">
                                <div className="w-[128px] h-[128px] border-2 border-solid border-white rounded-xl overflow-hidden relative translate-y-[-100%]">
                                    <Image src={pageProps?.profile?.page_picture_url} alt={`${pageProps?.profile?.page_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                                <div className="bottom-[-8px] right-[-8px] absolute">
                                    <div className="w-[32px] h-[32px] flex items-center justify-center rounded-full text-white bg-lime-500 overflow-hidden cursor-pointer hover:bg-lime-700 relative transition-all">
                                        <PlusIcon fill="none" stroke="currentColor" strokeWidth={2} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[8px] flex flex-col relative">
                            <div className="flex flex-col relative">
                                <span className="max-w-[512px] block text-[32px] text-black text-left font-semibold break-words leading-10">
                                    <span className="block overflow-hidden text-ellipsis whitespace-nowrap break-words relative">
                                        {pageProps?.profile?.page_name}
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