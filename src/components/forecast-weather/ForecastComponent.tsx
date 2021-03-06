import { useState, useEffect } from "react";
import UseWeatherApi from "../../hooks/useWeaterApi";
import Forecast from "../../model/Forecast";
import Card from "../ui/Card";
import LabeledText from "../ui/LabeledText";
import WeatherBitImage from "../ui/WeatherBitImage";
import Container from "../ui/Container";
import { Coordinates } from "../../model/Coordinates";

export interface ForecastComponentProps{
    coordinates: Coordinates
}

const ForecastComponent: React.FC<ForecastComponentProps> = (props) => {
    
    const { error, sendRequest } = UseWeatherApi<Forecast>({ lat: props.coordinates.lat.toString(), lon:props.coordinates.long.toString()});
    const [currentWeather, setCurrentWeather] = useState<Forecast[]>([]);


    useEffect(() => {
        const onFetched = (data: Forecast[]) => {
            setCurrentWeather(data);
        }
        sendRequest('https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily', onFetched);
    }, [sendRequest]);

    return <Container>
        {error && <h1>Error</h1>}
        <h1>16 Day Forecast</h1>
        {!error && currentWeather.map((item) => {
            return (<Card>
                <WeatherBitImage description={item.weather.description} icon={item.weather.icon} />
                <LabeledText title='Day' value={item.datetime} />
                <LabeledText title='Temperature' value={item.temp} />
                <LabeledText title='Max Temp' value={item.max_temp} />
                <LabeledText title='Min Temp' value={item.min_temp} />
            </Card>)
        })}
    </Container>
}

export default ForecastComponent;