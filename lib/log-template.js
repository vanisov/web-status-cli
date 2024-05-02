const log = console.log;
const { theme } = require("./theme");

function logTemplate(text) {
  log("           web-status-cli           ");
  log("====================================");
  log(text.map((item) => item).join("\n"));
  log("====================================");
}

module.exports = logTemplate;
