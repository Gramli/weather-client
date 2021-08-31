export enum  CoordinatesReducerAction{
    SETLAT,
    SETLONG,
}

export interface CoordinatesReducerActions{
    actionType: CoordinatesReducerAction,
    value: boolean
}