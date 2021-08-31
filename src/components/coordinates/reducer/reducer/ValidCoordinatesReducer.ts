import { Reducer } from "react";
import { CoordinatesReducerAction, CoordinatesReducerActions } from "./CoordinatesReducerActions";
import { CoordinatesReducerState } from "./CoordinatesReducerState";

export type ValidCoordinatesReducer = Reducer<CoordinatesReducerState, CoordinatesReducerActions>;

export const reducer: ValidCoordinatesReducer = (prevState:CoordinatesReducerState, action:CoordinatesReducerActions) => {

    switch(action.actionType){
        case CoordinatesReducerAction.SETCOORDINATES:
            return {
                ...prevState,
                coordinates: action.value
            }
    }
}