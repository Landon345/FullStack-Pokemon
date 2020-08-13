import styled from "@emotion/styled";
import PokeTheme from "../../PokeTheme";

export const PokeCard = styled.div`
  background-color: white;
  text-align: center;
  height: 300px;
  max-width: 500px;
  border-radius: 5px;
  font-family: Georgia, Times, "Times New Roman", serif;
  font-weight: bold;
  &:hover {
    box-shadow: 0px 0px 10px 3px ${(props) => PokeTheme.colors[props.color]};
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;

export const ButtonNav = styled.button`
  text-decoration: none;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #4e988f;
  border: none;
  margin-top: 30px;
  outline: none;
  font-size: 20px;
  color: white;
  &:hover {
    transition: background-color 0.1s ease-in;
    background-color: teal;
    cursor: pointer;
  }
`;
