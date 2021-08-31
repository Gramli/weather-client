import { Coordinates } from "../../../model/Coordinates";

export enum  CoordinatesReducerAction{
    SETCOORDINATES,
}

export interface CoordinatesReducerActions{
    actionType: CoordinatesReducerAction,
    value: Coordinates
}