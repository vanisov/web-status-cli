const log = console.log;

function logTemplate(text) {
  log("====================================");
  log(text.map((item) => item).join("\n"));
  log("====================================");
}

module.exports = logTemplate;