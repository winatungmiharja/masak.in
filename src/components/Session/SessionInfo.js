import React from "react";
import { Box, Badge, Image, Text, Heading } from "@chakra-ui/react";
import { Star } from "react-feather";
import "./Session.scss";
export default function SessionInfo({ value }) {
  return (
    <Box>
      <Image src={value.image} />
    </Box>
  );
}
