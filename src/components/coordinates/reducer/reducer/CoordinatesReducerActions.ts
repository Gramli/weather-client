import { Coordinates } from "../../../model/Coordinates";

export enum  CoordinatesReducerAction{
    SET,
}

export interface CoordinatesReducerActions{
    actionType: CoordinatesReducerAction,
    value: Coordinates
}