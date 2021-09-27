import React, { useState } from "react";
import Split from "react-split";

import { useParams } from "react-router-dom";
import { useDisclosure, Box } from "@chakra-ui/react";
import { useRecipe, findRecipeData } from "../data/Recipe";

import SessionInfo from "../components/Session/SessionInfo";
import SessionTodoList from "../components/Session/SessionTodoList";
import SessionVideo from "../components/Session/SessionVideo";
import SessionStep from "../components/Session/SessionStep";
import SessionModal from "../components/Session/SessionModal";
import "./Session.scss";

const Session = () => {
  let data = findRecipeData(useRecipe(), useParams().id);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isStepMode, setIsStepMode] = useState(false);

  const [allSize, setAllSize] = useState([50, 50]);
  const [leftSize, setLeftSize] = useState([40, 60]);
  const [rightSize, setRightSize] = useState([50, 50]);

  const [isIngredientCompleted, setIsIngredientCompleted] = useState(false);
  const videoModeWindow = () => {
    if (isVideoMode) {
      setAllSize([50, 50]);
      setRightSize([50, 50]);
    } else {
      setAllSize([0, 100]);
      setRightSize([100, 0]);
    }
    setIsVideoMode(!isVideoMode);
  };
  const stepModeWindow = () => {
    if (isStepMode) {
      setLeftSize([40, 60]);
    } else {
      setLeftSize([0, 100]);
    }
    setIsStepMode(!isStepMode);
  };

  return (
    <Box>
      <SessionModal isOpen={isOpen} onClose={onClose} img={data.image} />
      <Split className="flex" sizes={allSize} minSize={0} gutterSize={16}>
        <Split
          sizes={leftSize}
          gutterSize={16}
          minSize={0}
          className="split"
          direction="vertical"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <SessionInfo value={data} />
          <SessionStep
            value={data.instructions}
            mealId={data.id}
            toggleWindow={() => stepModeWindow()}
            isStepMode={isStepMode}
            isIngredientCompleted={isIngredientCompleted}
            onCompleted={onOpen}
          />
        </Split>
        <Split
          sizes={rightSize}
          gutterSize={16}
          minSize={0}
          className="split"
          direction="vertical"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <SessionVideo
            value={data.youtube}
            toggleWindow={() => videoModeWindow()}
            isVideoMode={isVideoMode}
          />
          <SessionTodoList
            value={data.ingredients}
            mealId={data.id}
            isIngredientCompleted={isIngredientCompleted}
            setIsIngredientCompleted={setIsIngredientCompleted}
          />
        </Split>
      </Split>
    </Box>
  );
};

export default Session;
