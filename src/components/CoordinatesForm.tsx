import Container from "./ui/Container";

const CoordinatesForm: React.FC = () => {

    return <Container>
        <div>
            <label>Latitude: </label>
            <input></input>            
        </div>
        <div>
            <label>Longtitude:</label>
            <input></input>  
        </div>
        <button>Submit</button>
    </Container>
}

export default CoordinatesForm;