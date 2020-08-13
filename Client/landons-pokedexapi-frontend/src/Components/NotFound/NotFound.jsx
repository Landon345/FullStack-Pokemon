import React from "react";
import { Link } from "react-router-dom";
//style imports
import { Box, Heading, Button } from "@chakra-ui/core";
import { css } from "emotion";

/** This is the component to show if the page is not found */
const NotFound = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    bg="bg"
    minH="100vh"
  >
    <Heading color="white" size="2xl">
      You seem to be lost! This page does not exist.
    </Heading>
    <Box display="flex" flexDirection="row">
      <Link
        to="/"
        className={css`
          text-decoration: none;
        `}
      >
        <Button size="lg" m="3" border="none">
          Return Home
        </Button>
      </Link>
      <Link
        to="/login"
        className={css`
          text-decoration: none;
        `}
      >
        <Button size="lg" m="3" border="none">
          Login
        </Button>
      </Link>
      <Link
        to="/register"
        className={css`
          text-decoration: none;
        `}
      >
        <Button size="lg" m="3" border="none">
          Register
        </Button>
      </Link>
    </Box>
  </Box>
);
export default NotFound;
