const data = {
  current: 0,
};

export default async function handler(req, res) {
  const userId = req.headers["x-user-id"];
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  data.current += 1;
  data.userId = userId;

  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 1000))
  );
  res.json(data);
}
