import styled from "@emotion/styled";
import PokeTheme from "../../PokeTheme";

export const ReleaseButton = styled.button`
  background-color: ${(props) => PokeTheme.colors[props.bg]};
  outline: none;
  border: none;
  color: ${(props) => PokeTheme.colors[props.color]};
  padding: 5px 20px;
  cursor: pointer;
  border: 1px solid ${(props) => PokeTheme.colors[props.color]};
  border-radius: 30px;
  &:hover {
    background-color: ${(props) => PokeTheme.colors[props.color]};
    color: white;
    transition: background-color 0.25s ease-in-out;
    transition: color 0.15s ease-in-out;
  }
  &:active {
    transform: translate(1px, 1px);
  }
`;

export const TimeBoxes = styled.div`
  background-color: #f1f1f1;
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  padding: 3px;
  margin: 0px 5px 10px 5px;
  font-size: 12px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
`;
