const express = require('express'),
bodyParser = require("body-parser");
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use(bodyParser.json());

require("./routes")(app)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))