import { weatherIcons } from "@/constants/AsideConstants/asideWeatherConstants";
import { interpretWeatherCode } from "@/utils/handleWeather";

const AsideWeatherDayScaffold = ({ day, temperature, weatherCode }) => {
    return (
        <li>
            <div className="flex flex-col items-center justify-center relative">
                <div className="text-white text-center font-medium uppercase relative">
                    <div>
                        <span className="text-[12px] break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {day}
                            </span>
                        </span>
                    </div>
                    <div className="m-[6px]">
                        <div className="w-[24px] h-[24px] flex items-center justify-center relative overflow-hidden">
                            <i>
                                {weatherIcons[interpretWeatherCode(weatherCode)]}
                            </i>
                        </div>
                    </div>
                    <div>
                        <span className="text-[14px] break-words relative leading-5">
                            <span className="overflow-hidden relative">
                                {temperature}°
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default AsideWeatherDayScaffold;