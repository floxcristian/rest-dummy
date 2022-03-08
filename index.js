const express = require("express");
const http = require("http");
const routes = require("./src/routes/v1");
const basicAuth = require("./src/middlewares/basic-auth");

const app = express();
const httpServer = http.Server(app);

const { HTTP_PORT } = require("./src/config");

app.use(express.json());
app.use(basicAuth);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/api/v1", routes);

(async () => {
  try {
    const server = await httpServer.listen(HTTP_PORT);
    console.log(
      `[SUCCESS] webserver is running on [${server.address().port}].`
    );
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
})();
