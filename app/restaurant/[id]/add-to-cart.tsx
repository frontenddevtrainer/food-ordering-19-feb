"use client";

import { useCart } from "@foodordering/lib/context/cart";
import { IRestaurantMenu } from "@foodordering/lib/db/model/restaurant";

interface IAddToCartProps {
  menu: IRestaurantMenu;
}

const AddToCart: React.FC<IAddToCartProps> = ({ menu }) => {
  const { addToCart } = useCart();
  return (
    <button
      onClick={() => {
        addToCart(menu);
      }}
      className="mt-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
