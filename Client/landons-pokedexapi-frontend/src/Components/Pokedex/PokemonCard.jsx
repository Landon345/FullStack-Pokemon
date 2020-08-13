import React, { memo } from "react";

//styled component imports
import { Line, Types } from "../GlobalStyles";
import { PokeCard } from "./Styles";
import { Box, Icon } from "@chakra-ui/core";

/**
 * The PokemonCard functional Component to be rendered inside the PokemonList Component.
 * @param - the pokemon object
 */
const PokemonCard = ({ pokemon, capturedData }) => {
  /** If the pokemon is captured, display a icon with a check-circle next to the name */
  const caughtStatus = () => {
    if (!capturedData) {
      return "";
    }
    const found = capturedData.some((el) => el.id === pokemon.id);
    if (found) {
      return <Icon size="18px" name="check-circle" />;
    }
    return "";
  };

  return (
    //styled component PokeCard
    <PokeCard color={pokemon.types[0]}>
      <Box d="flex" justifyContent="space-between">
        <Box py="15px" textAlign="left" pl="15px">
          {pokemon.name}
        </Box>
        <Box textAlign="right" py="15px" pr="15px">
          {caughtStatus()}
        </Box>
      </Box>

      <Line></Line>
      <img
        src={pokemon.image}
        alt={pokemon.name}
        width="200px"
        height="200px"
      />

      <Box pr="15px" d="flex" justifyContent="flex-end">
        {/* Map through the types and show them */}
        {pokemon.types.map((type) => (
          <Types key={type} bg={type + "background"} color={type}>
            {type}
          </Types>
        ))}
      </Box>
    </PokeCard>
  );
};

//memo this component to prevent some re-renders
export default memo(PokemonCard);
