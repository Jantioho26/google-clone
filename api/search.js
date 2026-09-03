const { getJson } = require("serpapi");

module.exports = async (req, res) => {
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

    return res.status(200).json(results);
  } catch (error) {
    console.error("SerpAPI error:", error);

    return res.status(500).json({
      error: error.message || "Search failed",
    });
  }
};