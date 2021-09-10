import React, { ChangeEvent, useState } from "react";
import Container from "../ui/Container";
import Label from "../ui/Label";
import ValidationInput from "../ui/ValidationInput";

interface CoordinatesInputProps {
    label: string
    onValidate: (isValid:boolean, value?:string) => void,
}

//TODO FIX VALIDATIOM
const CoordinatesInput: React.VFC<CoordinatesInputProps> = (props) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const regex = new RegExp('^[0-9]*\.{0,1}[0-9]+$');

    const validateValue = (input: string) => {
        return regex.test(input) || input === '';
    }

    const isValid = isTouched ? validateValue(value) : !isTouched; //FIX

    const onBlurhandler = () => {
        if(!isTouched){
            setIsTouched(true);
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        const eventValue = event.target.value;
        if(value !== eventValue && validateValue(eventValue)){
            setValue(eventValue);
            props.onValidate(true, eventValue); //FIX
        }
    }

    return <Container>
            <Label>{props.label}</Label>
            <ValidationInput isValid={isValid} onBlur={onBlurhandler} onChange={onChangeHandler} value={value}/>           
    </Container>
}

export default CoordinatesInput;