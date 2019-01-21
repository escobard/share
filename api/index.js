const express = require("express"),
  bodyParser = require("body-parser"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port;

app.use(bodyParser.json());

require("./routes")(app);

let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
