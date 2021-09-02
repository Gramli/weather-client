import { useContext } from "react";
import CoordinatesContext from "../../context/coordinates-context/coordinatesContext";
import CoordinatesForm from "../coordinates/CoordinatesForm";
import CurrentWeatherComponent from "../current-weather/CurrentWeatherComponent";
import ForecastComponent from "../forecast-weather/ForecastComponent";
import Container from "../ui/Container";
import Line from "../ui/Line";

const ShowWeather: React.FC = () => {

  const coordinatesContext = useContext(CoordinatesContext);

  let content = <p>Please select Coordinates.</p>

  const onSubmitHandler = ()=> {
    content = <>
      <Line/>
      <CurrentWeatherComponent coordinates={coordinatesContext.coordinates} />
      <Line/>
      <ForecastComponent coordinates={coordinatesContext.coordinates}/>
      </>
  }


    return <Container>
       <CoordinatesForm onSubmit={onSubmitHandler}/>
      {content}
    </Container>
}

export default ShowWeather;