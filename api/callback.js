export default function handler(req, res) {
  const code = req.query.code;
  res.status(200).send(`OAuth callback received. Code: ${code}`);
}
