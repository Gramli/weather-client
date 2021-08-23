import React from 'react';
import CoordinatesForm from './components/CoordinatesForm';
import CurrentWeatherComponent from './components/CurrentWeatherComponent';
import ForecastComponent from './components/ForecastComponent';
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
