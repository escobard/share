const makeDonationFields = [{ name: 'address', label: 'Address', placeholder: "Donor's public address", value: '', error: false },{ name: 'amount', label: 'Amount', placeholder: 'Donation amount in ether', value: '', error: false }];

const fetchDonationFields = [{ name: 'address', label: 'Address', placeholder: "Donor's public address", value: '', error: false }];

const apiRoot = process.env.PORT || 'http://localhost:4000';

const apiRoutes =  {
  makeDonation: `${apiRoot + '/makeDonation'}`
};

export {makeDonationFields, fetchDonationFields, apiRoutes};