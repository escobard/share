const routes = {
    port: process.env.PORT || 4000,
    health: '/health',
    greetings: '/greetings',
    makeDonation: '/makeDonation',
    fetchDonation: '/fetchDonation'
};

module.exports = routes;
