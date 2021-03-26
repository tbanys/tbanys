#!/usr/bin/env node
// const handleError = require('cli-handle-error');

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');

const flags = cli.flags;
const input = cli.input;

(async () => {
  init();

  input.includes('help') && cli.showHelp(0);

  if (flags.bio) {
    console.log(data.bio);
  }

  if (flags.alerts) {
    console.log(data.alerts);  
  }

  //debug info if needed
  debug(flags.debug, cli);

  // const err = new Error(`Something went wrong`);
  // handleError(`BLOG IS DOWN`, err, false, false);
})();