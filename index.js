#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const sym = require('log-symbols');

// Alerts
const success = chalk.green;
const info = chalk.blue;
const warning = chalk.keyword(`orange`);
const error = chalk.red.bold;

welcome({
  title: pkgJSON.name,
  tagLine: 'Hello!',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
});

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

`)