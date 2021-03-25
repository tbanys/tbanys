#!/usr/bin/env node
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const data = require('./utils/data');

(() => {
  init();
  console.log(data.bio);
  console.log(data.alerts);  
  const err = new Error(`Something went wrong`);
  handleError(`BLOG IS DOWN`, err, false, false);
})();