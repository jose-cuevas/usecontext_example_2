import React from "react";
import { useState } from "react";

 
export const ShoppingContext = React.createContext({});

export default function ShoppingCartContext({ children }) {
const [cart, setCart] = useState([])


  return <ShoppingContext.Provider value={{cart, setCart}}>{children}</ShoppingContext.Provider>;
}
