import { EventAsideActivityItem } from "@/components";

const EventAsideActivity = ({ userProps }) => {
    return (
        <div className="my-[16px] mr-[12px] w-[300px] max-h-0 min-h-[inherit] top-[56px] fixed shrink-[9999] basis-[300] bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-xl overflow-y-auto no-scrollbar">
            <div className="max-h-[inherit] min-h-[inherit] flex flex-col relative">
                <div className="flex flex-col min-h-0 flex-shrink grow basis-full relative">
                    <div className="flex flex-col grow relative">
                        <div className="flex flex-col flex-shrink-0 flex-nowrap">
                            <div className="w-full h-[60px] px-[12px] flex items-center justify-start relative">
                                <div className="flex flex-col items-center justify-start relative">
                                    <div className="before:w-[3px] before:h-full before:left-[-12px] before:rounded-md before:bg-lime-500 before:absolute">
                                        <span className="block text-[24px] text-black text-left font-semibold break-words relative leading-5">
                                            <span className="overflow-hidden relative">
                                                Activity
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[calc(100%-60px)] px-[12px] pb-[30px] flex flex-col overflow-y-auto relative">
                                <ul>
                                    <li>
                                        <EventAsideActivityItem userProps={userProps}/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventAsideActivity;