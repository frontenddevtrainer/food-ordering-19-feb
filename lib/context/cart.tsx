import { createContext, useContext, useEffect, useState } from "react";
import { IRestaurantMenu } from "../db/model/restaurant";

interface ICartContext {
  items: IRestaurantMenu[];
  removeFromCart(itemname: IRestaurantMenu): void;
  addToCart(item: IRestaurantMenu): void;
  clearCart(): void;
}

const CartContext = createContext<ICartContext>({
  items: [],
  removeFromCart: () => {},
  addToCart: () => {},
  clearCart: () => {},
});

interface ICartProvider {
  children: React.ReactNode;
}

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<ICartProvider> = ({ children }) => {
  const [items, setItems] = useState<IRestaurantMenu[]>([]);

  useEffect(() => {
    const itemListString = window.localStorage.getItem("cart") || "[]";
    const itemList = JSON.parse(itemListString);
    setItems(itemList);
  }, []);

  const addToCart = (item: IRestaurantMenu) => {
    const updatedItems = [...items, item];
    setItems(updatedItems);
    window.localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const removeFromCart = (itemname: IRestaurantMenu) => {
    setItems(
      items.filter((item) => {
        item._id !== itemname._id;
      })
    );
  };

  const clearCart = () => {
    setItems([]);
    window.localStorage.setItem("cart", "[]");
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
