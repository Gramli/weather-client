import { Reducer } from "react";
import { CoordinatesReducerAction, CoordinatesReducerActions } from "./CoordinatesReducerActions";
import { CoordinatesReducerState } from "./CoordinatesReducerState";

export type CoordinatesReducer = Reducer<CoordinatesReducerState, CoordinatesReducerActions>;

export const reducer: CoordinatesReducer = (prevState:CoordinatesReducerState, action:CoordinatesReducerActions) => {

    switch(action.actionType){
        case CoordinatesReducerAction.SETCOORDINATES:
            return {
                ...prevState,
                coordinates: action.value
            }
    }
}