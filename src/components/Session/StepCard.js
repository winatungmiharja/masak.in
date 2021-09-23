import React, { useRef, useEffect } from "react";
import { useDispatchRecipe } from "../../data/Recipe";
import { Box, Text, Image, Checkbox, Spacer, Heading } from "@chakra-ui/react";

export default function StepCard({ value, mealId, activeId }) {
  let cardRef = useRef();
  let boxStyle =
    value.id == activeId
      ? { boxShadow: "0px 8px 24px rgba(149, 157, 165, 0.2)" }
      : { boxShadow: "none" };

  // useEffect(() => {
  //   if (value.id == activeId) {
  //     console.log("hei");
  //     cardRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [activeId]);

  // const dispatch = useDispatchRecipe();
  // const updateToDone = () => {
  //   dispatch({
  //     type: "UPDATE STEP",
  //     data: { mealId: mealId, stepId: value.id },
  //   });
  // };
  return (
    <Box ref={cardRef}>
      <Text size="xs" fontWeight="600" marginBottom="10px">
        Step {parseInt(value.id) + 1}
      </Text>
      <Box
        borderColor="#F2F2F2"
        style={boxStyle}
        d="flex"
        padding="15px"
        borderWidth="1px"
        borderRadius="xl"
      >
        <Text fontWeight="normal">{value.step}</Text>
      </Box>
    </Box>
  );
}
