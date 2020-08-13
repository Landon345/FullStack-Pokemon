import React, { useState } from "react";
//data fetching resource imports
import { useQuery, useMutation, queryCache } from "react-query";
import { GetCaptured, DeleteCapturedPokemon } from "../../Api/Capture";
import * as queries from "../../utils/queries";
import * as Placeholders from "./Placeholders";
//style imports
import { Box, Spinner, Skeleton, Grid } from "@chakra-ui/core";
import { motion } from "framer-motion";
//component imports
import Navbar from "../Navbar/Navbar";
import PokemonDashboardCard from "./PokemonDashboardCard";

/** The dashboard is where we see all of our captured pokemon. We can see when they were captured, and we can release them. */
export default function Dashboard() {
  // use this just for the skeletons in the loading state.
  //fetch data using react-query.
  const capturedQuery = useQuery(["getCaptured"], GetCaptured, {
    refetchOnWindowFocus: false,
  });
  const capturedData = capturedQuery.data;

  // use Mutation is basically for being able to optimistically update our data.
  // I don't do it here.
  const [mutate] = useMutation(DeleteCapturedPokemon, {
    // When mutate is called:
    onMutate: (pokemonIdPassed) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      queryCache.cancelQueries("GetCaptured");
      // Snapshot the previous value
      const previousPokemon = queryCache.getQueryData("GetCaptured");
      // Return the snapshotted value
      return () => queryCache.setQueryData("GetCaptured", previousPokemon);
    },
    // If the mutation fails, use the value returned from onMutate to roll back
    onError: (err, pokemonIdPassed, rollback) => rollback(),
    // Always refetch after error or success:
    //invalidateQueries for react-query version 2.0 and above
    //invalidateQueries for react-query below version 2.0
    //could also just use refetch();
    onSettled: () => {
      queryCache.invalidateQueries("getCaptured");
      //refetch();
    },
  });

  const release = async (id) => {
    //I could just call DeleteCapturedPokemon(id) here and it would work just fine.
    // Just make sure to add queryCache.invalidateQueries("GetCaptured") after.
    await mutate(id);
  };

  // Return this chunk of jsx
  return (
    <Box>
      <Navbar />
      <Box bg="#55A69C" minHeight="95vh">
        {queries.areAnyLoading(capturedQuery) && <Placeholders.LoadingState />}
        {queries.areAnyFailed(capturedQuery) && <Placeholders.FailedState />}
        {queries.areAllLoaded(capturedQuery) && (
          <>
            {capturedData.data.length === 0 ? (
              <Box textAlign="center" fontSize="50px" color="White" p="20px">
                Go capture some pokemon at the pokedex!
              </Box>
            ) : (
              <>
                <Box textAlign="center" fontSize="50px" color="White" p="20px">
                  Captured
                </Box>
                {/* Decided not to include this animation, but the option is still here. */}
                <motion.div
                // initial={{ opacity: 0, x: 100 }}
                // animate={{ opacity: 1, x: 0 }}
                // transition={{ duration: 1 }}
                >
                  <Box mx="20px" py="20px">
                    {/* Show cards using a grid with auto-fit and minmax for responsiveness*/}
                    <Grid
                      templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
                      gap={6}
                    >
                      {capturedData.data.map((pokemon, index) => (
                        //Component PokeDashboardCard
                        <PokemonDashboardCard
                          pokemon={pokemon}
                          release={release}
                          key={pokemon.id}
                        />
                      ))}
                    </Grid>
                  </Box>
                </motion.div>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
