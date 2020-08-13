import styled from "@emotion/styled";
//import PokeTheme from "../../PokeTheme";

export const CustomForm = styled.form`
  margin: 0% 20%;

  @media only screen and (max-width: 768px) {
    margin: 0% 5%;
  }
`;

export const CustomLabel = styled.label`
  color: gray;
  font-size: 15px;
  text-align: left;
`;

export const CustomInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  border-bottom: 2px solid gray;
  &:focus {
    border: none;
    border-bottom: 2px solid black;
    transition: border-bottom 0.5s ease;
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  text-align: center;
`;

export const SubmitButton = styled.button`
  background-color: #696969;
  color: white;
  padding: 10px 35px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #555;
    transition: background-color 0.25s ease-in;
  }
  &:focus {
    transform: translate(1px, 1px);
  }
`;
