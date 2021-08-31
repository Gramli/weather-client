import { FormEvent, useReducer } from "react";
import Container from "../ui/Container";
import CoordinatesInput from "./CoordinatesInput";
import { CoordinatesReducerAction } from "../../context/coordinates-context/reducer/CoordinatesReducerActions";
import { reducer, ValidCoordinatesReducer } from "../../context/coordinates-context/reducer/CoordinatesReducer";

const reducerInitialState = {
    isLatValid: false,
    isLongValid: false,
}

export interface CoordinatesFormProps{
    onSubmit:(lat: number,long: number)=>void
}

//TODO REDUCER

const CoordinatesForm: React.FC<CoordinatesFormProps> = (props) => {

    const [state, dispatch] = useReducer<ValidCoordinatesReducer>(reducer, reducerInitialState)

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        if(!state.isLatValid || !state.isLongValid){
            return;
        }

        props.onSubmit())


    }

    const onValidateLatHandler =(isValid: boolean)=>{
        dispatch({actionType: CoordinatesReducerAction.SETLAT, value: isValid});
    }

    const onValidateLongHandler =(isValid: boolean)=>{
        dispatch({actionType: CoordinatesReducerAction.SETLONG, value: isValid});
    }

    return <Container>
        <div>
            <label>Latitude: </label>
            <CoordinatesInput onValidate={onValidateLatHandler} />         
        </div>
        <div>
            <label>Longtitude:</label>
            <CoordinatesInput onValidate={onValidateLongHandler}/> 
        </div>
        <button type="submit" >Submit</button>
    </Container>
}

export default CoordinatesForm;