import { AsideWeatherDayScaffold } from "@/components";
import { getCurrentAndNextSixDaysOfWeek } from "@/utils/handleWeather";

const AsideWeatherNextSevenDays = ({ weatherForecast }) => {
    const currentAndNextSixDaysOfWeek = getCurrentAndNextSixDaysOfWeek();

    return (
        <div className="my-[20px] p-[16px] flex items-center justify-between rounded-xl bg-black/40 relative">
            <ul className="w-full flex flex-row items-center justify-between relative">
                {currentAndNextSixDaysOfWeek?.map((value, index) => (
                    <AsideWeatherDayScaffold key={index} day={currentAndNextSixDaysOfWeek[index]} temperature={weatherForecast?.daily?.temperature_2m_max[index]} weatherCode={weatherForecast?.daily?.weather_code[index]}/>
                ))}
            </ul>
        </div>
    );
};

export default AsideWeatherNextSevenDays;