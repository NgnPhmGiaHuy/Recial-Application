import { EventScaffoldItemContent, EventScaffoldItemHeader, EventScaffoldItemMember } from "@/components";

const EventScaffoldItem = ({ eventProps }) => {
    return (
        <div id={eventProps?._id}>
            <div className="m-[20px]">
                <div className="px-[60px] py-[40px] flex items-center justify-center bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] rounded-xl overflow-hidden relative">
                    <div className="w-full flex flex-col items-stretch relative">
                        <EventScaffoldItemHeader eventProps={eventProps}/>
                        <div>
                            <EventScaffoldItemContent eventProps={eventProps}/>
                        </div>
                        <EventScaffoldItemMember eventProps={eventProps}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventScaffoldItem;