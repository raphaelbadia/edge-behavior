import { NextResponse } from "next/server";

const data = {
  current: 0,
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const FUCKTHECACHE = searchParams.get("WHOCARES");
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current += 1;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  return NextResponse.json(
    { ...data, fuck: new Date().toISOString() },
    {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    }
  );
}
