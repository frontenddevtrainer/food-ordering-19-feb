import { createContext, useContext, useState } from "react";

interface ICartContext {
  items: string[];
  removeFromCart(itemname: string): void;
  addToCart(item: string): void;
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
  const [items, setItems] = useState<string[]>([]);

  const addToCart = (item: string) => {
    setItems([...items, item]);
  };

  const removeFromCart = (itemname: string) => {
    setItems(
      items.filter((item) => {
        item !== itemname;
      })
    );
  };

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
