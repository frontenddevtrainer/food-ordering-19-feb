"use client";

import { IOrder } from "@foodordering/lib/db/model/order";

interface Props {
  order: IOrder["_id"];
}
const MarkAsCompleteButton: React.FC<Props> = ({ order }) => {
  async function markAsComplete(order: IOrder["_id"]) {
    const response = await fetch(
      `http://localhost:3000/api/admin/orders/${order}/complete`,
      {
        method: "PATCH",
      }
    );

    const doc = response.json();
  }

  return (
    <button
      onClick={() => {
        markAsComplete(order);
      }}
    >
      Mark as Complete
    </button>
  );
};

export default MarkAsCompleteButton;
