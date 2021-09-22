import React from "react";
import { useDispatchRecipe } from "../../data/Recipe";

export default function StepCard({ value, mealId }) {
  const dispatch = useDispatchRecipe();
  const updateToDone = () => {
    dispatch({
      type: "UPDATE STEP",
      data: { mealId: mealId, stepId: value.id },
    });
  };
  return (
    <div style={{ display: "inline-block" }}>
      <h1>{value.step}</h1>
      <h1>{value.checked ? "Done" : "Not Done"}</h1>
      <button onClick={() => updateToDone()}>Done</button>
    </div>
  );
}
