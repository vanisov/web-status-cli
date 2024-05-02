const { theme } = require("../lib/theme");
const logFormatter = require("../lib/log-template");
const statusResponse = require("../lib/status-response");
const { default: axios } = require("axios");

const log = console.log;

/**
 *  @description Checks the status of a website.
 *  @param {string} url - The URL of the website to check.
 *  @returns {Promise<void>}
 * */
async function checkWebsite(url, opts) {
  try {
    // Start the timer
    const startTime = Date.now();
    // Make the request
    const res = await axios.get(url);
    // Calculate the time spent
    const secSpent = (Date.now() - startTime) / 1000;

    // Get the status data
    const data = statusResponse(res, opts.detailed, secSpent, opts.headers);

    // Log the data
    logFormatter(data);
  } catch (err) {
    log(theme.error(`There was an error: ${err.message}`));
  }
}

module.exports = checkWebsite;
