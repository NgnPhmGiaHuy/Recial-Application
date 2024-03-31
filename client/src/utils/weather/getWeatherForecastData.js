const getWeatherForecastData = async (longitude, latitude) => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,precipitation,weather_code&current=temperature_2m,apparent_temperature,precipitation,weather_code&daily=weather_code,temperature_2m_max`)

        return await response.json();
    } catch (error) {
        return console.error(error);
    }
};

export default getWeatherForecastData;