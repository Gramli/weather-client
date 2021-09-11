import axios from "axios";
import { useCallback } from "react";
import { useState } from "react";
import CurrentWeather from "../model/CurrentWeather";
import Forecast from "../model/Forecast";

type Response = CurrentWeather | Forecast; 

interface WeatherData<T extends Response>{
    data: T[],
    count: number,
}

export interface UseWeatherApiProps{
    lat: string,
    lon: string,
}

const UseWeatherApi = <T extends Response>(props: UseWeatherApiProps)=> {
    const [error, setError] = useState(false);
    const sendRequest = useCallback(async (url: string, onFetched: (data: T[]) => void) => {
        try{
        const result = await axios.get<WeatherData<T>>(url, {
            headers: {
                'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
                'x-rapidapi-key': ''
            },
            params:{lat: props.lat, lon: props.lon}
        });
            onFetched(result.data.data);
        }
        catch{
            setError(true);
        }
    },[props.lat, props.lon]);

        return {
            error,
            sendRequest,
        };
};

export default UseWeatherApi;