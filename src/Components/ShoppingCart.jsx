import React, { useContext } from "react";
import { ShoppingContext } from "../Context/ShoppingCartContext";
import Product from "./Product";
import ProductCart from "./ProductCart";

const products = [{ id: 1, name: "shoe", color: "blue" }];

export default function ShoppingCart() {
  const { cart, setCart } = useContext(ShoppingContext);
  const handleAdd = (product) => {
    setCart([...cart, product]);
  };
  console.log(cart);
  return (
    <>
      <div>ShoppingCart</div>
      {products.map((product) => {
        const { id, name, color } = product;
        return (
          <Product
            key={id}
            id={id}
            name={name}
            color={color}
            handleAdd={handleAdd}
          />
        );
      })}

      {cart.map((product) => {
        const { id, name, color } = product;
        return (
          <ProductCart key={id} name={name} color={color}></ProductCart>
        );
      })}
      
    </>
  );
}
