const mongoose = require("mongoose");

const URI = "mongodb://127.0.0.1:27017/social-media";

function connectDatabase() {
  mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((_) => console.log("connect mongodb"))
    .catch((err) => console.log(err));
}

module.exports = connectDatabase;
