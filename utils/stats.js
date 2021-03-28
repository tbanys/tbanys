const ora = require('ora');
const { green, yellow } = require('chalk');
const { default: to } = require('await-to-js');
const axios = require('axios');
const handleError = require('cli-handle-error');

const spinner = ora({ text: '' });
const apiURL = `https://api.github.com/users/tbanys`;

module.exports = async () => {
  spinner.start(`${yellow(`FOLLOWERS`)} fetching...`);
  const [ error, res ] = await to(axios.get(apiURL));
  handleError(`API CALL FAILED`, error, true, true);

  const ghFollowers = res.data.followers;
  spinner.succeed(`${yellow(`FOLLOWERS`)} fetched`);

  console.log(`
Github Followers: ${ghFollowers}
  `);
}
