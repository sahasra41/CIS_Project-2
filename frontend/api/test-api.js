export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { url } = req.body;

    const start = Date.now();
    const response = await fetch(url);
    const data = await response.json();

    const time = Date.now() - start;

    res.status(200).json({
      status: response.status,
      time,
      data
    });

  } catch (error) {
    res.status(500).json({
      status: "Error",
      time: null
    });
  }
}
