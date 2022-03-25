const { DBFFile } = require("dbffile");
const { LOCALDIR } = require("../../config");
const gnditemFile = `${LOCALDIR}${"\\DATA\\gnditem.dbf"}`;
const itmFile = `${LOCALDIR}${"\\DATA\\itm.dbf"}`;

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

const getSalesByItems = async () => {
  let dbf2 = await DBFFile.open(gnditemFile);
  let records2 = await dbf2.readRecords(700);
  let t = records2.map((v) => {
    return {
      id: v.ITEM,
      price: v.PRICE,
      count: 1
    };
  });
  t = groupBy(t);
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
      id: v.id,
      name: t2.find((x) => x.id === v.id).name,
      price: v.price,
      count: v.count
    };
  });
  n = n.sort((a,b)=>{
    return b.price-a.price 
  })

  return n.slice(0,10)
};

module.exports = getSalesByItems;
