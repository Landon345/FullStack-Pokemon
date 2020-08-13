import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ThemeProvider } from "emotion-theming";
import PokeTheme from "./PokeTheme";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Pokedex from "./Components/Pokedex/Pokedex";
import PokemonDetail from "./Components/PokemonDetail/PokemonDetail";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <ThemeProvider theme={PokeTheme}>
        <Switch>
          <Route path="/" exact>
            {localStorage.getItem("token") ? (
              <Redirect to="/dashboard" />
            ) : (
              <Home />
            )}
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <ProtectedRoute path="/dashboard" exact component={Dashboard} />
          {/* Pokedex routes */}
          <ProtectedRoute
            path="/pokedex/detail/:id"
            exact
            component={PokemonDetail}
          />
          <ProtectedRoute path="/pokedex" exact component={Pokedex} />
          <ProtectedRoute
            path="/pokedex/page/:page"
            exact
            component={Pokedex}
          />
          {/* <ProtectedRoute
            path="/pokedex/page/:page/:query"
            exact
            component={Pokedex}
          /> */}
          <Route path="/*" component={NotFound} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
