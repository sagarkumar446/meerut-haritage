const express = require("express");
const cors = require("cors");
const path = require("path");
const sequelize = require("./config/db");
const postRoutes = require("./routes/postRoutes");

const app = express();

// Connect to DB
sequelize.authenticate()
  .then(() =>{ console.log("✅ Database connected");
  return sequelize.sync({ force: false });}
).then(() => {
    console.log("✅ Tables created/updated");
})
  
  .catch(err => console.error("❌ DB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
