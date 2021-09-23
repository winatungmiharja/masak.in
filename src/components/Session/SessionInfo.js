import React from "react";
import { Box, Badge, Image, Text, Heading } from "@chakra-ui/react";
import { Star } from "react-feather";
import "./Session.scss";
export default function SessionInfo({ value }) {
  return (
    <div className="session-info">
      <Box h={10} className="sticky-header"></Box>
      <div>
        <Image src={value.image} />
      </div>
    </div>
  );
}
