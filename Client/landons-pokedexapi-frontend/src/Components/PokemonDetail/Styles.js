import styled from "@emotion/styled";
import PokeTheme from "../../PokeTheme";

export const Background = styled.div`
  background-color: ${(props) => PokeTheme.colors[props.color]};
  padding: 0px;
  overflow: hidden;
  padding-bottom: 100px;
  margin: 0;
  min-height: 89vh;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const IconContainer = styled.div`
  color: ${(props) => PokeTheme.colors[props.color]};
  text-align: center;
  padding: 40px;
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
export const ColorBox = styled.div`
  color: white;
  background-color: ${(props) => PokeTheme.colors[props.color]};
  margin: 20px 5%;
  text-align: left;
  padding: 5px 0px 5px 10px;
`;
export const ProfileBoxes = styled.div`
  /* d="grid" textAlign="left" gridTemplateColumns="1fr 1fr" mb="20px" */
  display: grid;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
`;

export const IdNumber = styled.div`
  color: ${(props) => PokeTheme.colors[props.color]};
  padding-left: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const SingleStatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  text-align: left;
  margin: 5px 10% 5px 10%;
  @media only screen and (max-width: 558px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 2.5fr;
    margin: 5px 10% 5px 0px;
  }
`;

/**Set the width and background color of the Statbar by using props passed into it: maxStat, typeColor, and stat */
export const StatBar = styled.div`
  background-color: ${(props) => PokeTheme.colors[props.color]};
  color: white;
  width: ${(props) => props.stat / (props.maxStat / 100) + "%"};
`;
/**Set the container for the statBar with a good background color using the typeColor prop */
export const StatBarWhole = styled.div`
  width: 100%;
  background-color: ${(props) => PokeTheme.colors[props.bg]};
`;

export const CaptureButton = styled.button`
  background-color: ${(props) => PokeTheme.colors[props.color]};
  outline: none;
  border: none;
  color: white;
  padding: 10px 30px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 30px;
  @media only screen and (max-width: 768px) {
    padding: 5px 15px;
  }
  &:hover {
    background-color: white;
    color: ${(props) => PokeTheme.colors[props.color]};
    transition: background-color 0.25s ease-in-out;
    transition: color 0.15s ease-in-out;
  }
`;

export const CapturedMessage = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  left: 50%;
  margin-left: -100px;
  top: 10px;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 25px;
  display: ${(props) => props.display};
  @media only screen and (max-width: 768px) {
    font-size: 15px;
    width: 100px;
    height: 15px;
    margin-left: -50px;
  }
`;
