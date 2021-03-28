const boxen = require('boxen');
const pkgJSON = require('./../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

module.exports = (minimal, clear) => {
  unhandled();

  !minimal && welcome({
    title: pkgJSON.name,
    tagLine: 'Hello!!',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear,
  });

  minimal && console.log(boxen(`Tautvydas`, {
    padding: 1
  }));

  checkNode('10');
};