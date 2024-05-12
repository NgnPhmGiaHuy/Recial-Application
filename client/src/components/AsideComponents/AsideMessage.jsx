"use client"

import { useMessageSearch } from "@/hooks";
import { shallowEqual, useSelector } from "react-redux";

import { AsideMessageContent, AsideMessageHeader, SmallSearchInput } from "@/components";

const AsideMessage = ({ messageId }) => {
    const userProps = useSelector((state) => state.user, shallowEqual);

    const { searchQuery, filteredMessages, handleSearchInputChange } = useMessageSearch();

    return (
        <div ref={userProps?.user_messages?.message_list?.ref} className="w-[360px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[360px] bg-white border-r border-solid border-zinc-200 overflow-y-auto no-scrollbar">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                        <AsideMessageHeader/>
                        <div>
                            <SmallSearchInput id="aside-message" name="session-aside-message" placeholder="Search Message" value={searchQuery} onChange={handleSearchInputChange}/>
                        </div>
                        <AsideMessageContent messageId={messageId} userMessages={filteredMessages}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideMessage;