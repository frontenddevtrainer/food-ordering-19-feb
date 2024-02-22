"use client";

import { IOrder } from "@foodordering/lib/db/model/order";
import { useState } from "react";

interface Props {
  order: IOrder["_id"];
  status: string;
}
const MarkAsCompleteButton: React.FC<Props> = ({ order, status }) => {
  const [orderStatus, setOrderStatus] = useState(status);

  async function markAsComplete(order: IOrder["_id"]) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/orders/${order}/complete`,
        {
          method: "PATCH",
        }
      );
      const data = await response.json();
      setOrderStatus(data.status);
    } catch (error) {}
  }

  return (
    <p>
      Status: {orderStatus}
      <button
        onClick={() => {
          markAsComplete(order);
        }}
      >
        Mark as Complete
      </button>
    </p>
  );
};

export default MarkAsCompleteButton;
