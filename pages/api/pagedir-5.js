import { data } from "./pagedir-5.data";

export default async function handler(req, res) {
  console.log(req.headers["x-user-id"]);
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
  res.json({ initial, afterAdd, afterSub, inTheEnd });
}
