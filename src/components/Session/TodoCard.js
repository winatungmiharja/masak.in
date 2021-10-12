import { useDispatchRecipe } from "../../data/Recipe";
import "./Session.scss";
import { Box, Text, Image, Checkbox, Spacer } from "@chakra-ui/react";

export default function TodoCard({ value, mealId, disabled }) {
  const dispatch = useDispatchRecipe();
  const updateTodo = () => {
    dispatch({
      type: "UPDATE TODO",
      data: { mealId: mealId, todoId: value.id, isChecked: value.checked },
    });
  };
  return (
    <Box borderColor="black" d="flex" p="1">
      <Image
        borderColor="black"
        maxWidth="50px"
        borderRadius="md"
        marginRight="20px"
        src={`https://www.themealdb.com/images/ingredients/${value.name}-small.png`}
      />
      <Box>
        <Text fontWeight="normal">{value.name}</Text>

        <Text color="gray.400">
          {value.qty} {value.checked && <span>&bull; done</span>}
        </Text>
      </Box>
      <Spacer />
      {disabled ? (
        <Checkbox
          size="lg"
          colorScheme="orange"
          isChecked={value.checked}
          disabled={disabled}
        />
      ) : (
        <Checkbox
          size="lg"
          colorScheme="orange"
          onChange={updateTodo}
          isChecked={value.checked}
          disabled={disabled}
        />
      )}
    </Box>
  );
}
