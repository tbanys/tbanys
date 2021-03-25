const chalk = require('chalk');
const sym = require('log-symbols');

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;

const bio = `
  ${chalk.bgBlue.bold(` Tautvydas Banys `)}

  ${chalk.dim(`Web developer`)}
  `;

const alerts = `
  ${sym.success} ${success(` SUCCESS `)}: Thanks for checking out my CLI

  ${sym.info} ${info(` INFO `)}: Testing creation of NodeCli.com

  ${sym.warning} ${warning(` WARNING `)}: Please don't copy me. Be yourself

  ${sym.error} ${error(` ERROR `)}: I'm on vocation. Contact me next week

  `;

module.exports = {
  bio,
  alerts
}