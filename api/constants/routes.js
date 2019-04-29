const routes = {
    port: process.env.PORT || 4000,
    health: '/health',
    greetings: '/greetings',
    makeDonation: '/makeDonation',
    makeDonationStatus: '/makeDonationStatus',
    fetchDonation: '/fetchDonation'
};

module.exports = routes;
