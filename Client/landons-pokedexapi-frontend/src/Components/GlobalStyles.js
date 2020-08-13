import styled from "@emotion/styled";
import PokeTheme from "../PokeTheme";

export const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

export const Line = styled.div`
  border: none;
  background-color: lightgray;
  width: 100%;
  height: 1px;
`;

export const Types = styled.div`
  margin: 4px 4px;
  padding: 3px;
  border-radius: 3px;
  border: 1px solid ${(props) => PokeTheme.colors[props.color]};
  color: ${(props) => PokeTheme.colors[props.color]};
  background-color: ${(props) => PokeTheme.colors[props.bg]};
  text-transform: uppercase;
  font-size: 0.8rem;
  @media only screen and (max-width: 558px) {
    font-size: 0.7rem;
    margin: 4px 2px;
    padding: 2px;
  }
`;
