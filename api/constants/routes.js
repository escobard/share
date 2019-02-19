const routes = {
    port: process.env.PORT || 3000,
    health: '/health',
    greetings: '/greetings',
    makeDonation: '/makeDonation',
    fetchDonation: '/fetchDonation'
};

module.exports = routes;
