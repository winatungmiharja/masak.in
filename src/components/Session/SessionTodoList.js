import React from "react";
import { Box, Text } from "@chakra-ui/react";
import TodoCard from "./TodoCard";
import "./Session.scss";
export default function SessionTodoList({ value, mealId }) {
  return (
    <Box className="session-todo-list">
      <Box className="header">
        <Text>To-do List</Text>
      </Box>
      <div className="todo-item">
        {value.map((item) => {
          return <TodoCard value={item} mealId={mealId} />;
        })}
      </div>
    </Box>
  );
}
