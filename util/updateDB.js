const firebase = require("firebase");
const app = require("../firebase");
const { STORE } = require("../config");

const updateDB = async ({
  overview,
  tndr,
  salesByCategory,
  salesByHours,
  salesByItems,
}) => {
  try {
    await firebase.firestore(app).collection("overviews").doc(STORE).set({
      overview,
      tndr,
      salesByCategory,
      salesByHours,
      salesByItems,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = updateDB;
