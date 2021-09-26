import { useState, useEffect } from "react";
import { Flex, Text, Spacer } from "@chakra-ui/react";
import { useRecipe } from "../data/Recipe";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Dropdown from "../components/DropdownFilter/Dropdown";

const dashboardStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gap: "20px",
  overflowX: "hidden",
  overflowY: "scroll",
};

const Dashboard = () => {
  const Recipes = useRecipe();
  const [filterPlaces, setFilterPlaces] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    let newFilteredRecipes = [];
    if (filterPlaces && filterCategory) {
      newFilteredRecipes = Recipes.filter(
        (item) => item.area === filterPlaces && item.category === filterCategory
      );
    } else if (filterPlaces) {
      newFilteredRecipes = Recipes.filter((item) => item.area === filterPlaces);
    } else if (filterCategory) {
      newFilteredRecipes = Recipes.filter(
        (item) => item.category === filterCategory
      );
    } else newFilteredRecipes = [...Recipes];
    setFilteredRecipes(newFilteredRecipes);
  }, [filterPlaces, filterCategory]);

  return (
    <div>
      <Flex
        position="sticky"
        top="0"
        justify="space-between"
        align="center"
        marginBottom="30px"
        backgroundColor="#ffffff"
        padding="10px"
        borderRadius="20px"
        boxShadow="0px 8px 24px rgba(149, 157, 165, 0.2)"
      >
        <Text fontWeight="medium">Filter Recipes By : </Text>
        <Spacer />
        <Dropdown
          filter={filterPlaces}
          setFilter={setFilterPlaces}
          url={"https://www.themealdb.com/api/json/v1/1/list.php?a=list"}
          type={"Places"}
          data={"strArea"}
        />
        <Dropdown
          filter={filterCategory}
          setFilter={setFilterCategory}
          url={"https://www.themealdb.com/api/json/v1/1/list.php?c=list"}
          type={"Category"}
          data={"strCategory"}
        />
      </Flex>
      <div style={dashboardStyle}>
        {filteredRecipes.length > 0 &&
          filteredRecipes.map((item) => {
            return <RecipeCard recipe={item} key={item.id} />;
          })}
      </div>
      <div>
        {filteredRecipes.length === 0 && (
          <Text textAlign="center" paddingTop="20px">
            No Recipes to Show
          </Text>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
