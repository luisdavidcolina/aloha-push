require("dotenv").config();
const firebase = require("firebase/app");

const LOCALDIR = process.env.LOCALDIR;
const STORE = process.env.STORE;
const DISK = process.env.DISK;
const VERSION = process.env.VERSION;
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_APP_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_APP_DATABASE_URL,
  projectId: process.env.FIREBASE_APP_PROJECTID,
  storageBucket: process.env.FIREBASE_APP_STORAGE,
  messagingSenderId: process.env.FIREBASE_APP_MESSAGING_SENDER,
  appId: process.env.FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

module.exports = { LOCALDIR, STORE, DISK, VERSION, app };
