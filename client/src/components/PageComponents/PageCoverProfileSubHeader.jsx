import Link from "next/link";
import { shallowEqual, useSelector } from "react-redux";

import { handleFormatNumber } from "@/utils";

const PageCoverProfileSubHeader = () => {
    const pageProps = useSelector(state => state.page, shallowEqual);

    return (
        <div className="w-full mt-[8px] flex flex-row items-center justify-start relative">
            <div className="w-full flex flex-row items-center justify-between relative">
                <div className="ml-[4px] flex flex-row items-center justify-center gap-2 relative">
                    <div className="flex flex-col items-start justify-start relative">
                        <div>
                            <span className="block text-[24px] text-black text-left font-bold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    {handleFormatNumber(pageProps?.follow?.length)}
                                </span>
                            </span>
                        </div>
                        <div>
                            <span className="block text-[12px] text-zinc-500 text-left font-normal break-words uppercase relative leading-4">
                                <span className="overflow-hidden relative">
                                    Followers
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 relative">
                    <div className="flex flex-col items-center bg-white rounded-xl border border-solid border-zinc-200 hover:border-black hover:text-black transition-all">
                        <Link href="" replace={true}>
                            <div className="px-[16px] py-[8px] flex flex-row items-center justify-between gap-1 relative transition-all">
                                <div className="w-[16px] h-[16px] flex items-center justify-center text-black overflow-hidden relative">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </i>
                                </div>
                                <div className="flex flex-row items-center relative">
                                    <span className="text-[16px] text-black text-left font-normal break-words leading-4 relative">
                                        <span className="overflow-hidden relative">
                                            History
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageCoverProfileSubHeader;