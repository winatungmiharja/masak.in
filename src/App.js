import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Flex, IconButton, Text, Grid } from "@chakra-ui/react";
import Session from "./layout/Session";
import Dashboard from "./layout/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar.js";
import { Menu } from "react-feather";
const App = () => {
  return (
    <Flex flexDirection="row" width="100%" height="100vh">
      <Sidebar />
      <Grid
        gridTemplateColumns="1fr"
        height="calc(100vh - 40px)"
        width="100%"
        bgColor="#F3F8F7"
        borderRadius="20px"
        margin="20px"
      >
        <Router>
          <Switch>
            <Route path="/home/dashboard" render={(props) => <Dashboard />} />
            <Route path="/home/session/:id" render={(props) => <Session />} />
          </Switch>
        </Router>
      </Grid>
    </Flex>
  );
};

export default App;
