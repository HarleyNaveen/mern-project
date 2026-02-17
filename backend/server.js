const express = require("express");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// DB
connectDB();

// Routes
app.use("/api", studentRoutes);

// Server
app.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
