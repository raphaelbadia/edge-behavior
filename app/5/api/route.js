import { NextResponse } from "next/server";
import { data } from "./data";

export async function GET(request) {
  const initial = data.current;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current += 1;
  const afterAdd = data.current;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current -= 1;
  const afterSub = data.current;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  const inTheEnd = data.current;
  return NextResponse.json(
    { initial, afterAdd, afterSub, inTheEnd },
    {
      headers: {
        "content-type": "application/json",
        "cache-control": "private",
      },
    }
  );
}
