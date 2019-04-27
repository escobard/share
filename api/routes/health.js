const router = require('express').Router();

// the route here is replaced by the route passed within ./index.js
router.get('/', (req, res) => {
    console.log('request: ', req.headers)

  // TODO - update with GCP
    const process = process.env.NODE_ENV === "production" ? "prod" : "local"

    // TODO - update this route, determine server status (running on local vs prod) to navigator, version number of the app, etc
    res.status(200).json(
        {
            healthy: true,
            process: process
        });
});

module.exports = router;
