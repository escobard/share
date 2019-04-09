const makeDonationFields = [
  {
    name: "addressPub",
    label: "Address Public",
    placeholder: "Donor's public address",
    error: false
  },
  {
    name: "addressPriv",
    label: "Address Private",
    placeholder: "Donor's private address - only used to SIGN raw transactions within API, not stored or cached",
    error: false
  },
  {
    name: "amount",
    label: "Amount",
    placeholder: "Donation amount in ether",
    error: false
  }
];

const fetchDonationFields = [
  {
    name: "address",
    label: "Address Public",
    placeholder: "Enter user's public address",
    error: false
  },
  {
    name: "id",
    label: "Donation ID",
    placeholder: "Enter the Donation ID",
    error: false
  }
];

const apiRoot = process.env.PORT || "http://localhost:4000";

const apiRoutes = {
  makeDonation: `${apiRoot + "/makeDonation"}`,
  fetchDonation: `${apiRoot + "/fetchDonation"}`
};

export { makeDonationFields, fetchDonationFields, apiRoutes };
