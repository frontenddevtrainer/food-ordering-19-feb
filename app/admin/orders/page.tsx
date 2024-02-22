import { IOrder, OrderModel } from "@foodordering/lib/db/model/order";
import MarkAsCompleteButton from "./mark-as-complete";
import dbconnect from "@foodordering/lib/db/db";
import { Table } from "react-bootstrap";

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
          <td>
            <MarkAsCompleteButton order={order._id} status={order.status} />
          </td>
        </tr>
      );
    })
  );
}

// RSC
const AdminOrdersPage = async () => {
  dbconnect();
  const docs = await OrderModel.find({ is_deleted: { $exists: false } });

  return (
    <div>
      <Table className="striped bordered hover">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{ordersList(docs)}</tbody>
      </Table>
    </div>
  );
};

export default AdminOrdersPage;
