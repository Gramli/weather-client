import styled from "styled-components";

interface ValidationInputProps{
    isValid: boolean;
}

const ValidationInput = styled.input<ValidationInputProps>`
    background-color: ${props=> props.isValid ? "white" : "salmon"};
    border-color: ${props=> props.isValid ? "black" : "red"};
`;

export default ValidationInput;