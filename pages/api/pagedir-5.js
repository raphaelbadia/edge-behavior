import { data } from "./pagedir-5.data";

export default async function handler(req, res) {
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
  res.json({
    user: req.headers["x-user-id"],
    initial,
    afterAdd,
    afterSub,
    inTheEnd,
  });
}
