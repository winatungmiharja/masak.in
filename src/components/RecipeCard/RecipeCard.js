import { Box, Image, Flex, Badge, Text, Wrap } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <Box p="5" borderWidth="1px" borderRadius="20px">
        <Link to={`/home/session/${parseInt(recipe.id)}`}>
          <Image borderRadius="md" src={recipe.image} />
          <Flex align="baseline" mt={2}>
            <Wrap spacing="5px">
              <Badge colorScheme="purple" borderRadius="7px" padding="0px 4px">
                {recipe.area}
              </Badge>
              <Badge colorScheme="orange" borderRadius="7px" padding="0px 4px">
                {recipe.category}
              </Badge>
            </Wrap>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {recipe.name}
          </Text>
          <Text mb={2}>
            {`${recipe.ingredients.length} Ingredients`} &bull;{" "}
            {`${recipe.instructions.length} Steps`}
          </Text>
          <Wrap>
            {recipe.tags.map((item, i) => {
              if (i < 2) {
                return (
                  <Badge
                    colorScheme="yellow"
                    borderRadius="7px"
                    padding="0px 4px"
                    variant="outline"
                    key={i}
                  >
                    {item}
                  </Badge>
                );
              } else if (i === 2) {
                return (
                  <Text
                    colorScheme="yellow"
                    borderRadius="7px"
                    padding="0px 4px"
                    variant="outline"
                    key={i}
                  >
                    & {recipe.tags.length - 2} more
                  </Text>
                );
              }
            })}
          </Wrap>
        </Link>
      </Box>
    </>
  );
};

export default RecipeCard;
