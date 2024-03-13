import { EventScaffoldItem } from "@/components";

const EventScaffold = () => {
    return (
        <div className="flex flex-row items-center justify-between relative">
            <div className="flex flex-col items-center relative">
                <EventScaffoldItem/>
            </div>
        </div>
    );
};

export default EventScaffold;