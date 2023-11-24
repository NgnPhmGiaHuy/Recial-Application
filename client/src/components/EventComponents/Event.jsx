import {EventItem} from "@/components";

const Event = ({userData}) => {
    return (
        <section className="p-[12px] flex flex-col rounded-md bg-white shadow-md relative">
            <div className="w-full h-full relative">
                <div className="w-full py-[8px] flex flex-row flex-auto items-center justify-between relative">
                    <div className="flex flex-col items-center relative">
                        <span className="block text-[14px] text-left text-black font-semibold break-words relative leading-5">
                            <span className="overflow-x-hidden overflow-y-hidden relative">
                                Events
                            </span>
                        </span>
                    </div>
                    <a href="" className="">
                        <span className="block text-[14px] text-left text-lime-500 font-semibold break-words relative leading-5 hover:text-lime-700">
                            See all
                        </span>
                    </a>
                </div>
            </div>
            {userData.slice(0, 3).map((value,index) => (
                <EventItem key={index} eventData={value}/>
            ))}
        </section>
    );
};

export default Event;