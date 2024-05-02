const { theme } = require("./theme");

/**
 * Determines the theme based on the response time.
 *
 * @param {number} responseTime - The response time in milliseconds.
 * @returns {string} The theme corresponding to the response time.
 */
function handleResonseTimeTheme(responseTime) {
  if (responseTime < 0.5) {
    return theme.success(responseTime);
  } else if (responseTime < 1.0) {
    return theme.warning(responseTime);
  } else {
    return theme.error(responseTime);
  }
}

/**
 *  Generate response details for a successful request (status code 200).
 *  @param {object} res - The response object from the request.
 *  @param {number} responseTime - The response time in milliseconds.
 *  @returns {Array} An array containing the response details.
 */
function generateSuccessDetails(res, responseTime) {
  return [
    theme.title("URL: ") + theme.text(res.config.url),
    theme.title("Status: ") + theme.success(`${res.status} ${res.statusText}`),
    theme.title("IP Address: ") + theme.text(res.request.socket.remoteAddress),
    theme.title("Response Time: ") + handleResonseTimeTheme(responseTime),
    theme.title("Headers: ") + theme.text(JSON.stringify(res.headers, null, 2)),
  ];
}

/**
 *  Handle the default case when the status code does not have a specific handler.
 *  @param {object} res - The response object from the request.
 *  @returns {Array} An array containing the default response details.
 */
function handleDefaultCase(res) {
  return [
    theme.title("cock") + theme.text(res.url),
    theme.text(`${res.status} ${res.statusText}`),
    theme.text(res.url),
  ];
}

/**
 *  Logs the status of the website based on the response.
 *  @param {object} res - The response object from the request.
 *  @param {boolean} isDetailed - A flag to determine if the response should be detailed.
 *  @param {number} responseTime - The response time in milliseconds.
 *  @returns {Array} An array containing the URL and status of the website.
 */
function statusResponse(res, isDetailed = false, responseTime = 0) {
  const statusHandlers = {
    200: generateSuccessDetails,
    301: () => [theme.warning(res.config.url), theme.warning(`${res.status} ${res.statusText}`)],
    404: () => [theme.text(res.config.url), theme.error(`${res.status} ${res.statusText}`)],
    default: handleDefaultCase,
  };

  const handler = statusHandlers[res.status] || statusHandlers.default;
  const responseDetails = handler(res, responseTime);

  return isDetailed ? responseDetails : [responseDetails[0], responseDetails[1]];
}

module.exports = statusResponse;
