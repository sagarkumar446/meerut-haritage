
import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import routes from "./routes/index.js";
// const userRoutes = require("./routes/userRoutes");

import authenticateJWT from "./middleware/authenticateJWT.js";

const app = express();

// Connect to DB
sequelize.authenticate()
  .then(() => {
    console.log("✅ Database connected");
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log("✅ Tables created/updated");
  })
  .catch(err => console.error("❌ DB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/user", userRoutes);
app.use("/api", routes);


app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
