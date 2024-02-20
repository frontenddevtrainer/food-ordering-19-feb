import { OrderModel } from "@foodordering/lib/db/model/order";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const itemForOrder = body?.map((item: any) => {
    return { item: item["_id"], quantity: item["quantity"] };
  });

  const total = body.reduce((accu: any, curr: any) => {
    return accu + curr["quantity"] * curr["price"];
  }, 0);

  const orderBody: any = {
    items: itemForOrder,
    status: "pending",
    total: total,
  };

  const order = new OrderModel(orderBody);
  const savedOrder = await order.save();

  return Response.json({ message: "Order Placed", order: savedOrder });
}
