const meow = require('meow');
const meowHelper = require('cli-meow-help');

const flags = {
  alerts: {
    type: 'boolean',
    default: true,
    desc: 'Print alerts info'
  },
  'noalerts': {
    type: 'boolean',
    default: false,
    desc: `Don't print alerts info`
  },
  bio: {
    type: 'boolean',
    default: true,
    desc: 'Print bio info'
  },
  'nobio': {
    type: 'boolean',
    default: false,
    desc: 'Dont print bio info'
  },
  clear: {
    type: 'boolean',
    default: true,
    desc: 'Clear the console'
  },
  debug: {
    type: 'boolean',
    default: false,
    alias: 'd',
    desc: 'Print debug info'
  },
  minimal: {
    type: 'boolean',
    default: false,
    alias: 'm',
    desc: 'Print minimal info'
  },
  version: {
    type: 'boolean',
    default: false,
    alias: 'v',
    desc: 'Print cli version'
  },
};

const commands = {
  help: {
    desc: `Print the help info`,
  },
};

const helpText = meowHelper({
  name: 'npx tbanys',
  flags,
  commands,
  defaults: false,
  desc: 'This is a CLI that you can use t oget more information about Tautvydas'
});

const options = {
  inferType: true,
  description: false,
  hardRejection: false,
  flags
}

module.exports = meow(helpText, options);
