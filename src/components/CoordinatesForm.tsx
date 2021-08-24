import { FormEvent, useRef, useState } from "react";
import Container from "./ui/Container";

const CoordinatesForm: React.FC = () => {

    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    const latRef = useRef<HTMLInputElement>(null);
    const longRef = useRef<HTMLInputElement>(null);


    const onSubmitHandler = (event: FormEvent) => {
        event.preventDefault();

        if(lat.trim() === '' || long.trim() === ''){
            return;
        }

        //clear data at the end
        setLat('');
        setLong('');
    }

    return <Container>
        <div>
            <label>Latitude: </label>
            <input ref={latRef} value={lat}></input>            
        </div>
        <div>
            <label>Longtitude:</label>
            <input ref={longRef} value={long}></input>  
        </div>
        <button type="submit" >Submit</button>
    </Container>
}

export default CoordinatesForm;