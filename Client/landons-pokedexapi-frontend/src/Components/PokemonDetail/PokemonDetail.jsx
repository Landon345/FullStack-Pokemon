//state handler imports
import React, { useState, useEffect } from "react";
import { useQuery, queryCache } from "react-query";

import * as Placeholders from "./Placeholders";
import * as queries from "../../utils/queries";

//styled component imports
import { Box, Icon, Grid, Skeleton, Spinner } from "@chakra-ui/core";
import {
  Background,
  IconContainer,
  CaptureButton,
  CapturedMessage,
} from "./Styles";
import { css } from "emotion";
import { motion } from "framer-motion";
//component imports
import PokemonDetailCard from "./PokemonDetailCard";

//api imports
import { PostCapture } from "../../Api/Capture";
import { useCaptured, useGetSinglePokemon } from "../../Api/Queries";

/**
 * The component to be rendered
 * Uses useState from the react-query library to fetch and cache data.
 */
export default function PokemonDetail({ history, match }) {
  //set my id state which is either 1 or the id specified in the url
  const [id, setId] = useState(
    !match.params.id ? 1 : parseInt(match.params.id)
  );
  const [display, setDisplay] = useState("none");

  //fetch the data using id as a paramerter to find what data to return.
  const GetSinglePokemonQuery = useGetSinglePokemon(id);
  const GetCapturedQuery = useCaptured();

  const data = GetSinglePokemonQuery.data;
  const capturedData = GetCapturedQuery.data;

  useEffect(() => {
    setDisplay("none");
  }, [id]);

  /** This function handles moving forward and backward one pokemon. The parameter should be either 1 or -1 */
  const handleMove = (number) => {
    setId(id + number);
    history.push(`/pokedex/detail/${data.data.id + number}`);
    GetSinglePokemonQuery.refetch();
  };
  /** Changes whether or not to show the captured text on the page */
  const myDisplay = () => {
    const found = capturedData.data.some((el) => el.id === data.data.id);
    if (found) {
      display !== "block" && setDisplay("block");
    }
  };
  /** After clicking capture, show the captured text and make a post request to put that data into the database. Then, refetch the Captured Pokemon */
  const Capture = async () => {
    setDisplay("block");
    await PostCapture(data.data.id);
    GetCapturedQuery.refetch();
  };

  return (
    <>
      {queries.areAnyLoading(GetSinglePokemonQuery, GetCapturedQuery) && (
        <Placeholders.LoadingState />
      )}
      {queries.areAnyFailed(GetSinglePokemonQuery, GetCapturedQuery) && (
        <Placeholders.FailedState />
      )}
      {queries.areAllLoaded(GetSinglePokemonQuery, GetCapturedQuery) && (
        <>
          <Background color={data.data.types[0]}>
            <motion.div
              initial={{ y: -100 }}
              animate={display === "block" ? "block" : "none"}
              variants={{ block: { y: 0 }, none: { y: -100 } }}
              transition={{ duration: 0.25 }}
            >
              <CapturedMessage display={myDisplay()}>Captured</CapturedMessage>
            </motion.div>
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                {/* love using boxes because it is easy to add styles to */}
                <Box>
                  <IconContainer color={data.data.types[0]}>
                    {/* use an icon that will go back to the page that this pokemon is on. */}

                    <Icon
                      className={css`
                        font-size: 100px;
                        &:hover {
                          opacity: 0.9;
                          transition: opacity 0.25s ease;
                        }
                        @media only screen and (max-width: 768px) {
                          font-size: 50px;
                        }
                      `}
                      name="chevron-left"
                      bg="white"
                      borderRadius="50%"
                      cursor="pointer"
                      onClick={() =>
                        history.push(
                          `/pokedex/page/${localStorage.getItem("page") || 1}`
                        )
                      }
                    />
                  </IconContainer>
                </Box>
                <Box
                  className={css`
                    font-size: 70px;
                    &:hover {
                      opacity: 0.9;
                      transition: opacity 0.25s ease;
                    }
                    @media only screen and (max-width: 768px) {
                      font-size: 40px;
                    }
                  `}
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                >
                  {data.data.name}
                </Box>
                <Box
                  d="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontWeight="bold"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <CaptureButton
                      bg={data.data.types[0] + "background"}
                      color={data.data.types[0]}
                      onClick={Capture}
                    >
                      Capture
                    </CaptureButton>
                  </motion.div>
                </Box>
              </Grid>
            </motion.div>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box bg="white" mx="10%">
                {/* The PokemonDetailCard component with all of its props */}
                <PokemonDetailCard
                  match={match}
                  id={data.data.id}
                  name={data.data.name}
                  image={data.data.image}
                  stats={data.data.stats}
                  types={data.data.types}
                  eggGroups={data.data.egg_groups}
                  abilities={data.data.abilities}
                  height={data.data.height}
                  weight={data.data.weight}
                  genus={data.data.genus}
                  description={data.data.description}
                  move={handleMove}
                />
              </Box>
            </motion.div>
          </Background>
        </>
      )}
    </>
  );
}
