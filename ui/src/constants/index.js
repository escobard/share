export const makeDonationFields = [
  {
    name: "addressPub",
    label: "Address Public",
    placeholder: "Donor's public address",
    value: "",
    error: false
  },
  {
    name: "privKey",
    label: "Private Key",
    placeholder:
      "Donor's private address - only used to SIGN raw transactions within API, not stored or cached",
    value: "",
    error: false
  },
  {
    name: "amount",
    label: "Amount",
    placeholder: "Donation amount in ether",
    value: "",
    error: false
  }
];

export const fetchDonationFields = [
  {
    name: "address",
    label: "Address Public",
    placeholder: "Enter user's public address",
    value: "",
    error: false
  },
  {
    name: "id",
    label: "Donation ID",
    placeholder: "Enter the Donation ID",
    value: "",
    error: false
  }
];

const environment =
  process.env.NODE_ENV === "production" ? "heroku" : "development";

console.log('environment', environment);

const apiRoot = environment === "heroku" ? "https://share-controller.herokuapp.com" : "http://localhost:4000";

console.log('root', apiRoot)

export const apiRoutes = {
  makeDonation: `${apiRoot + "/makeDonation"}`,
  fetchDonation: `${apiRoot + "/fetchDonation"}`,
  makeDonationStatus: `${apiRoot + "/makeDonationStatus"}`,
};

export const headers = { "Access-Control-Allow-Origin": "*" };