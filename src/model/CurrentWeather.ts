import Weather from "./Weather";

interface CurrentWeather {
    sunrise: string,
    datetime: string,
    temp: string,
    sunset: string,
    city_name: string,
    weather: Weather,
};

export default CurrentWeather;