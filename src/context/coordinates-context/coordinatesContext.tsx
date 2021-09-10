import React, { useState } from 'react';
import { Coordinates } from '../../model/Coordinates';

export interface ICoordinatesContext{
    setCoordinates: (lat: number, long: number) => void,
    coordinates: Coordinates
}

const CoordinatesContext = React.createContext<ICoordinatesContext>({
    setCoordinates: ()=> {},
    coordinates: {lat:-1, long:-1}
  });

export interface CoordinatesContextProviderProps{
  coordinates: Coordinates
}

export const CoordinatesContextProvider: React.FC<CoordinatesContextProviderProps> = (props)=> {

  const [coordinates, setCoordinates] = useState<Coordinates>({lat:-1, long:-1})

  const setCoordinatesHandler = (lat: number, long: number)=> {
    setCoordinates( {lat, long});
  }


  return (
    <CoordinatesContext.Provider
      value={{
        coordinates: coordinates,
        setCoordinates: setCoordinatesHandler,
      }}
    >
      {props.children}
    </CoordinatesContext.Provider>
  );
}

export default CoordinatesContext;