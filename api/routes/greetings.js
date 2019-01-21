const router = require('express').Router();

// the route here is replaced by the route passed within ./index.js
router.post('/', (req, res) => {
    console.log('request: ', req.headers)
    if (!req.body.name) {
        res.send("An error occurred: Name is a required paramter");
    }
    res.send("Greetings ". req.body.name);
});

module.exports = router;
