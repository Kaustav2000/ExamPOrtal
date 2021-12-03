import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        localStorage.getItem("token") === "" ? children : <Navigate to="/" />
      }
    />
  );
};

export default PrivateRoute;
