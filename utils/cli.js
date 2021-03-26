const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

const helpText = `
  Usage
    ${green(`npx tbanys`)} ${yellow(`[--options]`)} ${cyan(`<command>`)}

  Options
    ${yellow(`--bio`)}           Print bio information
    ${yellow(`--no-bio`)}        Don't print bio information
    ${yellow(`--`)}              Print alerts information
    ${yellow(`--no-alers`)}      Don't print alerts information
    ${yellow(`-d`)}, ${yellow(`--debug`)}     Print debug information
    ${yellow(`-v`)}, ${yellow(`--version`)}   Print cli version

  Commands
  ${cyan(`help`)}              Print CLI help information

  Examples
  ${green(`npx tbanys`)} ${yellow(`--no-bio`)}
  ${green(`npx tbanys`)} ${yellow(`--no-alerts`)}
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
    },
    debug: {
      type: 'boolean',
      default: false,
      alias: 'd'
    },
    version: {
      type: 'boolean',
      default: false,
      alias: 'v'
    },
  }
}

module.exports = meow(helpText, options);
