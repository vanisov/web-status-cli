const axios = require("axios");
const theme = require("../lib/theme");
const { createTable } = require("../lib/tables");
const statusResponse = require("../lib/status-response");

const log = console.log;

/**
 *  @description Checks the status of a website.
 *  @param {string} url - The URL of the website to check.
 *  @returns {Promise<void>}
 * */
async function checkWebsite(url, opts) {
  // Check if the URL is provided.
  if (!url) {
    log(error("Please provide a URL."));
  }

  let data = [];

  const tableType = opts.detailed ? "detailed" : "simple";

  // Create table instances
  const table = createTable(tableType);

  try {
    const res = await axios.get(url);

    data = statusResponse(res, opts.detailed);

    log(theme.text(data));
    // table.push(data);
  } catch (err) {
    table.push([
      theme.text(url),
      theme.error(
        err.response
          ? `${response.status} ${err.response.statusText}`
          : err.message,
      ),
    ]);
  }

  // log(table.toString());
}

module.exports = checkWebsite;
