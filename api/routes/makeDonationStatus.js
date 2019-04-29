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
  
  // checks if global donation has been sent to ethereum
  if (global.makeDonation.result === 'validated'){
    return res.status(200).json(global.makeDonation);
  }

  // checks if global donation error has been thrown
  if (global.makeDonation.result === 'error'){
    res.status(400).json(global.makeDonation);
    delete global.makeDonation;
    return
  }

  // checks if donation has been created
  if (global.makeDonation.result === 'created'){
    res.status(200).json(global.makeDonation);

    // deletes to indicate no donation currently being created
    delete global.makeDonation;
    return;
  }



  res.status(200).json(
    {
      healthy: true,
      process: global.environment,
    });
});

module.exports = router;
