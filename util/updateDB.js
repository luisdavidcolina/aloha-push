const firebase = require("firebase");
const { STORE, app } = require("../config");

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
