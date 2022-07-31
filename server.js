const express = require("express");
const cors = require("cors");
const indexRouter = require("./index");
const path = require("path");

const app = express();

const port = process.env.PORT || 4000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 5000 })
);
app.use("/", indexRouter);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("syncfarmer/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "syncfarmer", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Backend Server listening at ${port}`);
});

module.exports = app;
