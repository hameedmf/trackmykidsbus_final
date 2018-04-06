const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createDriver = require('./createDriver');
const updateDriver = require('./updateDriver');
const fetchDriver = require('./fetchDriver');
const requestOneTimePassword = require('./request_otp');
const verifyOneTimePassword = require('./verify_otp');
const serviceAccount = require('./serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://trackmybusauth.firebaseio.com'
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.createDriver = functions.https.onRequest(createDriver);

exports.updateDriver = functions.https.onRequest(updateDriver);

exports.fetchDriver = functions.https.onRequest(fetchDriver);

exports.requestOneTimePassword = functions.https.onRequest(
  requestOneTimePassword
);

exports.verifyOneTimePassword = functions.https.onRequest(
  verifyOneTimePassword
);
