import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { UserModel } from "@foodordering/lib/db/model/user";
import { SignJWT } from "jose";
import dbconnect from "@foodordering/lib/db/db";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    dbconnect();
    const user = await UserModel.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = await new SignJWT({ id: user._id, is_admin: user.is_admin })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("1h")
        .sign(new TextEncoder().encode(process.env.SECRET_KEY));
      return Response.json(
        {
          message: "User logged in",
          user: {
            token,
          },
        },
        {
          headers: {
            "Set-Cookie": `token=${token}; HttpOnly; Path=/; Max-Age=${
              1 * 60 * 60
            }; SameSite=Lax`,
          },
        }
      );
    }

    return Response.json({ message: "Invalid credentials" });
  } catch (error) {
    return Response.json({ message: "Internal server error" });
  }
}
