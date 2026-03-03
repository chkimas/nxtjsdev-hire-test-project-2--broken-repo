import { NextRequest, NextResponse } from "next/server";
import { users } from "@/lib/users";

export async function GET(request: NextRequest) {
  if (request.method !== "GET") {
    return NextResponse.json(
      { message: "Method not allowed" },
      { status: 405 }
    );
  }

  return NextResponse.json({ users });
}

