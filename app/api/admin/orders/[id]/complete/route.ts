import { OrderModel } from "@foodordering/lib/db/model/order";
import { NextResponse } from "next/server";
import dbconnect from "@foodordering/lib/db/db";
import { NextApiRequest } from "next";

// /api/admin/orders/[id]/complete

export async function PATCH(
  req: NextApiRequest,
  { params }: { params: { id: string } }
) {
  try {
    dbconnect();
    const id = params.id;
    const doc = await OrderModel.findByIdAndUpdate(id, { status: "completed" });
    return NextResponse.json({ message: "order updated successfully" });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "internal servedadr error" },
      { status: 500 }
    );
  }
}
