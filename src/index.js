import React from "react";
import ReactDOM from "react-dom";
import { RecipeProvider } from "./data/Recipe";
import { ChakraProvider } from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <RecipeProvider>
        <Router>
          <Switch>
            <Route path="/home" render={(props) => <App {...props} />} />
            <Redirect to="/home/dashboard" />
          </Switch>
        </Router>
      </RecipeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
