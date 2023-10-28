import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)
  // create user with email
  const createUserWithEmail =(email, password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signIn with email
  const signInWithEmail =(email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logout 
  const logout =()=>{
    signOut(auth)
    .then(()=>{
      alert("signOut successfully")
    })
    .catch(error=>{
      console.log(error)
    })
  }
  // user state change 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser)
    })
    return()=>{
      unSubscribe()
    }
  },[])
  // auth value
  const authInfo = {
    theme,
    user,
    loader,
    setTheme,
    createUserWithEmail,
    signInWithEmail,
    logout
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
