import React, { memo } from "react";
import { withRouter } from "react-router-dom";
//style imports
import { NavbarStyle, NavbarLink } from "./Styles";
import { Box } from "@chakra-ui/core";
//Class import
import Auth from "../../Auth";

/** The Navbar for the site. It either shows routes for Home, Login, and Register. Or if Logged in, routes for Pokedex, Dashboard, and logout. */
const Navbar = (props) => (
  <div>
    <MyLinks history={props.history} />
  </div>
);

export default withRouter(Navbar);

const MyLinks = memo(function MyLinks({ history }) {
  if (localStorage.getItem("token")) {
    return (
      <div>
        <NavbarStyle>
          <Box color="Gray" mx="20px">
            Welcome {localStorage.getItem("name")}
          </Box>
          <NavbarLink href="/pokedex">Pokedex</NavbarLink>
          <NavbarLink href="/dashboard">Dashboard</NavbarLink>
          <NavbarLink
            onClick={() => {
              Auth.logout(() => {
                history.push("/login");
              });
            }}
          >
            Logout
          </NavbarLink>
        </NavbarStyle>
      </div>
    );
  }

  return (
    <div>
      <NavbarStyle>
        <Box color="Gray" mx="20px">
          PokeSystem
        </Box>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink data-testid="login" href="/login">
          Login
        </NavbarLink>
        <NavbarLink href="/register">Register</NavbarLink>
      </NavbarStyle>
    </div>
  );
});
