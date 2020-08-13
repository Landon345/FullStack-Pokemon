import React, { useState } from "react";
//style imports
import { Line, Types } from "../GlobalStyles";
import { ReleaseButton, TimeBoxes } from "./Styles";
import { Box } from "@chakra-ui/core";
import { motion } from "framer-motion";
import moment from "moment";

/** Shows A Pokekon Card that tells about the name, types, image, and when it was caught. Cannot click on it to bring to more detail. */
export default function PokemonDashboardCard({ pokemon, release }) {
  const [released, setReleased] = useState(false);

  /** sets released to true so that I can initate the framer motion animation, and bubbles up the release function. */
  const clicked = (id) => {
    setReleased(true);
    release(id);
  };
  /** Formats the date correctly using moment */
  const date = () => {
    return moment(pokemon.created_at).format("MM/DD");
  };
  /** Formats the time correctly using moment. Get the correct offset of the user and applies to the time. */
  const time = () => {
    const offset = new Date().getTimezoneOffset();
    return moment(pokemon.created_at).utcOffset(-offset).format("h:mm a");
  };
  const variants = {
    yes: { scaleX: 0, opacity: 0 },
    no: { scaleX: 1, opacity: 1 },
  };

  //return this chunk of jsx
  return (
    //styled component PokeCard
    // framer motion animation for when a pokemon gets released.
    <motion.div
      initial={{ opacity: 0, scaleX: 0.1 }}
      animate={released ? "yes" : "no"}
      variants={variants}
      transition={{ duration: 0.25 }}
      key={pokemon.id}
    >
      <Box bg="White" borderRadius="10px" key={pokemon.id} maxW="500px">
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <Box py="15px" textAlign="left" pl="15px">
            {pokemon.name}
          </Box>
          <Box textAlign="right" pr="15px">
            {/* Styled component that releases a pokemon */}
            <ReleaseButton
              bg={pokemon.types[0] + "background"}
              color={pokemon.types[0]}
              onClick={() => clicked(pokemon.id)}
            >
              Release
            </ReleaseButton>
          </Box>
        </Box>

        <Line></Line>
        <Box textAlign="center">
          <img
            src={pokemon.image}
            alt={pokemon.name}
            width="100px"
            height="100px"
          />
        </Box>

        <Box pb="10px" d="flex" justifyContent="center">
          {/* Map through the types and show them */}
          {pokemon.types.map((type) => (
            <Types key={type} bg={type + "background"} color={type}>
              {type}
            </Types>
          ))}
        </Box>
        <Box d="flex" justifyContent="center">
          {/* Show the date and time caught */}
          <TimeBoxes>{date()}</TimeBoxes>
          <TimeBoxes>{time()}</TimeBoxes>
        </Box>
      </Box>
    </motion.div>
  );
}
