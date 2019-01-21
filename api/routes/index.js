const routes = require('../constants/routes');

module.exports = (app) => {

    // project 3 routes
    app.use(routes.health, require('../routes/health'));
    app.use(routes.greetings, require("../routes/greetings"))
};