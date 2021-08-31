import { Reducer } from "react";
import { CoordinatesReducerAction, CoordinatesReducerActions } from "./CoordinatesReducerActions";
import { CoordinatesReducerState } from "./CoordinatesReducerState";

export type ValidCoordinatesReducer = Reducer<CoordinatesReducerState, CoordinatesReducerActions>;

export const reducer: ValidCoordinatesReducer = (prevState:CoordinatesReducerState, action:CoordinatesReducerActions) => {

    switch(action.actionType){
        case CoordinatesReducerAction.SETLAT:
        return {
            ...prevState,
            isLatValid: action.value
        }
        case CoordinatesReducerAction.SETLONG:
            return {
                ...prevState,
                isLongValid: action.value
            }
    }
}