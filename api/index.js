const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

require("./routes")(app)

app.listen(port, () => console.log(`Example app listening on port 3000!`));
