import { Reducer } from "react";
import { ValidCoordinatesReducerAction, ValidCoordinatesReducerActions } from "./ValidCoordinatesReducerActions";
import { ValidCoordinatesReducerState } from "./ValidCoordinatesReducerState";

export type ValidCoordinatesReducer = Reducer<ValidCoordinatesReducerState, ValidCoordinatesReducerActions>;

export const reducer: ValidCoordinatesReducer = (prevState:ValidCoordinatesReducerState, action:ValidCoordinatesReducerActions) => {

    switch(action.actionType){
            case ValidCoordinatesReducerAction.SETLAT:
                return {
                    ...prevState,
                    lat: action.value as number
                }
            case ValidCoordinatesReducerAction.SETLONG:
                return {
                    ...prevState,
                    long: action.value as number
                }
    }
}