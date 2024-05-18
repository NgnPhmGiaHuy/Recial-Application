"use client"

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { handleDeleteConversation } from "@/utils";
import { useClickOutside, useSearchData } from "@/hooks";
import { AsideMessageContent, AsideMessageHeader, MessageDeleteScaffold, SmallSearchInput} from "@/components";

const AsideMessage = ({ messageId, setShowCreateMessage }) => {
    const router = useRouter();
    const deleteRef = useRef(null);

    const [conversationId, setConversationId] = useState(null);
    const [showDelete, setShowDelete] = useState(false);

    const userProps = useSelector((state) => state.user, shallowEqual);

    const messageFilterFunction = (item, searchQuery) => item.conversation_name?.toLowerCase().includes(searchQuery.toLowerCase());
    const { searchQuery, filteredSearchData, handleSearchInputChange } = useSearchData(userProps?.user_messages?.message_list?.messages, messageFilterFunction);

    useClickOutside(deleteRef, showDelete, setShowDelete);

    const handleSetDelete = (conversationId) => {
        setConversationId(conversationId);

        return setShowDelete(prevShowDelete => !prevShowDelete);
    }

    const handleDeleteUserConversation = async () => {
        await handleDeleteConversation(conversationId, () => setShowDelete(prevState => !prevState))

        return router.push("/messages");
    }

    return (
        <>
            <div ref={userProps?.user_messages?.message_list?.ref} className="w-[360px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[360px] bg-white border-r border-solid border-zinc-200 overflow-y-auto no-scrollbar">
                <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                    <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                        <div className="mt-[16px] p-[8px] flex flex-col grow relative">
                            <AsideMessageHeader setShowCreateMessage={setShowCreateMessage}/>
                            <div>
                                <SmallSearchInput id="aside-message" name="session-aside-message" placeholder="Search Message" value={searchQuery} onChange={handleSearchInputChange}/>
                            </div>
                            <AsideMessageContent messageId={messageId} userMessages={filteredSearchData} setShowDelete={handleSetDelete}/>
                        </div>
                    </div>
                </div>
            </div>
            { showDelete &&
                <MessageDeleteScaffold
                    title="Delete chat"
                    subtitle="Once you delete your copy of this conversation, it cannot be undone."
                    width={500}
                    forwardRef={deleteRef}
                    handleShowScaffold={() => setShowDelete(prevState => !prevState)}
                    handleDeleteFunction={handleDeleteUserConversation}
                /> }
        </>
    );
};

export default AsideMessage;