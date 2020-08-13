import React from "react";
import { Box, Grid, Spinner, Skeleton } from "@chakra-ui/core";

export const FailedState = ({
  message = "We are having trouble fetching our data, try again later.",
  ...props
}) => (
  <>
    <Box textAlign="center" fontSize="50px">
      Hmm. We're having trouble fetching our data. Please Try again later.
    </Box>

    <Grid
      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
      gap={6}
      mt="60px"
      mx="20px"
    >
      {[...Array(15)].map((e, i) => (
        <Skeleton height="225px" key={i} borderRadius="10px" />
      ))}
    </Grid>
  </>
);

export const LoadingState = (props) => (
  <>
    <Box textAlign="center" fontSize="50px">
      Loading... <Spinner />
    </Box>
    <Grid
      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
      gap={6}
      mt="60px"
      mx="20px"
    >
      {[...Array(15)].map((e, i) => (
        <Skeleton height="225px" key={i} borderRadius="10px" />
      ))}
    </Grid>
  </>
);
