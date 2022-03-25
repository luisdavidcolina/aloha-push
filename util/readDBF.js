const getSales = require("./processDBF/getSales");
const getSalesByHours = require("./processDBF/getSalesByHours");
const getSalesByItems = require("./processDBF/getSalesByItems");
const getSalesByCategory = require("./processDBF/getSalesByCategory");
const processRecords = require("./processDBF/processRecords");

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
