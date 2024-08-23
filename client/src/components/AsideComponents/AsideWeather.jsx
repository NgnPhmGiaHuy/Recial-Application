import Image from "next/image";

import { useWeatherData } from "@/hooks";
import { getRandomWeatherIllustration } from "@/utils";
import { AsideWeatherLocation, AsideWeatherNextSevenDays, AsideWeatherTemperature, EllipsisVerticalIcon } from "@/components";

const AsideWeather = () => {
    const { coordinates, location, weatherForecast } = useWeatherData();

    if (!coordinates || !location || !weatherForecast) {
        return null;
    }

    const randomIllustration = getRandomWeatherIllustration();

    return (
        <div className="mb-[16px] px-[8px]">
            <div className="flex flex-col items-center justify-center rounded-xl bg-lime-700 relative overflow-hidden">
                <div className="w-full h-full inset-0 absolute z-0">
                    <div className="w-full h-full flex items-center justify-center relative">
                        <Image src={randomIllustration} alt={`${randomIllustration}-image`} fill={true} sizes="(max-width: 768px) 100vw" className="object-cover opacity-60"/>
                        <div className="inset-0 bg-black/40 absolute"></div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col relative">
                    <div className="p-[16px] flex justify-start items-center relative">
                        <div className="w-full ml-auto inline-flex items-center justify-end align-top relative">
                            <div className="w-[24px] h-[24px] flex items-center justify-center text-white relative overflow-hidden">
                                <EllipsisVerticalIcon fill="none" stroke="currentColor" />
                            </div>
                        </div>
                    </div>
                    <div className="px-[16px] pb-[10px]">
                        { weatherForecast && <AsideWeatherTemperature weatherForecast={weatherForecast}/> }
                        { weatherForecast && <AsideWeatherNextSevenDays weatherForecast={weatherForecast}/> }
                        { location && <AsideWeatherLocation location={location?.[0]}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideWeather;