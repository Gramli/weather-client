import { ChangeEvent, useState } from "react";
import Container from "../ui/Container";
import ValidationInput from "../ui/ValidationInput";

interface CoordinatesInputProps {
    onValidate: (isValid:boolean, value?:string) => void,
}

const CoordinatesInput: React.VFC<CoordinatesInputProps> = (props) => {

    const [value, setValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const isValid = value.trim() !== '' && isTouched;
    props.onValidate(isValid, isValid ? value : undefined);

    const onBlurhandler = () => {
        setIsTouched(true);
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }

    return <Container>
            <label>Latitude: </label>
            <ValidationInput isValid={isValid} onBlur={onBlurhandler} onChange={onChangeHandler} value={value}/>           
    </Container>
}

export default CoordinatesInput;