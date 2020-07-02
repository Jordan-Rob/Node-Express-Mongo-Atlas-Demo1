const express = require("express");
const app = express();
const deetsUrls = require("./api/deets");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.DB_ACCESS, { useUnifiedTopology: true }, () =>
  console.log("DB Connected")
);

app.use(express.json());

app.use("/api/deets", deetsUrls);

app.listen(3000, () => {
  console.log("server is running");
});
