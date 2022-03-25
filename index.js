const cron = require("node-cron");
const { runGrid, readDBF, updateDB } = require("./util");

const MAX_PUSH_CHECKS = 10;
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
        tndr: tndrs.slice(0, MAX_PUSH_CHECKS),
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
