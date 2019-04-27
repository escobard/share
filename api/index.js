const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  app = express(),
  routes = require("./constants/routes"),
  port = routes.port;

app.use(bodyParser.json());

// TODO this needs to be refactored to a helper - needs to handle GCP logic after containerization
if (process.env.NODE_ENV === "production"){
  global.environment = "prod";
  app.use(cors({ origin: "https://share-ui.herokuapp.com" }));
}
else{
  app.use(cors({ origin: "http://localhost:3000" }));
  global.environment = "dev";
}

require("./routes")(app);

let server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

module.exports = server;
