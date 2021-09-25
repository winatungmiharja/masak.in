import { useEffect, useState } from "react";

import { useDispatchRecipe } from "../data/Recipe";
import { FetchRecipe } from "../data/Fetch";
import { useRecipe } from "../data/Recipe";
import { Flex } from "@chakra-ui/react";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SkeletonElement from "../skeletons/SkeletonElement";
import "./Dashboard.scss";

const Dashboard = () => {
  const [isFetchingData, setIsFetchingData] = useState(1);
  const dispatch = useDispatchRecipe();

  useEffect(() => {
    FetchRecipe().then((data) =>
      setTimeout(() => {
        dispatch({ type: "FETCH", data: data.meals });
        setIsFetchingData(false);
      }, 20)
    );
  }, []);

  const Recipes = useRecipe();
  return (
    <div className="dashboard-wrapper">
      {isFetchingData ? (
        // <p>Loading Data....</p>
        <div>
          <SkeletonElement/>
          <SkeletonElement/>
          <SkeletonElement/>
        </div>
      ) : (
        Recipes.map((item) => {
          return <RecipeCard recipe={item} key={item.id} />;
        })
      )}
    </div>
  );
};

export default Dashboard;
