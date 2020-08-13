import React, { memo } from "react";
//styled component imports
import { Box, Icon } from "@chakra-ui/core";
import { Types } from "../GlobalStyles";
import { IdNumber, ColorBox, ProfileBoxes } from "./Styles";
import { css } from "emotion";
import { motion } from "framer-motion";

//component imports
import StatBars from "./StatBars";

/**
 * This component gives the middle portion of the PokemonDetail Component.
 *
 * @param The parameters are all of the props to be passed into this component
 * which include: id, name, image, stats, types, eggGroups, abilities, height,
 * weight, genus, description, move, color.
 */
const PokemonDetailCard = ({
  match,
  id,
  name,
  image,
  stats,
  types,
  eggGroups,
  abilities,
  height,
  weight,
  genus,
  description,
  move,
}) => {
  /**Compute the maxStat out of the stats of the single pokemon */
  const maxStat = () => {
    let array = Object.values(stats);
    let maxStat = Math.max(...array);
    return maxStat;
  };
  //return this jsx
  return (
    <div>
      <Box
        py="13px"
        px="8%"
        d="grid"
        gridTemplateColumns="repeat(2, 1fr)"
        borderBottom="1px solid lightgray"
        verticalAlign="center"
      >
        <Box d="flex" justifyContent="start" alignItems="center">
          {/* Icon that moves one pokemon to the left by specifing -1 in the move function */}
          {match.params.id !== 1 && (
            <Icon
              className={css`
                &:hover {
                  opacity: 0.8;
                  transition: opacity 0.25s ease;
                }
                &:active {
                  transform: scale(0.85);
                }
              `}
              name="chevron-left"
              size="30px"
              mr="5%"
              bg={types[0]}
              color="white"
              borderRadius="50%"
              cursor="pointer"
              onClick={() => move(-1)}
            />
          )}
          <Box fontSize="20px">{name} </Box>
          <IdNumber typeColor={types[0]}> #{id}</IdNumber>
        </Box>
        <Box pr="15px" d="flex" justifyContent="flex-end" alignItems="center">
          {/* Map through the types and show them */}
          {types.map((type) => (
            <Types key={type} bg={type + "background"} color={type}>
              {type}
            </Types>
          ))}
          {/* Icon that moves one pokemon to the right by specifing 1 in the move function */}
          {match.params.id !== 553 && (
            <Icon
              className={css`
                &:hover {
                  opacity: 0.8;
                  transition: opacity 0.25s ease;
                }
                &:active {
                  transform: scale(0.85);
                }
              `}
              name="chevron-right"
              size="30px"
              ml="5%"
              bg={types[0]}
              color="white"
              borderRadius="50%"
              cursor="pointer"
              onClick={() => move(1)}
            />
          )}
        </Box>
      </Box>
      {/* A grid box for the image and stats */}
      <Box d="grid" gridTemplateColumns="1fr 2fr" marginTop="0px">
        <Box d="flex" justifyContent="center">
          <img alt={name} src={image} height="200px" width="200px" />
        </Box>
        <Box mt="30px">
          <StatBars stats={stats} maxStat={maxStat()} types={types} />
        </Box>
      </Box>
      <Box textAlign="left" mx="8%">
        <Box fontSize="20px" fontWeight="bold" mb="10px">
          {genus}
        </Box>
        <Box fontSize="18px">{description}</Box>
      </Box>
      {/* Add some animations with framer-motion */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.25 }}
      >
        <ColorBox color={types[0]}>
          <Box fontSize="20px">Profile</Box>
        </ColorBox>
      </motion.div>

      {/* A grid box for the Profile information*/}
      <Box d="grid" gridTemplateColumns="1fr 1fr" mx="8%">
        {/* A custom profile box to reuse css */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          <ProfileBoxes>
            <Box fontWeight="bold">Height:</Box>
            <Box>{height} m</Box>
          </ProfileBoxes>
          <ProfileBoxes>
            <Box fontWeight="bold">Weight:</Box>
            <Box>{weight} kg</Box>
          </ProfileBoxes>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.25 }}
        >
          <ProfileBoxes>
            <Box fontWeight="bold">Egg Groups:</Box>
            <Box>
              {/* map through egg groups */}
              {eggGroups.map((group) => (
                <div key={group}>{group}</div>
              ))}
            </Box>
          </ProfileBoxes>
          <ProfileBoxes>
            <Box fontWeight="bold">Abilities:</Box>
            <Box>
              {/* map throught abilities */}
              {abilities.map((able) => (
                <div key={able}>{able}</div>
              ))}
            </Box>
          </ProfileBoxes>
        </motion.div>
      </Box>
    </div>
  );
};

export default memo(PokemonDetailCard);
