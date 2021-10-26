import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ForgetPass from "./components/Auth/ForgetPass";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Err from "./components/Err";
import MainSearch from "./components/MainSearch";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup">
          <Signup />
        </Route>

        <Route exact path="/forgetpassword">
          <ForgetPass />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <MainSearch />
        </Route>

        <Route exact path="">
          <Err />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
