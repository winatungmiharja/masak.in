import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import "./Session.scss";

export default function SessionVideo({ value }) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  return (
    <Box
      bg="grey"
      w="100%"
      color="gray.500"
      borderRadius={2}
      className="overflow "
    >
      <div className="session-video-player-wrapper">
        <ReactPlayer
          width="100%"
          url={value}
          controls
          onStart={() => console.log("start video")}
          onReady={() => setIsVideoReady(true)}
        />

        {!isVideoReady && <div className="video-loader"></div>}
      </div>
    </Box>
  );
}
