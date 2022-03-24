const processRecords = (records) => {
  let overview = {
    netSales: 0,
    grossSales: 0,
    guestChecks: 0,
    numberOfGuest: 0,
  };
  for (let record of records) {
    overview.guestChecks++;
    overview.grossSales += record.amount;
  }
  overview.netSales = overview.grossSales;
  overview.numberOfGuest = overview.guestChecks;
  
  return overview;
};

module.exports = processRecords;
