"use client"

import { useState } from "react";

import { useGetUserDataFetcher } from "@/hooks";
import { setUserFriendData } from "@/store/actions/user/userActions";
import { MessageCreateInput, MessageCreateUser, MessageScaffoldContentFooter, } from "@/components";

const MessageCreate = () => {
    const [participants, setParticipants] = useState([]);

    const handleRemoveSelectedParticipant = (index) => {
        return setParticipants((prevState) => {
            const updatedImages = [...prevState.slice(0, index), ...prevState.slice(index + 1)];
            return updatedImages;
        });
    }

    useGetUserDataFetcher("friend", setUserFriendData);

    return (
        <div>
            <div className="flex flex-col grow basis-0 bg-white relative">
                <div className="px-[12px] pt-[8px] flex flex-shrink-0 border-b border-solid border-gray-200">
                    <div className="flex">
                        <div className="mt-[8px] mr-[4px] absolute">
                            <span className="text-[15px] text-black font-normal break-words relative leading-5">
                                To:
                            </span>
                        </div>
                        <div className="h-full flex flex-col relative">
                            <div className="pl-[36px] pr-[8px] block relative">
                                <div className="w-full flex flex-row flex-wrap items-center relative">
                                    {participants?.map((value, index) => (
                                        <MessageCreateUser key={index} index={index} userProps={value} handleRemoveSelectedParticipant={handleRemoveSelectedParticipant}/>
                                    ))}
                                    <MessageCreateInput participants={participants} setParticipants={setParticipants}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { participants.length > 0 && (
                    <div className="min-h-[calc(100vh-56px-60px)] flex flex-col flex-shrink grow basis-full bg-white overflow-hidden relative">
                        <div className="max-h-[calc(100vh-56px-60px)] flex flex-row flex-shrink flex-nowrap grow items-end justify-between relative">
                            <div className="h-full flex flex-col grow basis-full overflow-hidden relative">
                                <MessageScaffoldContentFooter participants={participants}/>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default MessageCreate;