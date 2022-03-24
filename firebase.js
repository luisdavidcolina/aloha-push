const firebase = require("firebase/app");
require("dotenv").config();

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
  projectId: process.env.FIREBASE_APP_PROJECTID,
  storageBucket: process.env.FIREBASE_APP_STORAGE,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,
};

var fireDB = firebase.initializeApp(firebaseConfig);

module.exports = fireDB;
