import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LogoutButton = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <button onClick={logOut}>
      Log Out
    </button>
  );
};

export default LogoutButton;