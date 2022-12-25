import React, { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/Firebase.config";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { createUser };
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
