import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Maximize, Minimize, PlayCircle } from "react-feather";
import ReactPlayer from "react-player";
import "./Session.scss";

export default function SessionVideo({ value, toggleWindow, isVideoMode }) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  return (
    <Box
      position="relative"
      backgroundColor="white"
      borderRadius="2xl"
      overflow="hidden"
    >
      <Box position="absolute" zIndex="1" right="10px" top="10px">
        <Button
          size="xs"
          borderRadius="50%"
          width="30px"
          height="30px"
          onClick={toggleWindow}
          boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
        >
          {isVideoMode ? <Maximize /> : <Minimize />}
        </Button>
      </Box>
      <Box>
        <div className="video-wrapper">
          <ReactPlayer
            className="react-player"
            controls={true}
            playIcon={<PlayCircle color="#fff" width="30px" />}
            playing
            url={value}
            light={true}
            width="100%"
            height="100%"
          />
        </div>
      </Box>
    </Box>
  );
}
