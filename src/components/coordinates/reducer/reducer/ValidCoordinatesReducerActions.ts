export enum  ValidCoordinatesReducerAction{
    SETLATISVALID,
    SETLONGISVALID,
    SETLAT,
    SETLONG,
}

export type ValidCoordinatesReducerActions = 
    | { actionType: ValidCoordinatesReducerAction, value: boolean} 
    | { actionType: ValidCoordinatesReducerAction, value: number}