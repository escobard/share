const router = require('express').Router();

// the route here is replaced by the route passed within ./index.js
router.post('/', (req, res) => {
    console.log('request: ', req.body)
    res.send("Greetings ");
});

module.exports = router;
