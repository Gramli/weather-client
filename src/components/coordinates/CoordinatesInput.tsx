import React, { ChangeEvent, useEffect, useState } from "react";
import Container from "../ui/Container";
import Label from "../ui/Label";
import ValidationInput from "../ui/ValidationInput";

interface CoordinatesInputProps {
    label: string
    onValidValue: (value?:string) => void,
    defaultValue: string
}

const CoordinatesInput: React.VFC<CoordinatesInputProps> = (props) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const regex = new RegExp('^[-+]?[0-9]*\.{0,1}[0-9]+$');

    const validateValue = (input: string) => {
        return regex.test(input);
    }

    const invokeValue = (valueToInvoke: string)=>{
        if(validateValue(valueToInvoke)){
            props.onValidValue(valueToInvoke);
        }
    }

    const isValid = isTouched ? validateValue(value) : true;

    useEffect(() => {
        setValue(props.defaultValue);
        invokeValue(props.defaultValue);
      }, [props.defaultValue])

    const onBlurhandler = () => {
        if(!isTouched){
            setIsTouched(true);
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        const eventValue = event.target.value;
        if(value !== eventValue){
            setValue(eventValue);
            invokeValue(eventValue);
        }
    }

    return <Container>
            <Label>{props.label}</Label>
            <ValidationInput isValid={isValid} onBlur={onBlurhandler} onChange={onChangeHandler} value={value}/>           
    </Container>
}

export default CoordinatesInput;