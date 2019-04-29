const router = require('express').Router();

// the route here is replaced by the route passed within ./index.js
router.get('/', (req, res) => {

  // checks if a donation has been made
  if(!global.makeDonation){
    return res.status(400).json({
      status: "No donation request active.",
      errors: "No donation request active, make a donation first."
    });
  }

  res.status(200).json(
    {
      healthy: true,
      process: global.environment,
    });
});

module.exports = router;
