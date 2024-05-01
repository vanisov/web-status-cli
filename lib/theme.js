const chalk = require("chalk");

/**
 *  @description Colorizes the text with the provided hex code.
 *  @param {string} hex - The hex code to colorize the text.
 * */
function colorize(hex) {
  return (text) => chalk.hex(hex)(text);
}

/**
 *  @description The theme object containing colorized text.
 * */
const theme = {
  title: colorize("#FF8A08"),
  text: colorize("#A9A9A9"),
  success: colorize("#9BCF53"),
  warning: colorize("#F3CA52"),
  error: colorize("#E97171"),
};

module.exports = { theme, colorize };
