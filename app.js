const express = require("express");
const cors = require("cors");
require("dotenv").config({path: "./.env"});
console.log("MONGO_URI =", process.env.MONGO_URI);
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

// const documentRoutes = require("./routes/documentRoutes");
// const documentRoutes = require("./routes/documentRoutes");
connectDB().catch(console.error);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("PDF E-Sign Backend Running...");
});
// app.use("/api/auth", authRoutes);
// app.use("/api/docs", documentRoutes);

// app.use("/api/docs", documentRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});