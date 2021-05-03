const express = require("express");

const app = express();

app.use(express.static("public"));

const PORT = 5000;

const router = require("./src/index.routes");

app.use("/", router);

app.listen(PORT, () => console.log("server on"));
