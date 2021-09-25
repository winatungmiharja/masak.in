import React, { useReducer, useContext, createContext } from "react";

const RecipeStateContext = createContext();
const RecipeDispatchContext = createContext();

//function yg nerima object data buat ambil ingredients dan
//amount nya dijadikan satu array
const selectIngredients = (data) => {
  let ingredients = [];
  let iterator = 1;
  while (data[`strIngredient${iterator}`]) {
    if (data[`strIngredient${iterator}`].length === 0) {
      break;
    } else {
      ingredients.push({
        id: iterator,
        name: data[`strIngredient${iterator}`],
        qty: data[`strMeasure${iterator}`],
        //untuk todolist
        checked: false,
      });
      iterator++;
    }
  }
  return ingredients;
};

//function buat nge split instructions dan diubah jadi array of object
const selectInstructions = (instructions) => {
  let steps = instructions.split(/[\r\n.]\s+/);
  let instructionStepByStep = [];
  for (let iterator in steps) {
    instructionStepByStep.push({
      id: iterator,
      step: steps[iterator],
      checked: false,
    });
  }
  return instructionStepByStep;
};

const fetchRecipe = (state, data) => {
  let recipeData = data.map((item, i) => {
    return {
      id: item.idMeal,
      name: item.strMeal,
      category: item.strCategory,
      area: item.strArea,
      instructions: selectInstructions(item.strInstructions),
      tags: item.strTags ? item.strTags.split(",") : ["no tags"], //tags nya banyak, atau tidak ada
      image: item.strMealThumb,
      youtube: item.strYoutube,
      ingredients: selectIngredients(item),
      source: item.strSource ? item.strSource : "no source",
      isDone: false,
    };
  });
  window.localStorage.setItem("state", JSON.stringify(recipeData));
  return [...recipeData];
};

const updateStep = (state, data) => {
  const newState = state.map((item) => {
    if (item.id === data.mealId) {
      let newInstructions = item.instructions.map((step) => {
        if (step.id === data.stepId) {
          return { ...step, checked: true };
        } else return { ...step };
      });
      return { ...item, instructions: newInstructions };
    } else {
      return { ...item };
    }
  });
  return [...newState];
};

const updateTodo = (state, data) => {
  const newState = state.map((item) => {
    if (item.id === data.mealId) {
      let newIngredients = item.ingredients.map((ingredient) => {
        if (ingredient.id === data.todoId) {
          return { ...ingredient, checked: !data.isChecked };
        } else return { ...ingredient };
      });
      return { ...item, ingredients: newIngredients };
    } else {
      return { ...item };
    }
  });
  return [...newState];
};

const updateAll = (state, data) => {
  const newState = state.map((item) => {
    if (item.id === data.mealId) {
      let newIngredients = item.ingredients.map((ingredient) => {
        return { ...ingredient, checked: !data.isChecked };
      });
      return { ...item, ingredients: newIngredients };
    } else {
      return { ...item };
    }
  });
  return [...newState];
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return fetchRecipe(state, action.data);
    case "UPDATE STEP":
      return updateStep(state, action.data);
    case "UPDATE TODO":
      return updateTodo(state, action.data);
    case "UPDATE ALL":
      return updateAll(state, action.data);
    default:
      return state;
  }
};

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <RecipeDispatchContext.Provider value={dispatch}>
      <RecipeStateContext.Provider value={state}>
        {children}
      </RecipeStateContext.Provider>
    </RecipeDispatchContext.Provider>
  );
};

export const useRecipe = () => useContext(RecipeStateContext);
export const useDispatchRecipe = () => useContext(RecipeDispatchContext);
export const findRecipeData = (data, id) => {
  for (let item of data) {
    if (item.id === id) {
      return item;
    }
  }
  return null;
};
