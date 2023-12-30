import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  

  const getTotalItems = () => {
    const totalItems = cartItems.reduce((total, item) => total + item.cantidad, 0);
    console.log('Total de items en el carrito:', totalItems);
    return totalItems;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
