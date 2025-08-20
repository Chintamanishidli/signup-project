const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// All auth routes will be prefixed with /api
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5174");
});
