import { NextResponse } from "next/server";

const data = {
  current: 0,
};

export async function GET(request) {
  const userId = request.headers.get("x-user-id");
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current += 1;
  data.userId = userId;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  return NextResponse.json(data, {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
  });
}
