const theme = require("./theme");

/**
 *  @description Logs the status of the website based on the response.
 *  @param {object} res - The response object from the request.
 *  @param {boolean} isDetailed - A flag to determine if the response should be detailed.
 *  @returns {Array} An array containing the URL and status of the website.
 * */
function statusResponse(res, isDetailed = false) {
  const calcResponseTime = () => {
    const time = Date.now() - res.config.metadata.startTime;
    return `${time}ms`;
  };

  switch (res.status) {
    case 200:
      return isDetailed
        ? [
            theme.text(res.config.url),
            theme.success(`${res.status} ${res.statusText}`),
            theme.success(`${calcResponseTime()}`),
          ]
        : [theme.success(res.config.url), theme.success(`${res.status} ${res.statusText}`)];
    case 301:
      return [theme.warning(res.config.url), theme.warning(`${res.status} ${res.statusText}`)];
    case 404:
      return [theme.text(res.config.url), theme.error(`${res.status} ${res.statusText}`)];
    default:
      [theme.text(url), theme.text(`${res.status} ${res.statusText}`)];
  }
}

module.exports = statusResponse;
