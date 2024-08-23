"use client"

import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { EventAsideItem } from "@/components";

const EventAside = () => {
    const eventListProps = useSelector(state => state.eventList, shallowEqual);

    const initialEventId = eventListProps && eventListProps.event && eventListProps.event.length > 0 ? eventListProps.event[0]._id : null;

    const [eventItemId, setEventItemId] = useState(initialEventId);

    const handleSetEventItemId = (eventId) => {
        return setEventItemId(eventId);
    }

    return (
        <div className="my-[16px] ml-[12px] w-[260px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[260px] bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-xl overflow-y-auto no-scrollbar">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="p-[8px] flex flex-col min-h-0 flex-shrink grow basis-full relative">
                        <div className="flex flex-col grow overflow-x-hidden overflow-y-auto overscroll-y-contain no-scrollbar relative">
                            { eventListProps?.event?.map((value, index) => (
                                <EventAsideItem key={index} eventProps={value} eventItemId={eventItemId} handleSetEventItemId={handleSetEventItemId}/>
                            )) }
                        </div>
                        <div className="py-[16px] relative">
                            <div className="w-full pt-[16px] flex items-center justify-between relative">
                                <div className="w-full inline-flex flex-col justify-center relative">
                                    <div className="w-full h-[36px] p-[20px] flex items-center justify-center rounded-xl cursor-pointer text-zinc-500 border border-dashed border-zinc-500 hover:border-none hover:bg-lime-500 hover:text-white relative transition-all duration-150">
                                        <span className="block text-[15px] font-normal break-words leading-5">
                                            New Event
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventAside;