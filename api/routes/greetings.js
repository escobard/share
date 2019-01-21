const router = require("express").Router();

// the route here is replaced by the route passed within ./index.js
router.post("/", (req, res) => {

  !req.body.name
    ? res.status(400).json("Bad request, body of request missing name property")
    : res.status(200).json("Greetings");
});

module.exports = router;
