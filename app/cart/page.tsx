"use client";

import { useCart } from "@foodordering/lib/context/cart";
import { IRestaurantMenu } from "@foodordering/lib/db/model/restaurant";

const CartPage = () => {
  const { items, clearCart } = useCart();

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

  async function placeorder() {
    const response = await fetch("http://localhost:3000/api/cart/placeorder", {
      method: "POST",
      body: JSON.stringify(Object.values(groupedById)),
    });
    const data = await response.json();
    clearCart();
    window.history.pushState(null, "", `/orders/${data.order._id}`);
  }

  return (
    <div>
      Cart Items
      <ul>
        {Object.values(groupedById)?.length > 0 &&
          Object.values(groupedById).map((item) => {
            console.log(item);
            return (
              <li>
                {item.item} {item.quantity}
              </li>
            );
          })}
      </ul>
      <button onClick={placeorder}>Place order</button>
    </div>
  );
};

export default CartPage;
