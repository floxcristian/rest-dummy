const express = require("express");
const dummy = require("./dummy.route");

const app = express();

app.use("/dummy", dummy);
app.get("/status", (req, res) => res.send("OK"));

module.exports = app;
