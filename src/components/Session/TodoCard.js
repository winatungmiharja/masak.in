import React from "react";
import { useDispatchRecipe } from "../../data/Recipe";
import "./Session.scss";

export default function TodoCard({ value, mealId }) {
  const dispatch = useDispatchRecipe();
  const addToDone = () => {
    dispatch({
      type: "UPDATE TODO",
      data: { mealId: mealId, todoId: value.id },
    });
  };
  return (
    <div className="todo-card-wrapper">
      <h1>{`${value.name} -> ${value.qty}`}</h1>
      <span>{!value.checked ? "belum" : "sudah"}</span>
      <button onClick={() => addToDone()}>Sudah selesai</button>
    </div>
  );
}
