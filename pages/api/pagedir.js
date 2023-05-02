const data = {
  current: 0,
};

export default async function handler(req, res) {
  data.current += 1;
  res.json(data);
}
