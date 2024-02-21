import { NextRequest } from "next/server";
import { UserModel } from "@foodordering/lib/db/model/user";
import { jwtVerify } from "jose";
import dbconnect from "@foodordering/lib/db/db";

export async function GET(req: NextRequest) {
  try {
    dbconnect();

    const tokenCookie = req.cookies.get("token");

    if (!tokenCookie) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }

    try {
      const { payload } = await jwtVerify(
        tokenCookie.value,
        new TextEncoder().encode(process.env.SECRET_KEY)
      );

      const { id } = payload;
      const user = await UserModel.findById(id, { password: 0, __v: 0 }).lean();

      return Response.json({ message: "user info", user });
    } catch (error) {
      return Response.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
