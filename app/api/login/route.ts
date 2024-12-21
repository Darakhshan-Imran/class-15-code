import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const requestData = await req.json();
  console.log(requestData);

  const email = requestData.email;
  const cookieStore = await cookies();

  if (!email) {
    cookieStore.set("isLoggedIn", "false");

    return NextResponse.json({ isLoggedIn: false });
  }
  cookieStore.set("isLoggedIn", "true");

  return NextResponse.json({ isLoggedIn: true });
};
