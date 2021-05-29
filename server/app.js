const express = require("express");
const app = express();
const router = require("./routes/index");
const cors = require("cors");
const connectDatabase = require("./config/database");
const errorHandler = require("./middlewares/errorHandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDatabase();

app.use(router);
app.use(errorHandler);

module.exports = app;
