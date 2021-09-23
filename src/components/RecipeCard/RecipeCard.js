import { Box, Button, Image, Flex, Badge, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { MdStar } from "react-icons/md";

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <Box p="5" borderWidth="1px">
        <Image borderRadius="md" src={recipe.image} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {recipe.name}
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          {/* <Box as={MdStar} color="orange.400" /> */}
          <Text ml={1} fontSize="sm">
            <b>"{recipe.id}"</b> (190)
          </Text>

          <Link to={`/home/session/${parseInt(recipe.id)}`}>
            {" "}
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"pink.400"}
              _hover={{
                bg: "pink.300",
              }}
            >
              Ke Session
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
};

export default RecipeCard;
