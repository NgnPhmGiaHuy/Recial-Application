import { formatLongDate } from "@/utils";
import { MapPinIcon } from "@/components";

const EventScaffoldItemContent = ({ eventProps }) => {
    return (
        <div>
            <div className="mt-[40px] mb-[12px] flex flex-row items-center relative">
                <div className="flex flex-row items-center justify-start gap-1 relative">
                    <div className="w-[20px] h-[20px] flex items-center justify-center relative">
                        <MapPinIcon fill="none" stoke="currentColor" width={20} height={20} />
                    </div>
                    <div className="flex flex-col items-center justify-center relative">
                        <div className="block text-[16px] text-zinc-500 font-normal break-words relative leading-5">
                            <div className="flex flex-row items-center justify-between gap-2 relative">
                                <span className="max-w-[320px] text-ellipsis whitespace-nowrap overflow-hidden relative">
                                    { eventProps?.location }
                                </span>
                                <span className="overflow-hidden relative"> | </span>
                                <span className="overflow-hidden relative">
                                    { formatLongDate(eventProps?.event_start_datetime) }
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start relative">
                <div>
                    <span className="text-[16px] text-zinc-700 text-left font-normal break-words relative leading-6">
                        <span className="overflow-hidden line-clamp-6 relative">
                            { eventProps?.event_description }
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default EventScaffoldItemContent;