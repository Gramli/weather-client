import CoordinatesForm from "../coordinates/CoordinatesForm";
import CurrentWeatherComponent from "../current-weather/CurrentWeatherComponent";
import ForecastComponent from "../forecast-weather/ForecastComponent";
import Container from "../ui/Container";
import Line from "../ui/Line";

const ShowWeather: React.FC = () => {




    return <Container>
       <CoordinatesForm on/>
      <Line/>
      <CurrentWeatherComponent />
      <Line/>
      <ForecastComponent />
    </Container>
}

export default ShowWeather;