import { NextResponse } from "next/server";

export async function GET() {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

  return NextResponse.json(data);
}
