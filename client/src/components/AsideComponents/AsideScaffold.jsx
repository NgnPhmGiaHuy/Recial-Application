import { asideFriendNavigation, asideVideoNavigation } from "@/constants/AsideConstants";
import { AsideScaffoldFriendList, AsideScaffoldFriendRequest, AsideScaffoldGroup, AsideScaffoldHeader, AsideScaffoldItem } from "@/components";

const AsideScaffold = ({ userProps, aside, action }) => {
    return (
        <div className="my-[16px] ml-[12px] max-w-[360px] min-w-[280px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[360px] bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-y-auto no-scrollbar rounded-md">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                        <AsideScaffoldHeader aside={aside}/>
                        {userProps && (aside?.role?.friends_list || aside?.role?.watch) ? (
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
                        {userProps && (
                            <section>
                                <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                            </section>
                        )}
                        <section>
                            {userProps && aside?.role?.friends_list && (
                                <AsideScaffoldFriendList aside={aside} action={action} userProps={userProps}/>
                            )}
                            {userProps && aside?.role?.friend_request && (
                                <AsideScaffoldFriendRequest aside={aside} action={action} userProps={userProps}/>
                            )}
                            {userProps && aside?.role?.group_feed && (
                                <AsideScaffoldGroup userProps={userProps}/>
                            )}
                            {userProps && aside?.role?.friends && (
                                <ul>
                                    {asideFriendNavigation.map((value, index) => (
                                        <AsideScaffoldItem key={index} itemProps={value}/>
                                    ))}
                                </ul>
                            )}
                            {userProps && aside?.role?.watch && (
                                <ul>
                                    {asideVideoNavigation.map((value, index) => (
                                        <AsideScaffoldItem key={index} itemProps={value}/>
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