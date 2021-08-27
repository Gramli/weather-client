import { FormEvent, useState } from "react";
import Container from "../ui/Container";
import CoordinatesInput from "./CoordinatesInput";

//USEREDUCER FOR STATE

const CoordinatesForm: React.FC = () => {

    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();
    }

    const onValidateLatHandler =(isValid: boolean)=>{

    }

    const onValidateLongHandler =(isValid: boolean)=>{

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