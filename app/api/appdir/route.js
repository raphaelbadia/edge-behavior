import { NextResponse } from "next/server";

const data = {
  current: 0,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("userId");
  data.current = id;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  return NextResponse.json(data);
}
