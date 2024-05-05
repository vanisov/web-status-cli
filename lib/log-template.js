const boxen = require("boxen");
const log = console.log;

function logTemplate(text) {
  log(
    boxen(text.map((item) => item).join("\n"), {
      title: "web-status-cli",
      titleAlignment: "center",
      padding: 1,
      borderStyle: "round",
    })
  );
}

module.exports = logTemplate;
