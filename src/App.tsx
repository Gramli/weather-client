import React from 'react';
import CoordinatesForm from './components/coordinates/CoordinatesForm';
import CurrentWeatherComponent from './components/current-weather/CurrentWeatherComponent';
import ForecastComponent from './components/forecast-weather/ForecastComponent';
import Line from './components/ui/Line';

function App() {
  return (
    <div>
      <CoordinatesForm/>
      <Line/>
      <CurrentWeatherComponent />
      <Line/>
      <ForecastComponent />
    </div>
  );
}

export default App;
