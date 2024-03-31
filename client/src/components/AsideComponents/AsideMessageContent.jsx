"use client"

import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { useGetUserDataFetcher } from "@/hooks";
import { MessageContentItem, SmallTypeButton } from "@/components";
import { setUserMessageData } from "@/store/actions/user/userActions";

const AsideMessageContent = ({ action }) => {
    const userProps = useSelector(state => state.user);
    const { isLoading } = useGetUserDataFetcher("message", setUserMessageData);

    const [showTypeNotification, setShowTypeNotification] = useState("inbox");

    const handleTypeClick = useCallback((type) => {
        setShowTypeNotification(type);
    }, []);

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
                {isLoading ? (
                    <div className="w-full h-full py-[16px] flex items-center justify-center relative">
                        <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-lime-700 motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                Loading...
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="mx-[-8px]">
                        <ul className="flex flex-col relative">
                            {userProps?.messages?.map((value, index) => (
                                <MessageContentItem key={index} messageProps={value} action={action}/>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AsideMessageContent;