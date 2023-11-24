import React from 'react';
import Image from "next/image";

const HeaderSearchHistoryItem = ({searchHistoryData}) => {
    return (
        <li className="w-full">
            <div className="flex items-center overflow-x-hidden overflow-y-hidden p-[8px] m-0 rounded-[8px] relative hover:bg-zinc-100">
                <a href="" className="w-full">
                    <div className="flex flex-row items-center relative m-[-6px] z-0">
                        {searchHistoryData.search_image ? (
                            <div className="flex flex-col flex-shrink-0 p-[6px] z-0">
                                <div className="w-[36px] h-[36px] rounded-full relative align-bottom z-0 overflow-hidden">
                                    <Image src={searchHistoryData.search_image} alt={`${searchHistoryData.search_image}-image`} fill className="object-cover"/>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col flex-shrink-0 p-[6px] z-0">
                                <div className="w-[36px] h-[36px] rounded-full relative align-bottom z-0 overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center bg-zinc-100 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex flex-col flex-shrink grow relative p-[6px] z-0">
                            <div className="flex flex-col my-[-5px]">
                                <div className="">
                                    <span className="block text-[15px] text-left font-medium leading-5 break-words">
                                        <span className="overflow-x-hidden overflow-y-hidden relative">
                                            {searchHistoryData.search_query}
                                        </span>
                                    </span>
                                </div>
                                {searchHistoryData.search_image && searchHistoryData.user_news? (
                                    <div className="mt-[5px]">
                                        <span className="block text-[13px] text-left text-gray-500 font-normal leading-4 break-words">
                                            <span className="overflow-x-hidden overflow-y-hidden flex flex-row items-center text-ellipsis whitespace-nowrap relative">
                                                <span className="w-[8px] h-[8px] flex items-center justify-center rounded-full mr-[8px] bg-lime-500"></span>
                                                <span>
                                                    {searchHistoryData.user_news_number === 1 ? `${searchHistoryData.user_news_number} new information` : `${searchHistoryData.searchHistoryNewsNumber} news information`}
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                        <div className="flex flex-col flex-shrink-0 relative p-[5px] rounded-full z-30 cursor-pointer transition-all hover:bg-zinc-200">
                            <div>
                                <div className="w-[20px] h-[20px]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    )
}

export default HeaderSearchHistoryItem;