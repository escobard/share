const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require('cors'),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port;

app.use(bodyParser.json());

// TODO this needs to be updated
app.use(cors({origin: "*"}))

require("./routes")(app);

let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
