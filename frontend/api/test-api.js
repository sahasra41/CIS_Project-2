export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { url } = req.body;

    const start = Date.now();

    const response = await fetch(url);

    let data;
    try {
      data = await response.json();
    } catch {
      data = await response.text();
    }

    const time = Date.now() - start;

    return res.status(200).json({
      status: response.status,
      time,
      data
    });

  } catch (error) {
    return res.status(500).json({
      status: "Error",
      time: null,
      error: error.message
    });
  }
}
