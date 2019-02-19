const routes = require('../constants/routes');

module.exports = (app) => {

    // project 3 routes
    app.get('/', (req, res) => res.send('Hello World!'));
    app.use(routes.health, require('../routes/health'));
    app.use(routes.greetings, require("../routes/greetings"));

    // ethereum routes
    app.use(routes.makeDonation, require("../routes/makeDonation"));
    app.use(routes.fetchDonation, require("../routes/fetchDonation"));

};