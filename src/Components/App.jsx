import React from "react";
import ShoppingCart from "./ShoppingCart";
import ShoppingCartContext from "../Context/ShoppingCartContext";

function App() {
  return (
    <>
      <ShoppingCartContext>
        <ShoppingCart />
      </ShoppingCartContext>
    </>
  );
}

export default App;
