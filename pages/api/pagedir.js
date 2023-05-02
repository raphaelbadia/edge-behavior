const data = {
  current: 0,
};

export default async function handler(req, res) {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 3000))
  );
  data.current = req.query.userId;
  await new Promise((resolve) =>
    setTimeout(resolve, Math.floor(Math.random() * 3000))
  );
  res.json(data);
}
