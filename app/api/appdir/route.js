import { NextResponse } from "next/server";

const data = {
  current: 0,
};

export async function GET(request) {
  data.current += 1;
  return NextResponse.json(data);
}
