import React, { useState } from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import StepCard from "./StepCard";
import "./Session.scss";

export default function SessionStep({ value, mealId }) {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <Box
      backgroundColor="white"
      borderRadius="2xl"
      d="flex"
      flexDirection="column"
      height="auto"
      overflowY="hidden"
    >
      <Box padding="20px">
        <Text fontSize="sm" fontWeight="600">
          Step By Step Instructions
        </Text>
        <Text color="gray.400">Test</Text>
      </Box>
      <Box
        z-index="-1"
        padding="30px"
        paddingTop="5px"
        height="auto"
        overflow="scroll"
        d="grid"
        gridTemplateColumns="1fr"
        gridRowGap="20px"
      >
        {value.map((item) => {
          return (
            <StepCard
              value={item}
              mealId={mealId}
              activeId={active}
              key={value.id}
            />
          );
        })}
      </Box>
      <Box padding="20px" backgroundColor="black">
        <Text
          fontSize="sm"
          color="white"
          fontWeight="600"
          onClick={() => setActive(active + 1)}
        >
          Ingredients
        </Text>
        <Text color="gray.400">Test</Text>
      </Box>
    </Box>
  );
}
