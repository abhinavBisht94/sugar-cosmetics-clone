import React, { createContext, useState } from "react";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    <CartContext.Provider
      value={{ Cart, setCart, amount, setAmount, formData, setFormData }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
