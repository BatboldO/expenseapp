const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const imageRoutes = require("./routes/imageRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const userRoutes = require("./routes/userRoutes");

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/images", express.static(path.join(__dirname,"images/")));

// Authentication
app.use("/api/auth", authRoutes);
app.use("/api/image", imageRoutes);
app.use("/api/cat", categoryRoutes);
app.use("/api/tran", transactionRoutes);
app.use("/users/", userRoutes);

app.listen(PORT, () => {
  console.log(`Сервер ${PORT} дээр аслаа.`);
});
