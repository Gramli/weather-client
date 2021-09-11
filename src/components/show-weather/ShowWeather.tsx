import { useContext, useState } from "react";
import CoordinatesContext from "../../context/coordinates-context/coordinatesContext";
import { Coordinates } from "../../model/Coordinates";
import CoordinatesForm from "../coordinates/CoordinatesForm";
import CurrentWeatherComponent from "../current-weather/CurrentWeatherComponent";
import ForecastComponent from "../forecast-weather/ForecastComponent";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Label from "../ui/Label";
import Line from "../ui/Line";

const ShowWeather: React.FC = () => {

  const [newData, setNewData] = useState(false);
  const [defaultCoordinates, setdefaultCoordinates] = useState<Coordinates>({lat: -1, long: -1});
  const {coordinates} = useContext(CoordinatesContext);

  const onSubmitHandler = ()=> {
    setNewData(true);
  }

  let content = <Label>Please select Coordinates.</Label>;

  if(newData){
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
      <Button onClick={()=>{setdefaultCoordinates({lat: 50.073658, long: 14.418540})}}>Prague</Button>
      <Button onClick={()=>{setdefaultCoordinates({lat: 48.210033, long: 16.363449})}}>Wiena</Button>
      <Button onClick={()=>{setdefaultCoordinates({lat: 51.509865, long: -0.118092})}}>London</Button>
      <Button onClick={()=>{setdefaultCoordinates({lat: 51.752022, long: -1.257677})}}>Oxford</Button>
       <CoordinatesForm defaultCoordinates={defaultCoordinates} onSubmit={onSubmitHandler}/>
      {content}
    </Container>
}

export default ShowWeather;