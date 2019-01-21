const router = require('express').Router();

// the route here is replaced by the route passed within ./index.js
router.get('/', (req, res) => {
    console.log('request: ', req.headers)
    res.status(200).json(
        {
            healthy: true
        });
});

module.exports = router;
