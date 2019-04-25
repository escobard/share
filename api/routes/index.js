const routes = require('../constants/routes');

module.exports = (app) => {

    // lifecycle checks
    app.use(routes.health, require('../routes/health'));

    // ether routes
    app.use(routes.makeDonation, require("../routes/makeDonation"));
    app.use(routes.fetchDonation, require("../routes/fetchDonation"));

};