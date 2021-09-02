import React, { ChangeEvent, useState } from "react";
import Container from "../ui/Container";
import ValidationInput from "../ui/ValidationInput";

interface CoordinatesInputProps {
    onValidate: (isValid:boolean, value?:string) => void,
}

const CoordinatesInput: React.VFC<CoordinatesInputProps> = (props) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = value.trim() !== '' && isTouched;

    const onBlurhandler = () => {
        if(!isTouched){
            setIsTouched(true);
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        const eventValue = event.target.value;
        if(value !== eventValue){
            setValue(eventValue);
            props.onValidate(true,eventValue);
        }
    }

    return <Container>
            <label>Latitude: </label>
            <ValidationInput isValid={isValid} onBlur={onBlurhandler} onChange={onChangeHandler} value={value}/>           
    </Container>
}

export default CoordinatesInput;