import {asideFriendItemList, asideVideoItemList} from "@/constants/AsideConstants";
import {AsideScaffoldItem, FriendListItem, FriendRequestItem} from "@/components";

const AsideScaffold = ({ userProps, navigationProps, asideTitle, asideSubtitle, asideFriendRequest, asideFriendList, asideWatch, action }) => {
    return (
        <div className="my-[16px] ml-[12px] max-w-[360px] min-w-[280px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[360px] bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-y-auto no-scrollbar rounded-md">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                        <section>
                            <div className="min-h-[48px] px-[4px] flex flex-row items-center justify-between relative">
                                {asideSubtitle ? (
                                    <a href="/friends">
                                        <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                                            <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full relative hover:bg-zinc-100 transition-all">
                                                <i>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                                    </svg>
                                                </i>
                                            </div>
                                        </div>
                                    </a>
                                ) : null}
                                <div className="flex flex-row flex-shrink grow items-center justify-between self-stretch relative">
                                    <div className="py-[8px] flex flex-col flex-shrink grow basis-0 items-stretch justify-between relative">
                                        <div className="my-[-5px] flex flex-col">
                                            {asideSubtitle ? (
                                                <a href="">
                                                    <span className="block text-[13px] text-black text-left font-normal break-words leading-4">
                                                        <span className="overflow-x-hidden overflow-y-hidden relative">
                                                            {asideSubtitle}
                                                        </span>
                                                    </span>
                                                </a>
                                            ) : null}
                                            <div className="my-[5px]">
                                                <span className="block text-[24px] text-black text-left font-bold break-words leading-5">
                                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                                        {asideTitle}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {asideSubtitle ? null : (
                                    <div className="my-[6px] mr-[12px] flex flex-col self-center relative">
                                        <div className="w-[32px] h-[32px] flex flex-row items-center justify-center rounded-full cursor-pointer bg-zinc-200 relative hover:bg-zinc-300 transition-all">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                                </svg>
                                            </i>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                        {userProps && asideFriendList || userProps && asideWatch? (
                            <section>
                                <div className="py-[8px] mx-[4px]">
                                    <label htmlFor="session_search" className="w-full min-w-[40px] min-h-[36px] flex items-stretch rounded-full outline-none bg-zinc-100 relative">
                                        <span className="pl-[10px] flex items-center whitespace-nowrap pointer-events-none">
                                            <i>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                                </svg>
                                            </i>
                                        </span>
                                        <input type="text" name="session_search" placeholder="Search friends" className="h-[36px] px-[6px] pt-[7px] pb-[9px] flex flex-shrink grow basis-auto text-[15px] text-black text-left font-normal rounded-r-full outline-none bg-transparent relative"/>
                                    </label>
                                </div>
                            </section>
                        ) : null}
                        {userProps ? (
                            <section>
                                <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                            </section>
                        ) : null}
                        <section>
                            {userProps && asideFriendRequest ? (
                                <>
                                    {userProps?.friend_request?.length ? (
                                        <div className="mb-[5px] mt-[-8px]">
                                            <div className="pb-[4px] pt-[20px] px-[8px] flex flex-col relative">
                                                <div className="flex flex-col grow relative">
                                                    <span className="block text-[17px] text-black text-left font-semibold break-words leading-5 relative">
                                                        <span className="overflow-x-hidden overflow-y-hidden relative">
                                                            {userProps?.friend_request?.length + " " + asideTitle}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className="px-[8px]">
                                        {userProps?.friend_request?.map((value, index) => (
                                            <FriendRequestItem key={index} userProps={value} action={action}/>
                                        ))}
                                    </div>
                                </>
                            ) : userProps && asideFriendList ? (
                                <>
                                    <div className="mb-[5px] mt-[-8px]">
                                        <div className="pb-[4px] pt-[20px] px-[8px] flex flex-col relative">
                                            <div className="flex flex-col grow relative">
                                                <span className="block text-[17px] text-black text-left font-semibold break-words leading-5 relative">
                                                    <span className="overflow-x-hidden overflow-y-hidden relative">
                                                        {userProps?.user?.friends?.length + " " + asideTitle}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[8px]">
                                        {userProps?.user?.friends?.map((value, index) => (
                                            <FriendListItem key={index} userProps={value} action={action}/>
                                        ))}
                                    </div>
                                </>
                            ) : userProps && asideWatch ? (
                                <ul>
                                    {asideVideoItemList.map((value, index) => (
                                        <AsideScaffoldItem key={index} userProps={value} navigationProps={navigationProps}/>
                                    ))}
                                </ul>
                            ) : (
                                <ul>
                                    {asideFriendItemList.map((value, index) => (
                                        <AsideScaffoldItem key={index} userProps={value} navigationProps={navigationProps}/>
                                    ))}
                                </ul>
                            )}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideScaffold;