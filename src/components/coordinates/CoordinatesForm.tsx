import { FormEvent, useContext, useReducer } from "react";
import CoordinatesContext from "../../context/coordinates-context/coordinatesContext";
import { Coordinates } from "../../model/Coordinates";
import Button from "../ui/Button";
import Container from "../ui/Container";
import CoordinatesInput from "./CoordinatesInput";
import { reducer, ValidCoordinatesReducer } from "./reducer/reducer/ValidCoordinatesReducer";
import { ValidCoordinatesReducerAction } from "./reducer/reducer/ValidCoordinatesReducerActions";

const reducerInitialState = {
    isLatValid: false,
    isLongValid: false,
    lat: -1,
    long: -1
}

export interface CoordinatesFormProps{
    onSubmit:()=>void;
    defaultCoordinates: Coordinates,
}

const CoordinatesForm: React.FC<CoordinatesFormProps> = (props) => {

    const [state, dispatch] = useReducer<ValidCoordinatesReducer>(reducer, reducerInitialState);
    const coordinatesContext = useContext(CoordinatesContext);

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        if(state.lat === -1 || state.long === -1){
            return;
        }

        coordinatesContext.setCoordinates(state.lat, state.long);
        props.onSubmit();
    }

    const onValidateLatHandler =(value?:string)=>{
            dispatch({actionType: ValidCoordinatesReducerAction.SETLAT, value: parseFloat(value as string)});
    }

    const onValidateLongHandler =(value?:string)=>{
            dispatch({actionType: ValidCoordinatesReducerAction.SETLONG, value: parseFloat(value as string)});
    }

    return <Container>
        <form onSubmit={onSubmitHandler}>
            <div>
                <CoordinatesInput defaultValue={props.defaultCoordinates.lat === -1 ? '' :  props.defaultCoordinates.lat.toString()} label={"Latitude:"} onValidValue={onValidateLatHandler} />         
            </div>
            <div>
                <CoordinatesInput defaultValue={props.defaultCoordinates.long === -1 ? '' :  props.defaultCoordinates.long.toString()} label={"Longtitude:"} onValidValue={onValidateLongHandler}/> 
            </div>
            <Button type="submit">Submit</Button>
        </form>
    </Container>
}

export default CoordinatesForm;