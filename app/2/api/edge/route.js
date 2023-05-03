import { NextResponse } from "next/server";

const data = {
  current: 0,
};

export async function GET(request) {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current += 1;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  return NextResponse.json(data);
}

export const runtime = "experimental-edge";
