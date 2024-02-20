"use client";

import { useCart } from "@foodordering/lib/context/cart";
import { IRestaurantMenu } from "@foodordering/lib/db/model/restaurant";

const CartPage = () => {
  const { items } = useCart();

  const groupedById = items.reduce<{ [key: string]: IRestaurantMenu }>(
    (accu, curr: IRestaurantMenu) => {
      const quantity = accu[curr._id]?.quantity
        ? accu[curr._id]?.quantity + 1
        : 1;

      return {
        ...accu,
        [curr._id]: { ...curr, quantity },
      };
    },
    {}
  );
  
  return (
    <div>
      Cart Items
      <ul>
        {Object.values(groupedById)?.length > 0 &&
          Object.values(groupedById).map((item) => {
            console.log(item);
            return <li>{item.item} {item.quantity}</li>;
          })}
      </ul>
    </div>
  );
};

export default CartPage;
