const { DBFFile } = require("dbffile");
const { LOCALDIR } = require("../config");
const gndtndrFile = `${LOCALDIR}${"\\DATA\\gndtndr.dbf"}`;
const revFile = `${LOCALDIR}${"\\DATA\\rev.dbf"}`;
const tdrFile = `${LOCALDIR}${"\\DATA\\tdr.dbf"}`;


const getSales = async () => {
  let dbf = await DBFFile.open(gndtndrFile);
  let records = await dbf.readRecords(1000);
  let revDbf = await DBFFile.open(revFile);
  let revRecords = await revDbf.readRecords(100);
  let tdrDbf = await DBFFile.open(tdrFile);
  let tdrRecords = await tdrDbf.readRecords(100);
  const temp = records
    .filter((v) => v.TYPE === 1)
    .map((v) => {
      return {
        id: v.CHECK,
        revenue: revRecords.find(revenue => v.REVENUE === revenue.ID).NAME,
        hour: `${("0" + v.HOUR).slice(-2)}:${("0" + v.MINUTE).slice(-2)}`,
        type: tdrRecords.find(type => v.TYPEID === type.ID).NAME,
        amount: v.AMOUNT,
      };
    })
    .sort((a, b) => {
      return    b.hour.slice(3,5) - a.hour.slice(3,5);
    })
    .sort((a, b) => {
      return    b.hour.slice(0,2) - a.hour.slice(0,2);
    })
  return temp
};

module.exports = getSales;
