import Weather from "./Weather";

interface Forecast {
    min_temp: string,
    max_temp: string,
    datetime: string,
    temp: string,
    weather: Weather,
};

export default Forecast;