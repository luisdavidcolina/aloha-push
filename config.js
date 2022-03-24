require("dotenv").config();

const LOCALDIR = process.env.LOCALDIR;
const STORE = process.env.STORE;
const DISK = process.env.DISK;
const VERSION = process.env.VERSION;
module.exports = { LOCALDIR, STORE, DISK, VERSION };
