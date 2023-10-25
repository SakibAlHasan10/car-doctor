import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const authInfo = {
    theme,
    setTheme,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
