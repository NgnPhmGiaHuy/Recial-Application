export const getGeocodeByCoordinates = async (latitude, longitude) => {
    try {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPEN_CAGE_API_KEY}`);

        const data = await response.json();

        return data.results;
    } catch (error) {
        return console.error(error);
    }
};