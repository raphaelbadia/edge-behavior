import { NextResponse } from "next/server";

const data = {
  current: 0,
};

export async function GET(request) {
  const id = request.headers.get("x-user-id");
  console.log();
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current = id;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  return NextResponse.json(data, {
    headers: {
      "content-type": "application/json",
      "cache-control": "private",
    },
  });
}
