const { DBFFile } = require("dbffile");
const { LOCALDIR } = require("../config");
const gndtndrFile = `${LOCALDIR}${"\\DATA\\gndtndr.dbf"}`;

const groupBy = (t) => {
  let tmp = {};
  t.forEach(function (item) {
    let tempKey = item.id;
    if (!tmp.hasOwnProperty(tempKey)) {
      tmp[tempKey] = item;
    } else {
      tmp[tempKey].price += item.price;
      tmp[tempKey].count++;
    }
  });
  let results = Object.keys(tmp).map(function (key) {
    return tmp[key];
  });
  return results;
};

const getSalesByHours = async () => {
  let dbf = await DBFFile.open(gndtndrFile);
  let records = await dbf.readRecords(700);

  let t = records
  .filter((v) => v.TYPE === 1)
  .map((v) => {
    return {
      id: v.HOUR,
      price: Number(v.AMOUNT),
      count: 1,
    };
  });
  t = groupBy(t);

 // console.log(t);
  return t;
};

module.exports = getSalesByHours;
