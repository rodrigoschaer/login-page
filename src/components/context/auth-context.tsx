import { useState, useEffect } from "react";
import { createContext, ReactNode } from "react";

type AuthContextType = {
  isLoggedIn?: boolean;
  onLogout: any;
  onLogin: any;
  children?: ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

type AuthContextProviderType = {
  isLoggedIn?: boolean;
  onLogout?: any;
  onLogin?: any;
  children?: ReactNode;
};

export const AuthContextProvider = (props: AuthContextProviderType) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  const logginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: logginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
