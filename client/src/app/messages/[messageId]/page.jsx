"use client"

import { useDispatch } from "react-redux";

import { useGetUserProfileById } from "@/hooks/useUser/useUserIdData";
import { setMessageDestinationUser } from "@/store/actions/message/messageAction";
import { useGetMessageDataByUserId, useSetMessageId, useUserData, useWithAuth } from "@/hooks";
import { AsideMessage, Header, LoadingPageComponent, MessageNoChatSelected, MessageScaffold } from "@/components";

const MessageIdPage = ({ params }) => {
    const dispatch = useDispatch();

    const { userProps } = useUserData();
    const { messageId } = useSetMessageId(params);

    useGetMessageDataByUserId(params.messageId);
    dispatch(setMessageDestinationUser(useGetUserProfileById(params.messageId).data));

    return (
        <>
            { userProps ? (
                <div>
                    <Header disableMessage={true}/>
                    <div className="flex flex-col relative">
                        <div className="flex flex-col relative z-0 ">
                            <div className="top-[56px] min-h-[calc(100vh-56px)] flex flex-col relative">
                                <div className="min-h-[inherit] mb-[calc(-100vh-56px)] flex flex-col flex-shrink-0 items-stretch justify-start relative">
                                    <div className="min-w-[900px] min-h-[inherit] flex flex-row flex-nowrap flex-shrink-0 grow items-stretch justify-start relative">
                                        <div className="w-[360px] min-h-[inherit] flex flex-col flex-nowrap flex-shrink-0 items-stretch justify-center relative">
                                            <div className="min-h-[inherit] flex flex-row flex-shrink flex-nowrap grow items-start justify-between basis-0 relative">
                                                <AsideMessage messageId={messageId} />
                                            </div>
                                        </div>
                                        <div className="w-full min-h-[inherit] flex flex-col flex-shrink grow basis-0 relative">
                                            { messageId ? (
                                                <div>
                                                    <MessageScaffold/>
                                                </div>
                                            ) : (
                                                <MessageNoChatSelected/>
                                            ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <LoadingPageComponent/>
            ) }
        </>
    );
};

export default useWithAuth(MessageIdPage);