import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { createContext } from "react";
import { auth } from "../auth/firebase";

export const AuthContex = createContext();

const AuthContextProvider = ({ children }) => {
  const createUser = async (email, password) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { createUser };
  return <AuthContex.Provider value={values}>{children}</AuthContex.Provider>;
};

export default AuthContextProvider;
