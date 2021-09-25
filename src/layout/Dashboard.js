import { useEffect, useState } from "react";

import { useDispatchRecipe } from "../data/Recipe";
import { FetchRecipe } from "../data/Fetch";
import { useRecipe } from "../data/Recipe";
import { Flex } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const dashboardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "20px",
  overflowX: "hidden",
};
const Dashboard = ({ recipes, isFetchingData }) => {
  const Recipes = useRecipe();

  return (
    <div style={dashboardStyle}>
      {isFetchingData ? (
        <p>Loading Data....</p>
      ) : (
        Recipes.map((item) => {
          return <RecipeCard recipe={item} key={item.id} />;
        })
      )}
    </div>
  );
};

export default Dashboard;
