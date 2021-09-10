import styled from "styled-components";

interface ValidationInputProps{
    isValid: boolean;
}

const ValidationInput = styled.input<ValidationInputProps>`
    background-color: ${props=> props.isValid ? "white" : "salmon"};
    border-color: ${props=> props.isValid ? "black" : "red"};
    padding: 0.5em;
    border-radius: 0.4em;
`;

export default ValidationInput;