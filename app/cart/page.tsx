"use client";

import { useCart } from "@foodordering/lib/context/cart";

const CartPage = () => {
  const { items } = useCart();

  return (
    <div>
      Cart Items
      <ul>
        {items?.length> 0 && items.map((item)=>{
            return <li>{item._id}</li>
        })}
      </ul>
    </div>
  );
};

export default CartPage;
