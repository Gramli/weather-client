import { useContext, useState } from "react";
import CoordinatesContext from "../../context/coordinates-context/coordinatesContext";
import CoordinatesForm from "../coordinates/CoordinatesForm";
import CurrentWeatherComponent from "../current-weather/CurrentWeatherComponent";
import ForecastComponent from "../forecast-weather/ForecastComponent";
import Container from "../ui/Container";
import Label from "../ui/Label";
import Line from "../ui/Line";

const ShowWeather: React.FC = () => {

  const [loadData, setLoadData] = useState(false); // TODO fix state management
  const {coordinates} = useContext(CoordinatesContext);

  const onSubmitHandler = ()=> {
    setLoadData(true);
  }

  let content = <Label>Please select Coordinates.</Label>;

  if(loadData){
    content = <>
     <Line/>
    <Label>{`Latitude: ${coordinates.lat}, Longtitude:${coordinates.long}`}</Label>
    <Line/>
    <CurrentWeatherComponent coordinates={coordinates} />
    <Line/>
    <ForecastComponent coordinates={coordinates}/>
    </>;
  }

    return <Container>
       <CoordinatesForm onSubmit={onSubmitHandler}/>
      {content}
    </Container>
}

export default ShowWeather;