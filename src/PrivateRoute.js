import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "./context/Authcontext";

const PrivateRoute = ({ children, ...rest }) => {
  const { login } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return login ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
  