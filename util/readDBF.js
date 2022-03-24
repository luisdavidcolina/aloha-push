const getSales = require("./getSales");
const getSalesByHours = require("./getSalesByHours");
const getSalesByItems = require("./getSalesByItems");
const getSalesByCategory = require("./getSalesByCategory");
const processRecords = require("./processRecords");

const readDBF = async () => {
  const tndrs = await getSales();
  const overview = processRecords(tndrs);
  const salesByHours = await getSalesByHours();
  const salesByItems = await getSalesByItems();
  const salesByCategory = await getSalesByCategory();
  return {
    tndrs,
    overview,
    salesByHours,
    salesByItems,
    salesByCategory,
  };
};

module.exports = readDBF;
