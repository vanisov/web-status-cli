#! /usr/bin/env node
const { Command } = require("commander");
const checkWebsite = require("./commands/web-status.command");

const program = new Command();

program.name("web-status").usage("[options]").description("Check the status of a website.").version("1.0.0");

program
  .argument("<url>", "URL of the website to check")
  .option("-d, --detailed", "Log the status of the website")
  .action(checkWebsite)
  .description("Check the status of a website.");

program.parse();
