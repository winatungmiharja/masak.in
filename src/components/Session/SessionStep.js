import React from "react";
import { Box } from "@chakra-ui/react";
import StepCard from "./StepCard";
export default function SessionStep({ value, mealId }) {
  return (
    <Box
      bg="grey"
      w="100%"
      p={4}
      color="gray.100"
      borderRadius={2}
      className="overflow"
    >
      {value.map((item) => {
        return <StepCard value={item} mealId={mealId} />;
      })}
    </Box>
  );
}
