import { formatCurrentDate } from "@/utils";

const AsideWeatherLocation = ({ location }) => {
    return (
        <div className="mb-[20px]">
            <div className="flex flex-col items-center justify-center text-white relative">
                <div>
                    <span className="block text-[18px] text-center font-bold break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            { formatCurrentDate(new Date()) }
                        </span>
                    </span>
                </div>
                { location && (
                    <div className="flex flex-row items-center justify-center relative">
                        <div className="w-[16px] h-[16px] mx-[2px] flex items-center justify-center relative overflow-hidden">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                </svg>
                            </i>
                        </div>
                        <div>
                            <span className="block text-[12px] text-center font-normal break-words relative leading-5">
                                <span className="overflow-hidden relative">
                                    { location?.components?.city}, {location?.components?.country_code.toUpperCase() }
                                </span>
                            </span>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
};

export default AsideWeatherLocation;