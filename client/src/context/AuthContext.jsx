import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("auth-token");
    setAuthToken(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
