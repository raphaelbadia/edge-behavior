import { data } from "./pagedir.data";
export default async function handler(req, res) {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current = req.headers["x-user-id"];
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  res.json(data);
}
