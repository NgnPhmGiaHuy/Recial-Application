"use client"

import React, { useCallback, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useGetUserDataFetcherByPage } from "@/hooks";
import { LoadingComponent, SmallTypeButton } from "@/components";
const MessageContentItem = React.lazy(() => import("@/components/MessageComponents/MessageContentItem"));

const AsideMessageContent = ({ messageId, userMessages, setShowDelete }) => {
    const userProps = useSelector(state => state.user, shallowEqual);

    const [showTypeNotification, setShowTypeNotification] = useState("inbox");

    const handleTypeClick = useCallback((type) => {
        setShowTypeNotification(type);
    }, []);

    useGetUserDataFetcherByPage();

    return (
        <section>
            <div className="mb-[5px] mt-[-8px]">
                <div className="pb-[4px] pt-[20px] px-[8px] flex flex-col relative">
                    <div className="flex flex-row items-center relative">
                        <SmallTypeButton type="inbox" showType={showTypeNotification} onClick={handleTypeClick}/>
                        <SmallTypeButton type="communities" showType={showTypeNotification} onClick={handleTypeClick}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-[-8px]">
                    <ul className="flex flex-col relative">
                        { userMessages?.map((value, index) => (
                            <MessageContentItem key={index} messageProps={value} messageId={messageId} setShowDelete={setShowDelete}/>
                        )) }
                    </ul>
                </div>
                { userProps?.user_messages?.isLoading && (
                    <LoadingComponent/>
                ) }
            </div>
        </section>
    );
};

export default AsideMessageContent;