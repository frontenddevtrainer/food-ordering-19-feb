import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { UserModel } from "./lib/db/model/user";
import dbconnect from "@foodordering/lib/db/db";

export async function middleware(request: NextRequest) {
  dbconnect();
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get("token");

  const { payload } = await jwtVerify(
    tokenCookie?.value as string,
    new TextEncoder().encode(process.env.SECRET_KEY)
  );

  const { is_admin } = payload;

  const adminRoutes = ["/admin/orders"];

  console.log(process.env);

  if (adminRoutes.includes(pathname) && !is_admin) {
    return NextResponse.redirect(`${process.env.BASE_URL}/login`);
  }
}
