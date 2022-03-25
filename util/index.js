module.exports = {
  runGrid: require("./runGrid"),
  readDBF: require("./readDBF"),
  updateDB: require("./updateDB"),
  getSalesByHours: require("./processDBF/getSalesByHours"),
  getSalesByItems: require("./processDBF/getSalesByItems"),  
  getSalesByCategory: require("./processDBF/getSalesByCategory"),
  getSales: require("./processDBF/getSales"),
  getCheck: require("./processDBF/getCheck"),
};
