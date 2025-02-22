const functions = require('@google-cloud/functions-framework');
// const { onRequest } = require("firebase-functions/v2/https");
const { onCall } = require('firebase-functions/v2/https');


exports.getUsers = onCall(async ({ data, auth }) => {

  return ({ data: 'Welcome Nawfal' });
}
);

