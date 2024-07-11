const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fileRoutes = require("./routes/fileRoutes");
const emailRoutes = require("./routes/emailRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", fileRoutes);
app.use("/api", emailRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
