import { async } from "@firebase/util";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [singleUser, setSingleUser] = useState({});
  const [cartCount, setCartCount] = useState(0);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  // };

  // const userData = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8080/user");
  //     let data = await res.json();

  //     console.log("datass: ", data);
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     userData();
  //   }
  // }, [isLoggedIn]);

  return (
    <UserContext.Provider
      value={{
        // handleLogin,
        // handleLogout,
        isLoggedIn,
        setIsLoggedIn,
        setSingleUser,
        singleUser,
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
