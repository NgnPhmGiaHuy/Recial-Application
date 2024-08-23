import Link from "next/link";

import { CalendarDaysIcon } from "@/components";
import { formatCurrentWeekday, formatTime12Hour } from "@/utils";

const EventAsideItem = ({ eventProps, eventItemId, handleSetEventItemId }) => {
    const active = eventItemId === eventProps?._id;

    return (
        <div>
            <Link href={`#${eventProps?._id}`} onClick={() => handleSetEventItemId(eventProps?._id)}>
                <div className={`${active ? "outline-lime-700 bg-lime-100" : "outline-none"} m-[2px] mb-[12px] p-[20px] flex flex-row items-center justify-between outline outline-solid rounded-xl overflow-hidden relative`}>
                    <div className="flex flex-row items-center justify-center gap-1 relative">
                        <div className={`${active ? "text-lime-700" : ""} w-[20px] h-[20px] flex items-center justify-center relative`}>
                            <CalendarDaysIcon fill="none" stroke="currentColor" width={20} height={20} />
                        </div>
                        <div>
                            <span className="block text-[16px] text-black text-left font-normal break-words relative leading-5">
                                <span className="overflow-hidden line-clamp-1 relative">
                                    { formatCurrentWeekday(eventProps?.event_start_datetime) }
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row flex-shrink-0 items-center justify-center">
                        <span className="block text-[12px] text-zinc-500 text-left font-normal break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                at { formatTime12Hour(eventProps?.event_start_datetime) }
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default EventAsideItem;