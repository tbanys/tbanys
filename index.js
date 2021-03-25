#!/usr/bin/env node
const meow = require('meow');
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const data = require('./utils/data');

const helpText = `
  Usage
    npx tbanys [options]

  Options
    bio         Show bio information
    --no-bio    Don't Show bio information
    alerts      Show alerts information
    --no-alers  Don't show alerts information

  Examples
    npx tbanys --no-social
`;

const options = {
  flags: {
    bio: {
      type: 'boolean',
      default: true
    },
    alerts: {
      type: 'boolean',
      default: true
    }
  }
}
const cli = meow(helpText, options);
const flags = cli.flags;
const inputs = cli.inputs;

(() => {
  init();
  if (flags.bio) {
    console.log(data.bio);
  }

  if (flags.alerts) {
    console.log(data.alerts);  
  }

  console.log(`cli.input`, cli.input);
  console.log(`cli.flags`, cli.flags);

  // const err = new Error(`Something went wrong`);
  // handleError(`BLOG IS DOWN`, err, false, false);
})();