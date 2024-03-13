import { interpretWeatherCode } from "@/utils/handleWeather";

import WEATHER_ICONS from "@/constants/AsideConstants/AsideWeatherConstants";

const AsideWeatherTemperature = ({ weatherForecast }) => {
    return (
        <>
            <div className="mb-[8px] flex items-center justify-center relative">
                <div>
                    <span className="text-[42px] text-white text-center font-medium break-words relative leading-5 after:absolute after:w-[14px] after:h-[14px] after:top-[2px] after:right-[-18px] after:border-2 after:border-solid after:border-white after:rounded-full">
                        <span className="overflow-hidden relative">
                            {weatherForecast?.current?.temperature_2m}
                        </span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center relative">
                <div className="w-[48px] h-[48px] flex items-center justify-center text-white relative">
                    <i>
                        {WEATHER_ICONS[interpretWeatherCode(weatherForecast?.current?.weather_code)]}
                    </i>
                </div>
                <div className="flex items-center justify-center relative">
                    <span className="block text-[24px] text-white text-center font-medium break-words relative leading-5">
                        <span className="overflow-hidden relative">
                            {interpretWeatherCode(weatherForecast?.current?.weather_code)}
                        </span>
                    </span>
                </div>
                <div className="flex flex-row items-center justify-between relative">
                    <div className="mx-[12px] flex flex-row flex-shrink items-center justify-center relative">
                        <span className="block text-[12px] text-white text-center font-normal break-words relative leading-4">
                            <span className="overflow-hidden relative">
                                Real Feel: {weatherForecast?.current?.apparent_temperature}°
                            </span>
                        </span>
                    </div>
                    <div className="mx-[12px] flex flex-row flex-shrink items-center justify-center relative">
                        <span className="block text-[12px] text-white text-center font-normal break-words relative leading-4">
                            <span className="overflow-hidden relative">
                                Rain Chance: {weatherForecast?.current?.precipitation}%
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AsideWeatherTemperature;