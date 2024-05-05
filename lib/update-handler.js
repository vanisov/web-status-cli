const updateNotifier = require("update-notifier-cjs");
const packageJson = require("../package.json");

function updateHandler() {
  const notifier = updateNotifier({ pkg: packageJson });
  notifier.notify();
}

module.exports = updateHandler;
