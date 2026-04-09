const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

app.post("/test-api", async (req, res) => {
  const url = req.body.url;

  try {
    const start = Date.now();

    const response = await fetch(url);
    const data = await response.json();

    const time = Date.now() - start;

    res.json({
      status: response.status,
      time: time,
      data: data
    });

  } catch (error) {
    res.json({
      status: "Error",
      time: null
    });
  }
});

// ✅ THIS MUST BE ONLY HERE
app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});