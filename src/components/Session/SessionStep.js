import React, { useState } from "react";
import { Box, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import { ArrowRightCircle, CornerLeftUp } from "react-feather";
import { Maximize2, Minimize2 } from "react-feather";
import StepCard from "./StepCard";
import "./Session.scss";

export default function SessionStep({
  value,
  mealId,
  toggleWindow,
  isStepMode,
  isIngredientCompleted,
  onCompleted,
}) {
  const [active, setActive] = useState(0);
  const blurStyle = isIngredientCompleted ? "scroll" : "hidden";
  const totalSteps = value.length;
  const nextCard = () => {
    if (active < totalSteps - 1) setActive(active + 1);
    else if (active === totalSteps - 1) onCompleted();
  };
  const prevCard = () => {
    if (active >= 1) setActive(active - 1);
  };

  return (
    <Box
      backgroundColor="white"
      borderRadius="2xl"
      d="flex"
      flexDirection="column"
      height="auto"
      overflowY="hidden"
      position="relative"
    >
      <Box padding="20px">
        <Box position="absolute" zIndex="1" right="10px" top="10px">
          <Button
            size="xs"
            borderRadius="50%"
            width="30px"
            height="30px"
            onClick={toggleWindow}
            boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
            className="rotate-button"
          >
            {isStepMode ? (
              <Minimize2 color="black" />
            ) : (
              <Maximize2 color="black" />
            )}
          </Button>
        </Box>
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
        overflowY={blurStyle}
        overflowX="hidden"
        d="grid"
        gridTemplateColumns="1fr"
        gridRowGap="20px"
        position="relative"
      >
        {!isIngredientCompleted && (
          <Box
            zIndex="3"
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            width="100%"
            height="100%"
            backdropFilter="blur(2px)"
          ></Box>
        )}

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
      <Box padding="20px" backgroundColor="#333333">
        <Flex direction="row">
          <Flex direction="column" paddingRight="30px">
            <Text color="gray.400">Step</Text>
            <Text fontSize="sm" color="white" fontWeight="600">
              {active + 1}
            </Text>
          </Flex>
          <Flex direction="column" paddingLeft="30px" borderLeftWidth="1px">
            <Text color="gray.400">Remaining Steps</Text>
            <Text fontSize="sm" color="white" fontWeight="600">
              {active === totalSteps - 1
                ? "Done !"
                : `${totalSteps - active - 1} steps`}
            </Text>
          </Flex>
          <Spacer />
          <Flex justify="right" wrap="wrap">
            {active === totalSteps - 1 ? (
              <Button
                rightIcon={<ArrowRightCircle color="white" />}
                marginLeft="10px"
                colorScheme="orange"
                variant="solid"
                size="sm"
                onClick={nextCard}
                disabled={!isIngredientCompleted}
              >
                <Text fontSize="sm" color="white">
                  Complete!
                </Text>
              </Button>
            ) : (
              <Button
                rightIcon={<ArrowRightCircle color="white" />}
                marginLeft="10px"
                backgroundColor="#82AAAD"
                variant="solid"
                size="sm"
                onClick={nextCard}
                disabled={!isIngredientCompleted}
              >
                <Text fontSize="sm" color="white">
                  Next Step
                </Text>
              </Button>
            )}

            <Button
              rightIcon={<CornerLeftUp />}
              marginLeft="10px"
              backgroundColor="grey.500"
              variant="outline"
              size="sm"
              color="white"
              onClick={prevCard}
              disabled={!isIngredientCompleted}
            >
              <Text>Undo</Text>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
