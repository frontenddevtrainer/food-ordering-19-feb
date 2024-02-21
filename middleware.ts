import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get("token");

  const adminRoutes = ["/admin/orders"];

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
        return NextResponse.redirect(`${process.env.BASE_URL}/login`);
      }
    } else {
      return NextResponse.redirect(`${process.env.BASE_URL}/login`);
    }
  }
  return NextResponse.next();
}
