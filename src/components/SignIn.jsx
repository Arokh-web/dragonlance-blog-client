import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";

const SignIn = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  return <div>SignIn</div>;
};

export default SignIn;
