import ShowWeather from './components/show-weather/ShowWeather';
import { CoordinatesContextProvider } from './context/coordinates-context/coordinatesContext';

function App() {
  return (
    <CoordinatesContextProvider coordinates={{lat:-1, long:-1}}>
      <ShowWeather/>
    </CoordinatesContextProvider>
  );
}

export default App;
