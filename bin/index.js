#!/usr/bin/env node
require = require("esm")(module);

if (process.argv <= 2) {
  console.log("Usage: esm-launcher command args");
}
else {
  const which = require('npm-which')(process.cwd());
  const [command, ...args] = process.argv.slice(2);
  const cmdPath = which.sync(command);
  
  // command will see same old argv
  process.argv = [...process.argv.slice(0, 2), ...args]
  module.exports = require(cmdPath);
}