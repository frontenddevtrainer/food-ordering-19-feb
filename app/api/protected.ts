import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get("token");

  const adminRoutes = ["/api/admin/orders"];

  if (
    adminRoutes.some((route) => {
      return pathname.startsWith(route);
    })
  ) {
    if (tokenCookie) {
      try {
        const { payload } = await jwtVerify(
          tokenCookie?.value as string,
          new TextEncoder().encode(process.env.SECRET_KEY)
        );

        const { is_admin } = payload;
        if (is_admin) {
          NextResponse.next();
        }
      } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "invalid user" }, { status: 401 });
      }
    } else {
      return NextResponse.json({ message: "invalid user" }, { status: 401 });
    }
  }
  return NextResponse.next();
}
