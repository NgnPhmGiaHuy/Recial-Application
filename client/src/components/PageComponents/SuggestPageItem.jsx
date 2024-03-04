import Image from "next/image";

const SuggestPageItem = ({ pageProps }) => {
    return (
        <div className="w-full h-full p-[12px] relative">
            <div className="w-full flex flex-col justify-between relative">
                <a href={`/pages/${pageProps?._id}`} className="w-full h-[200px] rounded-lg border border-solid border-zinc-300 overflow-hidden group relative">
                    <Image src={pageProps?.page_cover_picture_url} alt={`${pageProps?.page_cover_picture_url}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="p-[4px] rounded-xl object-cover"/>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity"></div>
                </a>
                <div className="mt-[12px] flex flex-col items-center justify-between relative">
                    <div className="w-full h-full flex flex-col flex-shrink grow basis-auto relative">
                        <div className="flex flex-col justify-center cursor-pointer">
                            <a href="">
                                <div className="h-[36px] px-[12px] flex flex-row flex-nowrap items-center justify-center rounded-xl bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                    <div className="mx-[3px] flex flex-shrink-0 items-center justify-center relative">
                                        <span className="block text-[15px] text-black font-semibold break-words relative leading-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="mx-[3px] flex flex-shrink items-center justify-center relative">
                                        <span className="block text-[15px] text-black font-semibold break-words relative leading-5">
                                            <span className="overflow-hidden text-ellipsis line-clamp-1 relative">
                                                {pageProps?.page_name}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuggestPageItem;