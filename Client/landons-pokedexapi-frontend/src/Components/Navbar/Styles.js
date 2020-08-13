import styled from "@emotion/styled";
//import PokeTheme from "../../PokeTheme";

export const NavbarStyle = styled.div`
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  background-color: black;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 1px 20px;
  cursor: pointer;
  &:hover {
    /* color: gray; */
    border-bottom: 1px solid white;
    margin: 0px 20px;
  }
`;
