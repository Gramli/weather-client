import { stat } from 'fs';
import React, { useReducer } from 'react';
import { reducer, CoordinatesReducer } from "./reducer/CoordinatesReducer";
import { Coordinates } from '../../model/Coordinates';
import { CoordinatesReducerAction } from './reducer/CoordinatesReducerActions';

export interface ICoordinatesContext{
    setCoordinates: (lat: number, long: number) => void,
    coordinates: Coordinates
}

const CoordinatesContext = React.createContext<ICoordinatesContext>({
    setCoordinates: ()=> {},
    coordinates: {lat:-1, long:-1}
  });

  const reducerInitialState ={
    coordinates: {lat:-1, long:-1}
  }

export interface CoordinatesContextProviderProps{
  coordinates: Coordinates
}

export const CoordinatesContextProvider: React.FC<CoordinatesContextProviderProps> = (props)=> {

  const [state, dispatch] = useReducer<CoordinatesReducer>(reducer, reducerInitialState);

  const setCoorinatesHandler = (lat: number, long: number)=> {
    dispatch({actionType: CoordinatesReducerAction.SETCOORDINATES, value: {lat, long}});
  }


  return (
    <CoordinatesContext.Provider
      value={{
        coordinates: state.coordinates,
        setCoordinates: setCoorinatesHandler,
      }}
    >
      {props.children}
    </CoordinatesContext.Provider>
  );
}

export default CoordinatesContext;