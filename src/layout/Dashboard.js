import { useState, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { useRecipe } from "../data/Recipe";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Dropdown from "../components/DropdownFilter/Dropdown";

const dashboardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "20px",
  overflowX: "hidden",
};

const Dashboard = () => {
  const Recipes = useRecipe();
  const [filter, setFilter] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    let newFilteredRecipes = [];
    if (filter) 
      newFilteredRecipes = Recipes.filter(item => item.area === filter);
    else
      newFilteredRecipes = [...Recipes];
    setFilteredRecipes(newFilteredRecipes);
  }, [filter]);

  return (
    <div>
      <Flex>
        <Dropdown filter={filter} setFilter={setFilter}/>
      </Flex>
      <div style={dashboardStyle}>
        {filteredRecipes.map((item) => {
          return <RecipeCard recipe={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
