import React, { createContext, useState, useEffect } from 'react';
import * as auth from "../auth";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  async function signIn(loginData) {
    try {
      const loggedUser = await auth.signIn(loginData);
      setUser(loggedUser);
      localStorage.setItem('storagedUser', JSON.stringify(loggedUser));
    } catch (error) {
      return true
    }
  }

  useEffect(() => {
     function loadStorageData() {
      const storagedUser = localStorage.getItem('storagedUser');

      if (storagedUser) {
        setUser(JSON.parse(storagedUser));
      }
      
    }

    loadStorageData();
  }, []);

  async function signOut() {
    setUser(null);
    localStorage.clear()
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext; 