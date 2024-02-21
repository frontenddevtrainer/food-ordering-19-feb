import { OrderModel } from "@foodordering/lib/db/model/order";
import { NextRequest, NextResponse } from "next/server";
import dbconnect from "@foodordering/lib/db/db"

export async function PATCH(req: NextRequest) {
  try {
    dbconnect();
    const body = await req.json();
    const { id } = body;
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
