const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const cropRoutes = require("./routes/cropRoutes");
const soilRoutes = require("./routes/soilRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const schemeRoutes = require("./routes/schemeRoutes");
const pestRoutes = require("./routes/pestRoutes");
const aiRoutes = require("./routes/aiRoutes");
const profileRoutes = require("./routes/profileRoutes");

// Use Routes
app.use("/api/crops", cropRoutes);
app.use("/api/soil", soilRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/pests", pestRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/profile", profileRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("🌱 CropIntel Backend API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
