import { createContext, useContext, useState } from "react";
import { IRestaurantMenu } from "../db/model/restaurant";

interface ICartContext {
  items: IRestaurantMenu[];
  removeFromCart(itemname: IRestaurantMenu): void;
  addToCart(item: IRestaurantMenu): void;
}

const CartContext = createContext<ICartContext>({
  items: [],
  removeFromCart: () => {},
  addToCart: () => {},
});

interface ICartProvider {
  children: React.ReactNode;
}

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<ICartProvider> = ({ children }) => {
  const [items, setItems] = useState<IRestaurantMenu[]>([]);

  const addToCart = (item: IRestaurantMenu) => {
    setItems([...items, item]);
  };

  const removeFromCart = (itemname: IRestaurantMenu) => {
    setItems(
      items.filter((item) => {
        item._id !== itemname._id;
      })
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
