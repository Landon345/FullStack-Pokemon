import React from "react";
import { Box, Grid, Spinner, Skeleton } from "@chakra-ui/core";

export const FailedState = ({
  message = "We are having trouble fetching our data, try again later.",
  ...props
}) => (
  <Box bg="#f3f3f3" minH="100vh">
    <Box textAlign="center" fontSize="50px" pt="60px" color="LightGray">
      We seem to be having troubles loading the data.
    </Box>
    <Skeleton height="500px" mt="60px" mx="10%" />
    {/* <Skeleton height="50px" my="10px" mx="10%" />
    <Skeleton height="50px" my="10px" mx="10%" /> */}
  </Box>
);

export const LoadingState = (props) => (
  <Box bg="#f3f3f3" minH="100vh">
    <Box textAlign="center" fontSize="50px" pt="60px" color="LightGray">
      Loading... <Spinner />
    </Box>
    <Skeleton height="500px" mt="60px" mx="10%" />
    {/* <Skeleton height="50px" my="10px" mx="10%" />
    <Skeleton height="50px" my="10px" mx="10%" /> */}
  </Box>
);
