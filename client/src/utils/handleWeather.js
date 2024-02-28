import WeatherIllustration01 from "/public/images/Illustration/Weather/weather-bg-00001.svg"
import WeatherIllustration02 from "/public/images/Illustration/Weather/weather-bg-00002.svg"
import WeatherIllustration03 from "/public/images/Illustration/Weather/weather-bg-00003.svg"
import WeatherIllustration04 from "/public/images/Illustration/Weather/weather-bg-00004.svg"
import WeatherIllustration05 from "/public/images/Illustration/Weather/weather-bg-00005.svg"

export const getRandomWeatherIllustration = () => {
    const illustrations = [
        WeatherIllustration01,
        WeatherIllustration02,
        WeatherIllustration03,
        WeatherIllustration04,
        WeatherIllustration05,
    ];

    const randomIndex = Math.floor(Math.random() * illustrations.length);

    return illustrations[randomIndex];
};

export const getCurrentAndNextSixDaysOfWeek = () => {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const todayIndex = new Date().getDay();

    const currentAndNextSixDaysOfWeek = [];
    for (let i = 0; i < 7; i++) {
        const dayIndex = (todayIndex + i) % 7;
        currentAndNextSixDaysOfWeek.push(daysOfWeek[dayIndex]);
    }

    return currentAndNextSixDaysOfWeek;
}

export const interpretWeatherCode = (wmoCode) => {
    if (wmoCode >= "01" && wmoCode <= "04") {
        return "Sunny";
    } else if (wmoCode >= "05" && wmoCode <= "09") {
        return "Partly Cloudy";
    } else if (wmoCode >= "10" && wmoCode <= "12") {
        return "Rain";
    } else if (wmoCode >= "13" && wmoCode <= "16") {
        return "Drizzle";
    } else if (wmoCode >= "17" && wmoCode <= "19") {
        return "Thunderstorm";
    } else if (wmoCode >= "20" && wmoCode <= "29") {
        return "Rain with Thunderstorm";
    } else if (wmoCode >= "30" && wmoCode <= "39") {
        return "Snow";
    } else if (wmoCode >= "40" && wmoCode <= "42") {
        return "Fog";
    } else if (wmoCode >= "43" && wmoCode <= "49") {
        return "Mist";
    } else if (wmoCode >= "50" && wmoCode <= "59") {
        return "Smoke";
    } else if (wmoCode >= "60" && wmoCode <= "64") {
        return "Freeze";
    } else if (wmoCode >= "65" && wmoCode <= "69") {
        return "Hail";
    } else if (wmoCode >= "70" && wmoCode <= "79") {
        return "Blizzard";
    } else if (wmoCode >= "80" && wmoCode <= "89") {
        return "Tornado";
    } else if (wmoCode >= "90" && wmoCode <= "99") {
        return "Dust";
    } else {
        return "Code not recognized";
    }
}

