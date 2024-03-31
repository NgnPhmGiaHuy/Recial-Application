import WeatherIllustration01 from "/public/images/Illustration/Weather/weather-bg-00001.svg";
import WeatherIllustration02 from "/public/images/Illustration/Weather/weather-bg-00002.svg";
import WeatherIllustration03 from "/public/images/Illustration/Weather/weather-bg-00003.svg";
import WeatherIllustration04 from "/public/images/Illustration/Weather/weather-bg-00004.svg";
import WeatherIllustration05 from "/public/images/Illustration/Weather/weather-bg-00005.svg";

const getRandomWeatherIllustration = () => {
    const illustrations = [WeatherIllustration01, WeatherIllustration02, WeatherIllustration03, WeatherIllustration04, WeatherIllustration05,];

    const randomIndex = Math.floor(Math.random() * illustrations.length);

    return illustrations[randomIndex];
};

export default getRandomWeatherIllustration;