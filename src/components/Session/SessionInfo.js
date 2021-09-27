import {
  Box,
  Badge,
  Image,
  Text,
  Heading,
  Flex,
  Spacer,
  Wrap,
} from "@chakra-ui/react";
import { Star, Paperclip, MoreVertical } from "react-feather";
import "./Session.scss";
export default function SessionInfo({ value }) {
  return (
    <Box overflowY="hidden" borderRadius="2xl" position="relative">
      <Image src={value.image} position="absolute" width="100%" />
      <Box className="session-info-content">
        <Wrap spacing="10px" align="center" paddingBottom="10px" wrap>
          <Text fontSize="40px" lineHeight="45px" fontWeight="600">
            {value.name + " "}
          </Text>
          <Spacer />
          <MoreVertical />
          <Wrap spacing="10px">
            <Badge colorScheme="purple" borderRadius="7px" padding="0px 4px">
              {value.area}
            </Badge>
            {value.tags.map((item, i) => {
              return (
                <Badge
                  colorScheme="yellow"
                  color="white"
                  borderRadius="7px"
                  padding="0px 4px"
                  variant="outline"
                  key={i}
                >
                  {item}
                </Badge>
              );
            })}
          </Wrap>
        </Wrap>
        <Flex paddingBottom="10px" align="center">
          <Paperclip size="15px" />
          <Text marginRight="10px">{` category : ${value.category} dish`}</Text>
        </Flex>
      </Box>
    </Box>
  );
}
