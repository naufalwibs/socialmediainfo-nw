const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const router = require("./routes/index");
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(uri)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Listening on Port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(router);
