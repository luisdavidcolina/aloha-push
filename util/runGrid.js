const { spawn } = require("child_process");
const { DISK, VERSION } = require("../config");
const BAT = require.resolve(`../util/bats/run_grid_${DISK}_${VERSION}.bat`);

const runGrid = () => {
  const bat = spawn("cmd.exe", ["/c", BAT]);

  bat.stdout.on("data", (data) => {
    //console.log(data.toString());
  });

  bat.stderr.on("data", (data) => {
    //console.error(data.toString());
  });

  bat.on("exit", (code) => {
    //console.log(`Child exited with code ${code}`);
  });
};

module.exports = runGrid;
