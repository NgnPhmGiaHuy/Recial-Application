import { shallowEqual, useSelector } from "react-redux";

import { EventScaffoldItem } from "@/components";

const EventScaffold = () => {
    const eventListProps = useSelector(state => state.eventList, shallowEqual);

    return (
        <div className="flex flex-row items-center justify-between relative">
            <div className="flex flex-col items-center relative">
                { eventListProps?.event?.map((value, index) => (
                    <EventScaffoldItem key={index} eventProps={value}/>
                )) }
            </div>
        </div>
    );
};

export default EventScaffold;