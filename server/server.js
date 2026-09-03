const express = require("express");
const cors = require("cors");
const { getJson } = require("serpapi");
require("dotenv").config();

console.log("API key loaded:", !!process.env.SERPAPI_KEY);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/search", async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({
      error: "Search query is required",
    });
  }

  try {
    const results = await getJson({
      engine: "google",
      q: query,
      location: "United States",
      hl: "en",
      gl: "us",
      api_key: process.env.SERPAPI_KEY,
    });

    res.json(results);
  } catch (error) {
  console.error("FULL SerpAPI error:", error);

  res.status(500).json({
    error: error.message || "Something went wrong while searching"
  });
}
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});