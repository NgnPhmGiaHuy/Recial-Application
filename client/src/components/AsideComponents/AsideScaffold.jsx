import { AsideScaffoldFriendList, AsideScaffoldFriendRequest, AsideScaffoldGroup, AsideScaffoldHeader, AsideScaffoldItem, SmallSearchInput } from "@/components";

import ASIDE_VIDEO from "@/constants/AsideConstants/AsideVideoConstants";
import ASIDE_FRIEND from "@/constants/AsideConstants/AsideFriendConstants";

const AsideScaffold = ({ aside, action }) => {
    return (
        <div className="my-[16px] ml-[12px] max-w-[360px] min-w-[320px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[360px] bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] overflow-y-auto no-scrollbar rounded-xl">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                        <AsideScaffoldHeader aside={aside}/>
                        { (aside?.role?.friends_list || aside?.role?.watch) && (
                            <section>
                                <div className="mx-[4px]">
                                    <SmallSearchInput id="session-search" name="session-search" placeholder="Search friends"/>
                                </div>
                            </section>
                        ) }
                        <section>
                            <div className="my-[12px] mx-[8px] border-b border-solid border-zinc-200"></div>
                        </section>
                        <section>
                            { aside?.role?.group_feed && (
                                <AsideScaffoldGroup/>
                            ) }
                            { aside?.role?.friends && (
                                <ul>
                                    { ASIDE_FRIEND.map((value, index) => (
                                        <AsideScaffoldItem key={index} itemProps={value}/>
                                    )) }
                                </ul>
                            ) }
                            { aside?.role?.friends_list && (
                                <AsideScaffoldFriendList aside={aside} action={action}/>
                            ) }
                            { aside?.role?.friend_request && (
                                <AsideScaffoldFriendRequest aside={aside} action={action}/>
                            ) }
                            { aside?.role?.watch && (
                                <ul>
                                    {ASIDE_VIDEO.map((value, index) => (
                                        <AsideScaffoldItem key={index} itemProps={value}/>
                                    ))}
                                </ul>
                            ) }
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideScaffold;