import { useEffect, useState } from "react";

import { useDispatchRecipe } from "../data/Recipe";
import { FetchRecipe } from "../data/Fetch";
import { useRecipe } from "../data/Recipe";
import { Flex } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SkeletonElement from "../components/Skeleton/SkeletonElement";
import Dropdown from "../components/DropdownFilter/Dropdown";

const dashboardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "20px",
  overflowX: "hidden",
};
const Dashboard = ({ recipes, isFetchingData }) => {
  const Recipes = useRecipe();

  return (
    <div>
      <Flex>
        <Dropdown />
      </Flex>
      <div style={dashboardStyle}>
        {
          Recipes.map((item) => {
            return <RecipeCard recipe={item} key={item.id} />;
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
