import { Box, Button, Image, Flex, Badge, Text } from "@chakra-ui/react";
// import react from 'react';
import "./Skeleton.scss";

const SkeletonElement = ({ type }) => {
  // const classes = `skeleton ${type}`;

  return (
    <div>
      <Box p="5" borderWidth="1px">
        <div className="skeleton thumbnail" />
        <div className="skeleton text1" />
        <div className="skeleton title" />
        <div className="skeleton text2" />
      </Box>
    </div>
  );
};

export default SkeletonElement;
