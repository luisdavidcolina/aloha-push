const cron = require("node-cron");
const { runGrid, readDBF, updateDB, processRecords } = require("./util");

let guestChecks = 0;

class Main {
  static async getSales() {
    runGrid();

    const { overview, tndrs, salesByCategory, salesByHours, salesByItems } =
      await readDBF();
    const newRecord = overview.guestChecks !== guestChecks;
    if (newRecord) {
      guestChecks = overview.guestChecks;
      updateDB({
        overview,
        tndr: tndrs.slice(0,10),
        salesByCategory,
        salesByHours,
        salesByItems,
      });
    }
    
  }
}
cron.schedule("*/10 * * * * *", () => {
  Main.getSales();
});
