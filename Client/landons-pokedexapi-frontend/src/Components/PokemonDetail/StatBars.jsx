import React, { memo } from "react";
//styled component imports
import { Box } from "@chakra-ui/core";
import { SingleStatContainer, StatBar, StatBarWhole } from "./Styles";
import { motion } from "framer-motion";

/**
 * Funtional Component that renders the Stat Bars and their labels in a stylish fashion.
 * @param - the props to be passed in include: stats, maxStat, and type.
 */
function StatBars({ stats, maxStat, types }) {
  const initial = { opacity: 0, x: -100, y: -20, scale: 3 };
  const animateStat = { opacity: 1, x: 0, y: 0, scale: 1 };
  const duration = 0.2;
  return (
    <Box>
      {/* SingleStatContainer, StatBarWhole, and StatBar, are all Styled components to reuse. */}
      {/* Add some animations using framer-motion to make it look like the stat bars are falling into place */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <SingleStatContainer>
          <Box>HP</Box>
          <StatBarWhole bg={types[0] + "background"}>
            <motion.div
              initial={initial}
              animate={animateStat}
              transition={{ delay: 0.6, duration: duration }}
            >
              <StatBar maxStat={maxStat} stat={stats.hp} color={types[0]}>
                <Box ml="5px">{stats.hp}</Box>
              </StatBar>
            </motion.div>
          </StatBarWhole>
        </SingleStatContainer>
        <SingleStatContainer>
          <Box>Attack</Box>
          <StatBarWhole bg={types[0] + "background"}>
            <motion.div
              initial={initial}
              animate={animateStat}
              transition={{ delay: 0.7, duration: duration }}
            >
              <StatBar maxStat={maxStat} stat={stats.attack} color={types[0]}>
                <Box ml="5px">{stats.attack}</Box>
              </StatBar>
            </motion.div>
          </StatBarWhole>
        </SingleStatContainer>
        <SingleStatContainer>
          <Box> Defense</Box>
          <StatBarWhole bg={types[0] + "background"}>
            <motion.div
              initial={initial}
              animate={animateStat}
              transition={{ delay: 0.8, duration: duration }}
            >
              <StatBar maxStat={maxStat} stat={stats.defense} color={types[0]}>
                <Box ml="5px">{stats.defense}</Box>
              </StatBar>
            </motion.div>
          </StatBarWhole>
        </SingleStatContainer>
        <SingleStatContainer>
          <Box>Speed</Box>
          <StatBarWhole bg={types[0] + "background"}>
            <motion.div
              initial={initial}
              animate={animateStat}
              transition={{ delay: 0.9, duration: duration }}
            >
              <StatBar maxStat={maxStat} stat={stats.speed} color={types[0]}>
                <Box ml="5px">{stats.speed}</Box>
              </StatBar>
            </motion.div>
          </StatBarWhole>
        </SingleStatContainer>
        <SingleStatContainer>
          <Box>Sp Atk</Box>
          <StatBarWhole bg={types[0] + "background"}>
            <motion.div
              initial={initial}
              animate={animateStat}
              transition={{ delay: 1, duration: duration }}
            >
              <StatBar
                maxStat={maxStat}
                stat={stats["special-attack"]}
                color={types[0]}
              >
                <Box ml="5px">{stats["special-attack"]}</Box>
              </StatBar>
            </motion.div>
          </StatBarWhole>
        </SingleStatContainer>
        <SingleStatContainer>
          <Box>Sp Def</Box>
          <StatBarWhole bg={types[0] + "background"}>
            <motion.div
              initial={initial}
              animate={animateStat}
              transition={{ delay: 1.1, duration: duration }}
            >
              <StatBar
                maxStat={maxStat}
                stat={stats["special-defense"]}
                color={types[0]}
              >
                <Box ml="5px">{stats["special-defense"]}</Box>
              </StatBar>
            </motion.div>
          </StatBarWhole>
        </SingleStatContainer>
      </motion.div>
    </Box>
  );
}
export default memo(StatBars);
