import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
import TodoCard from "./TodoCard";
import "./Session.scss";
export default function SessionTodoList({ value, mealId }) {
  const countRemaining = (data) => {
    let counter = 0;
    data.forEach((item) => {
      if (!item.checked) {
        counter++;
      }
    });
    return counter;
  };
  let remaining = countRemaining(value);
  return (
    <Box backgroundColor="white" borderRadius="2xl" overflow="hidden">
      <Box padding="20px" paddingBottom="10px">
        <Text fontSize="sm" fontWeight="600">
          Ingredients
        </Text>
        <Text color="gray.400">
          {remaining === 0
            ? "You're all set!"
            : `${remaining} Ingredients Remaining`}{" "}
        </Text>
      </Box>
      <Box
        padding="20px"
        paddingTop="5px"
        height="calc(100% - 50px)"
        overflow="scroll"
        d="grid"
        gridTemplateColumns="1fr"
        gridRowGap="20px"
      >
        {value.map((item) => {
          return <TodoCard value={item} mealId={mealId} />;
        })}
      </Box>
    </Box>
  );
}
