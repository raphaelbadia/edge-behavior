import { NextResponse } from "next/server";
import { add, del, getAll } from "./data";
export async function GET(request) {
  const userId = request.headers.get("x-user-id");
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  add(userId);
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  del(userId);
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  return NextResponse.json(getAll(), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  });
}
