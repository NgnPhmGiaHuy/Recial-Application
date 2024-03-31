"use client"

import { useEffect, useState } from "react";

import { getWeatherForecastData } from "@/utils";

const useWeatherForecast = (longitude, latitude) => {
    const [weatherForecast, setWeatherForecast] = useState(null);

    useEffect(() => {
        const getWeatherForecast = async () => {
            try {
                const result = await getWeatherForecastData(longitude, latitude);

                return setWeatherForecast(result);
            } catch (error) {
                return console.error(error);
            }
        }

        if (longitude && latitude) {
            getWeatherForecast();
        }
    }, [longitude, latitude]);

    return { weatherForecast };
};

export default useWeatherForecast;