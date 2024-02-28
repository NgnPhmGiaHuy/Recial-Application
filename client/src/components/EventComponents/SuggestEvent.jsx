import { SuggestEventItem } from "@/components";

const SuggestEvent = ({ eventProps }) => {
    return (
        <section className="p-[12px] flex flex-col rounded-xl bg-white shadow-[0px_0px_0px_1px_rgb(140_140_140/0.2)] relative">
            <div className="w-full h-full relative">
                <div className="w-full py-[8px] flex flex-row flex-auto items-center justify-between relative">
                    <div className="flex flex-col items-center relative">
                        <div className="before:w-[3px] before:h-full before:left-[-12px] before:rounded-md before:bg-lime-500 before:absolute">
                            <span className="block text-[14px] text-left text-black font-semibold break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    Events
                                </span>
                            </span>
                        </div>
                    </div>
                    <a href="" >
                        <span className="block text-[14px] text-left text-lime-500 font-semibold break-words relative leading-5 hover:text-lime-700">
                            See all
                        </span>
                    </a>
                </div>
            </div>
            {eventProps.slice(0, 3).map((value,index) => (
                <SuggestEventItem key={index} eventProps={value}/>
            ))}
        </section>
    );
};

export default SuggestEvent;