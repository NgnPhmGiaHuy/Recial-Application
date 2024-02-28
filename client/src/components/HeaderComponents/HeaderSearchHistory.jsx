import { HeaderSearchHistoryItem } from "@/components";

const HeaderSearchHistory = ({ userProps }) => {
    return (
        <div className="shadow-xl bg-white rounded-b-xl">
            <div className="max-h-[calc(500px-80px)] flex flex-col grow p-[8px] scroll-smooth">
                <div className="flex flex-col relative overflow-x-hidden overflow-y-auto  overscroll-y-contain no-scrollbar z-0">
                    <div className="flex flex-col grow relative">
                        <div>
                            <ul className="flex flex-col grow">
                                <li>
                                    <div>
                                        <div className="flex flex-col relative pb-[4px] px-[8px] z-0">
                                            <span className="block break-words text-black font-semibold leading-normal">
                                                <div className="flex flex-row relative items-center justify-between flex-nowrap z-0">
                                                    <div className="flex flex-col flex-shrink grow relative z-0">
                                                        <h2 className="text-[16px] text-black font-semibold leading-5 break-words">
                                                            <span>Recently</span>
                                                        </h2>
                                                    </div>
                                                    <div className="flex flex-col flex-shrink-0 justify-center relative ml-[8px]">
                                                        <div className="flex flex-row flex-shrink-0 flex-nowrap items-center relative z-0">
                                                            <a href="" className="p-[8px] cursor-pointer hover:text-lime-700 hover:bg-zinc-100 rounded-md transition-all duration-300">
                                                                <span className="text-[15px] text-ellipsis text-lime-500 text-center font-normal leading-5 break-words">
                                                                    Edit
                                                                </span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                    <ul>
                                        {userProps?.search?.map((value, index) => (
                                            <HeaderSearchHistoryItem key={index} searchHistoryProps={value}/>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSearchHistory;