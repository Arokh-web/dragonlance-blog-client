import React from "react";
import { useContext } from "react";
import { AuthContext } from "../App";

const Profile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);

  return <div>Profile</div>;
};

export default Profile;
