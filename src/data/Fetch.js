export const FetchRecipe = async () => {
  try {
    const request = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s="
    );
    const data = request.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const FetchArea = async () => {
  try {
    const request = await fetch(
      "www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data = request.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};