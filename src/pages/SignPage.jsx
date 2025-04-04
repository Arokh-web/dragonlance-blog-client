import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";

const SignPage = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  return <div>SignPage</div>;
};

export default SignPage;
