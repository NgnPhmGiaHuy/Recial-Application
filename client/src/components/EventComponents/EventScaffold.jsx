import { EventScaffoldItem } from "@/components";

const EventScaffold = ({ userProps }) => {
    return (
        <div className="flex flex-row items-center justify-between relative">
            <div className="flex flex-col items-center relative">
                <EventScaffoldItem userProps={userProps}/>
            </div>
        </div>
    );
};

export default EventScaffold;