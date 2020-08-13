import React from "react";
import { Box, Grid, Skeleton } from "@chakra-ui/core";

export const FailedState = ({
  message = "We are having trouble fetching our data, try again later.",
  ...props
}) => (
  <Box {...props}>
    <Box textAlign="center" color="white" fontSize="30px">
      {message}
    </Box>
  </Box>
);

export const LoadingState = (props) => (
  <Grid
    templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
    gap={6}
    mt="20px"
    mx="15px"
  >
    {[...Array(20)].map((e, i) => (
      <Skeleton
        height="300px"
        key={i}
        borderRadius="10px"
        colorStart="bg"
        colorEnd="White"
      />
    ))}
  </Grid>
);
