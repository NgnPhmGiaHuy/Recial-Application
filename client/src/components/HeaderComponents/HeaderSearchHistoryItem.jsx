import Link from "next/link";
import Image from "next/image";

import { ClockIcon, XMarkIcon } from "@/components";

const HeaderSearchHistoryItem = ({searchHistoryProps}) => {
    return (
        <li className="w-full mb-[4px]">
            <div className="flex items-center overflow-hidden p-[8px] m-0 rounded-[8px] relative hover:bg-zinc-100">
                <Link href="" className="w-full">
                    <div className="flex flex-row items-center relative m-[-6px] z-0">
                        { searchHistoryProps?.search_image ? (
                            <div className="flex flex-col flex-shrink-0 p-[6px] z-0">
                                <div className="w-[36px] h-[36px] rounded-full relative align-bottom z-0 overflow-hidden">
                                    <Image src={searchHistoryProps?.search_image} alt={`${searchHistoryProps?.search_image}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover"/>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col flex-shrink-0 p-[6px] z-0">
                                <div className="w-[36px] h-[36px] rounded-full relative align-bottom z-0 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-zinc-100 rounded-full">
                                        <ClockIcon fill="none" stroke="currentColor" />
                                    </div>
                                </div>
                            </div>
                        ) }
                        <div className="flex flex-col flex-shrink grow relative p-[6px] z-0">
                            <div className="flex flex-col my-[-5px]">
                                <div>
                                    <span className="block text-[15px] text-left font-medium leading-5 break-words">
                                        <span className="line-clamp-2 overflow-hidden relative">
                                            { searchHistoryProps?.search_query }
                                        </span>
                                    </span>
                                </div>
                                { (searchHistoryProps?.search_image && searchHistoryProps?.user_news) && (
                                    <div className="mt-[5px]">
                                        <span className="block text-[13px] text-left text-gray-500 font-normal leading-4 break-words">
                                            <span className="overflow-hidden flex flex-row items-center text-ellipsis whitespace-nowrap relative">
                                                <span className="w-[8px] h-[8px] flex items-center justify-center rounded-full mr-[8px] bg-lime-500"></span>
                                                <span>
                                                    {searchHistoryProps?.user_news_number === 1 ? `${searchHistoryProps?.user_news_number} new information` : `${searchHistoryProps?.searchHistoryNewsNumber} news information`}
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                ) }
                            </div>
                        </div>
                        <div className="flex flex-col flex-shrink-0 relative p-[5px] rounded-full z-30 cursor-pointer transition-all hover:bg-zinc-200">
                            <div>
                                <div className="w-[20px] h-[20px]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <XMarkIcon fill="none" stroke="currentColor" width={16} height={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    )
}

export default HeaderSearchHistoryItem;