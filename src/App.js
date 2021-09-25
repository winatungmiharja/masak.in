import { useEffect, useState } from "react";
import { FetchRecipe } from "./data/Fetch";
import { useDispatchRecipe } from "./data/Recipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex, IconButton, Text, Grid } from "@chakra-ui/react";
import Session from "./layout/Session";
import Dashboard from "./layout/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar.js";
import { Menu } from "react-feather";
const App = () => {
  const [isFetchingData, setIsFetchingData] = useState(true);
  const dispatch = useDispatchRecipe();
  useEffect(() => {
    FetchRecipe().then((data) =>
      setTimeout(() => {
        dispatch({ type: "FETCH", data: data.meals });
        setIsFetchingData(false);
      }, 20)
    );
  }, []);
  return (
    <Flex flexDirection="row" width="100%" height="100%">
      <Sidebar />
      <Grid
        gridTemplateColumns="1fr"
        width="100%"
        height="calc(100vh - 40px)"
        bgColor="#F3F8F7"
        borderRadius="20px"
        padding="20px"
        margin="20px"
      >
        {isFetchingData === false && (
          <Router>
            <Switch>
              <Route path="/home/dashboard" render={(props) => <Dashboard />} />
              <Route path="/home/session/:id" render={(props) => <Session />} />
            </Switch>
          </Router>
        )}
      </Grid>
    </Flex>
  );
};

export default App;