import { IOrder, OrderModel } from "@foodordering/lib/db/model/order";
import MarkAsCompleteButton from "./mark-as-complete";

function ordersList(docs: IOrder[]) {
  if (!docs || (docs && docs.length === 0)) {
    return (
      <tr>
        <td>No records found.</td>
      </tr>
    );
  }

  return (
    docs?.length > 0 &&
    docs.map((order) => {
      return (
        <tr key={order._id}>
          <td>{order._id}</td>
          <td>{order.items.length}</td>
          <td>{order.total}</td>
          <td>{order.status}</td>
          <td>
            <MarkAsCompleteButton order={order._id} />
          </td>
        </tr>
      );
    })
  );
}

// RSC
const AdminOrdersPage = async () => {
  const docs = await OrderModel.find({});

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
          </tr>
        </thead>
        <tbody>{ordersList(docs)}</tbody>
      </table>
    </div>
  );
};

export default AdminOrdersPage;
