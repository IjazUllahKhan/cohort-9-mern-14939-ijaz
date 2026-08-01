const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const healthRouter = require("./routes/health.route");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/health", healthRouter);

module.exports = app;
