const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk');

const helpText = `
  Usage
    ${green(`npx tbanys`)} ${yellow(`[--options]`)} ${cyan(`<command>`)}

  Options
    ${yellow(`--bio`)}           Print bio info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-bio`)}        Don't print bio info
    ${yellow(`--alerts`)}              Print alerts info ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-alers`)}      Don't print alerts info
    ${yellow(`--clear`)}         Clear the console ${dim(`(DEFAULT: true)`)}
    ${yellow(`--no-clear`)}      Don't clear the console
    ${yellow(`-m`)}, ${yellow(`-minimal`)}    Print minimal info
    ${yellow(`-d`)}, ${yellow(`--debug`)}     Print debug info
    ${yellow(`-v`)}, ${yellow(`--version`)}   Print cli version

  Commands
  ${cyan(`help`)}              Print CLI help info

  Examples
  ${green(`npx tbanys`)} ${yellow(`--no-bio`)}
  ${green(`npx tbanys`)} ${yellow(`--no-alerts`)}
`;

const options = {
  inferType: true,
  hardRejection: false,
  flags: {
    minimal: {
      type: 'boolean',
      default: false,
      alias: 'm'
    },
    clear: {
      type: 'boolean',
      default: true
    },
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
