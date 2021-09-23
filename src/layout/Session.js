import React from "react";
import { useParams } from "react-router-dom";
import { useRecipe, findRecipeData } from "../data/Recipe";
import Split from "react-split";
import "./Session.scss";
import { Box } from "@chakra-ui/react";
import SessionInfo from "../components/Session/SessionInfo";
import SessionTodoList from "../components/Session/SessionTodoList";
import SessionVideo from "../components/Session/SessionVideo";
import SessionStep from "../components/Session/SessionStep";

const Session = () => {
  let data = findRecipeData(useRecipe(), useParams().id);
  return (
    <Box>
      <Split className="flex" sizes={[40, 60]} minSize={0} gutterSize={16}>
        <Split
          gutterSize={16}
          minSize={0}
          className="split"
          direction="vertical"
          style={{ height: "calc(100vh - 72px)" }}
        >
          {data && <SessionInfo value={data} />}
          <SessionTodoList value={data.ingredients} mealId={data.id} />
        </Split>
        <Split
          gutterSize={16}
          minSize={0}
          className="split"
          direction="vertical"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <SessionVideo value={data.youtube} />

          <SessionStep value={data.instructions} mealId={data.id} />
        </Split>
      </Split>
    </Box>
  );
};

export default Session;
