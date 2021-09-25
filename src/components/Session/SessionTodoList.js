import React, { useState, useEffect } from "react";
import { Flex, Spacer, Box, Text, Checkbox, Button } from "@chakra-ui/react";
import { useDispatchRecipe } from "../../data/Recipe";
import { Lock, Unlock } from "react-feather";
import TodoCard from "./TodoCard";
import "./Session.scss";
export default function SessionTodoList({
  value,
  mealId,
  isIngredientCompleted,
  setIsIngredientCompleted,
}) {
  const [isLock, setIsLock] = useState(false);
  useEffect(() => {
    if (countRemaining(value) > 0) setIsIngredientCompleted(false);
    else setIsIngredientCompleted(true);
  }, [value]);
  const dispatch = useDispatchRecipe();
  const countRemaining = (data) => {
    let counter = 0;
    data.forEach((item) => {
      if (!item.checked) {
        counter++;
      }
    });
    return counter;
  };

  const toggleIngredients = () => {
    console.log("h");
    dispatch({
      type: "UPDATE ALL",
      data: { mealId: mealId, isChecked: isIngredientCompleted },
    });
    setIsIngredientCompleted(!isIngredientCompleted);
  };
  let remaining = countRemaining(value);
  return (
    <Box
      backgroundColor="white"
      borderRadius="2xl"
      overflow="hidden"
      position="relative"
    >
      {isIngredientCompleted && (
        <Box position="absolute" zIndex="1" right="10px" top="10px">
          <Button
            size="xs"
            borderRadius="50%"
            width="30px"
            height="30px"
            // onClick={toggleWindow}
            boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
            onClick={() => setIsLock(!isLock)}
          >
            {!isLock ? <Unlock color="black" /> : <Lock color="black" />}
          </Button>
        </Box>
      )}

      <Flex padding="20px" paddingBottom="10px" wrap="wrap">
        <Box>
          <Text fontSize="sm" fontWeight="600">
            Ingredients
          </Text>
          <Text color="gray.400">
            {remaining === 0
              ? "You're all set!"
              : `${remaining} Ingredients Remaining`}{" "}
          </Text>
        </Box>
        <Spacer />
        {!isLock ? (
          <Checkbox
            paddingRight="50px"
            size="lg"
            colorScheme="orange"
            onChange={toggleIngredients}
            isChecked={remaining > 0 ? false : true}
          >
            <Text>Set All</Text>
          </Checkbox>
        ) : (
          <Text paddingRight="50px">Locked</Text>
        )}
      </Flex>
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
          return <TodoCard value={item} mealId={mealId} disabled={isLock} />;
        })}
      </Box>
    </Box>
  );
}
