const data = {
  current: 0,
};

export default async function handler(req, res) {
  // await new Promise((resolve) =>
  //   setTimeout(resolve, Math.floor(Math.random() * 1000))
  // );
  data.current = req.query.userId;
  // await new Promise((resolve) =>
  //   setTimeout(resolve, Math.floor(Math.random() * 1000))
  // );
  res.json(data);
}
