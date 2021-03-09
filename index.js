#!/usr/bin/env node

const chalk = require('chalk');
const sym = require('log-symbols');
const alerts = require('cli-alerts-tbanys');
const handleError = require('cli-handle-error');

const init = require('./utils/init');

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;

alerts();

(() => {
  init();

  // Shabang in to of the top of the file
  // It tells terminal to run this script with node.js
  console.log(`
    ${chalk.bgBlue.bold(` Tautvydas Banys `)}
  
    ${chalk.dim(`Web developer`)}
  `);
  
  
  console.log(`
    ${sym.success} ${success(` SUCCESS `)}: Thanks for checking out my CLI
  
    ${sym.info} ${info(` INFO `)}: Testing creation of NodeCli.com
  
    ${sym.warning} ${warning(` WARNING `)}: Please don't copy me. Be yourself
  
    ${sym.error} ${error(` ERROR `)}: I'm on vocation. Contact me next week
  
  `);

  
  const err = new Error(`Something went wrong`);

  handleError(`BLOG IS DOWN`, err, false, false);
})();