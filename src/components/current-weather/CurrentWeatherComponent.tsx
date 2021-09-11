import { useState, useEffect } from "react";
import UseWeatherApi from "../../hooks/useWeaterApi";
import CurrentWeather from "../../model/CurrentWeather";
import Card from "../ui/Card";
import LabeledText from "../ui/LabeledText";
import WeatherBitImage from "../ui/WeatherBitImage";
import Container from "../ui/Container";
import { Coordinates } from "../../model/Coordinates";

export interface CurrentWeatherComponentProps{
    coordinates: Coordinates
}

const CurrentWeatherComponent: React.FC<CurrentWeatherComponentProps> = (props) => {

    const { error, sendRequest } = UseWeatherApi<CurrentWeather>({ lat: props.coordinates.lat.toString(), lon: props.coordinates.long.toString()});
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather[]>([]);


    useEffect(() => {
        const onFetched = (data: CurrentWeather[]) => {
            setCurrentWeather(data);
        }
        sendRequest('https://weatherbit-v1-mashape.p.rapidapi.com/current', onFetched);
    }, [sendRequest]);

    return <Container>
        {error && <h1>Error</h1>}
        <h1>Actual Weather</h1>
        {!error && currentWeather.map((item) => {
            return (<Card>
                <WeatherBitImage description={item.weather.description} icon={item.weather.icon} />
                <LabeledText title='City' value={item.city_name} />
                <LabeledText title='Weather Time' value={item.datetime} />
                <LabeledText title='Temperature' value={item.temp} />
                <LabeledText title='Sunrise' value={item.sunrise} />
                <LabeledText title='Sunset' value={item.sunset} />
            </Card>)
        })}
    </Container>
}

export default CurrentWeatherComponent;