import { MapPinIcon } from "@/components";
import { formatCurrentFullDate } from "@/utils";

const AsideWeatherLocation = ({ location }) => {
    return (
        <div className="mb-[20px]">
            <div className="flex flex-col items-center justify-center text-white relative">
                <div>
                    <span className="block text-[18px] text-center font-bold break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            { formatCurrentFullDate(new Date()) }
                        </span>
                    </span>
                </div>
                { location && (
                    <div className="flex flex-row items-center justify-center relative">
                        <div className="w-[16px] h-[16px] mx-[2px] flex items-center justify-center relative overflow-hidden">
                            <MapPinIcon fill="none" stroke="currentColor" width={16} height={16} />
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