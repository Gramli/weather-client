export enum  ValidCoordinatesReducerAction{
    SETLAT,
    SETLONG,
}

export type ValidCoordinatesReducerActions = 
    | { actionType: ValidCoordinatesReducerAction, value: number}