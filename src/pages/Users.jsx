import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";

const Users = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);

  return <div>Users</div>;
};

export default Users;
