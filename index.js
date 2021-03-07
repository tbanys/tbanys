#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

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
  Tautvydas Banys

  Web developer
`);