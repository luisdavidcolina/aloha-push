const { DBFFile } = require("dbffile");
const { LOCALDIR } = require("../config");
const gnditemFile = `${LOCALDIR}${"\\DATA\\gnditem.dbf"}`;
const itmFile = `${LOCALDIR}${"\\DATA\\itm.dbf"}`;


const getCheck = async (checkNumber) => {
  let dbf2 = await DBFFile.open(gnditemFile);
  let records2 = await dbf2.readRecords(1000);
  let t = records2
  .filter((v) => v.CHECK === checkNumber)
  .map((v) => {
    return {
      ENTRYID: v.ENTRYID,
      id: v.ITEM,
      price: v.PRICE,
      PARENTENID: v.PARENTENID,
    };
  });
  let dbf3 = await DBFFile.open(itmFile);
  let records3 = await dbf3.readRecords(6500);
  let t2 = records3.map((v) => {
    return {
      id: v.ID,
      name: v.LONGNAME,
    };
  });
  let  n = t.map((v) => {
    return {
      ENTRYID: v.ENTRYID,
      id: v.id,
      name: t2.find((x) => x.id === v.id).name,
      price: v.price,
      PARENTENID: v.PARENTENID,
    };
  });
  
  const check = {
    checkNumber,
    items: n,
  }

  console.log(check)

};

module.exports = getCheck;
