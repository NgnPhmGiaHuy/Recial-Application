"use client"

import { useState, useEffect } from "react";

import { useWeatherForecast } from "@/hooks";
import { getGeocodeByCoordinates } from "@/utils";

const useWeatherData = () => {
    const [location, setLocation] = useState(null);
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        const getCurrentPosition = async () => {
            try {
                if (!navigator.geolocation) {
                    return console.error("Geolocation is not supported by your browser");
                }

                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        const { latitude, longitude } = position.coords;
                        setCoordinates({ latitude, longitude });

                        try {
                            const result = await getGeocodeByCoordinates(latitude, longitude);

                            return setLocation(result);
                        } catch (error) {
                            return console.error(error);
                        }
                    },
                    (error) => {
                        return console.error(error);
                    }
                );
            } catch (error) {
                return console.error(error);
            }
        };

        getCurrentPosition();
    }, []);

    const { weatherForecast } = useWeatherForecast(coordinates?.longitude, coordinates?.latitude);

    return { coordinates, location, weatherForecast };
};

export default useWeatherData;
