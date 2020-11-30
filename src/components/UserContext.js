import React, {createContext } from "react";
import {useLocalStorage} from "../hooks/UseLocalStorage"

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const [user, setUser] = useLocalStorage("user", null)
  const [isLogged, setIsLogged] = useLocalStorage("isLogged", false)
  const [cartItems, setCartItems] = useLocalStorage("cartItems", [])
  const userInfo = {user, setUser, cartItems, setCartItems, isLogged, setIsLogged}

  return (
    <UserContext.Provider value={userInfo}>
      {props.children}
    </UserContext.Provider>
  );
};
