const express = require("express"); // express application
require("dotenv").config(); // use the env variables
const mongoose = require("mongoose");
const router = require("./routes/index.routes"); // used to handle routes
// const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json({ limit: "50mb" }));
app.use(router);
const uri = process.env.MONGO_DB_CONNECTION;
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("MongoDB connection successful");
        app.listen(PORT);
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}
new Database();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("Error: routes doesn't exist (-_-)");
});
