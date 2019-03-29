const routes = require('../constants/routes');

module.exports = (app) => {

    // base routes
    app.use(routes.health, require('../routes/health'));

    // ether routes
    app.use(routes.makeDonation, require("../routes/makeDonation"));
    app.use(routes.fetchDonation, require("../routes/fetchDonation"));

};