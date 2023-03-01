import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();

const initState = {
  cart: [],
  total: 0,
};

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart = () => useContext(CartContext);
export const useCartActions = () => useContext(CartContextDispatcher);
