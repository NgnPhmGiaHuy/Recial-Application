"use client"

import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useSearchData } from "@/hooks";
import { MessageCreateInputUser } from "@/components";

const MessageCreateInput = ({ participants, setParticipants }) => {
    const userProps  = useSelector((state) => state.user, shallowEqual);

    const messageFilterFunction = (item, searchQuery) => item.user?.profile?.username?.toLowerCase().includes(searchQuery.toLowerCase());
    const { searchQuery, setSearchQuery,  filteredSearchData, handleSearchInputChange } = useSearchData(userProps?.user?.friends, messageFilterFunction);

    const filteredDataWithoutParticipants = filteredSearchData.filter(item =>
        !participants.some(participant => participant.user._id === item.user._id)
    );

    useEffect(() => {
        return setSearchQuery("");
    }, [participants]);

    return (
        <div className="relative">
            <input type="text" name="search-user-friend" id="search-user-friend" value={searchQuery} onChange={handleSearchInputChange} className="w-[80px] m-[8px] px-[2px] pt-[1px] pb-[10px] inline text-black font-normal bg-transparent resize-none outline-none border-none"/>
            { searchQuery && (
                <div className="top-[52px] left-0 absolute z-10">
                    <div className="max-h-[408px] min-h-[60px] w-[328px] mt-[2px] py-[8px] flex flex-col rounded-xl shadow-md bg-white overflow-y-auto relative">
                        <div className="px-[6px] relative">
                            <ul>
                                <li>
                                    { filteredDataWithoutParticipants?.map((value, index) => (
                                        <MessageCreateInputUser key={index} userProps={value} participants={participants} setParticipants={setParticipants}/>
                                    )) }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default MessageCreateInput;