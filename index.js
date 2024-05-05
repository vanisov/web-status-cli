#! /usr/bin/env node
const { Command } = require("commander");
const checkWebsite = require("./commands/web-status.command");
const updateHandler = require("./lib/update-handler");
const pkg = require("./package.json");

const program = new Command();

updateHandler();

program
  .name("web-status")
  .usage("<url> [options]")
  .description("Check the status of a website.")
  .version(pkg.version)
  .alias("ws")
  .addHelpText("after", `\nExample: $ web-status https://example.com`);

program
  // display help message when no arguments are passed
  .argument("<url>", "URL of the website to check")
  .option("-d, --detailed", "Log the status of the website")
  .action(checkWebsite)
  .description("Check the status of a website.");

program.parse();
