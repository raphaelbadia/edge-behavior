import { add, del, getAll } from "./pagedir4.data";

export default async function handler(req, res) {
  const userId = req.headers["x-user-id"];
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  add(userId);
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 2000))
  );
  del(userId);
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  res.json(getAll());
}
