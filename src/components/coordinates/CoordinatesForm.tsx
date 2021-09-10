import { FormEvent, useContext, useReducer } from "react";
import CoordinatesContext from "../../context/coordinates-context/coordinatesContext";
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
    onSubmit:()=>void
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

    const onValidateLatHandler =(isValid: boolean, value?:string)=>{
        if(isValid){
            dispatch({actionType: ValidCoordinatesReducerAction.SETLAT, value: +(value as string)});
        }
    }

    const onValidateLongHandler =(isValid: boolean, value?:string)=>{
        if(isValid){
            dispatch({actionType: ValidCoordinatesReducerAction.SETLONG, value: +(value as string)});
        }
    }

    return <Container>
        <form onSubmit={onSubmitHandler}>
            <div>
                <CoordinatesInput label={"Latitude:"} onValidate={onValidateLatHandler} />         
            </div>
            <div>
                <CoordinatesInput label={"Longtitude:"} onValidate={onValidateLongHandler}/> 
            </div>
            <Button type="submit">Submit</Button>
        </form>
    </Container>
}

export default CoordinatesForm;