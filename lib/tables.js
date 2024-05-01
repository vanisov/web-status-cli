const Table = require("cli-table");
const theme = require("./theme");

/**
 *  @description Creates a table instance based on the type.
 *  @param {string} type - The type of table to create.
 *  @returns {Table} The table instance.
 * */
function createTable(type) {
  const head = {
    simple: [theme.title("Website"), theme.title("Status")],
    detailed: [
      theme.title("Website"),
      theme.title("Status"),
      theme.title("Response"),
      theme.title("Time"),
      theme.title("Size"),
    ],
  };

  const colWidths = {
    simple: [40, 10],
    detailed: [40, 10, 10, 20, 10],
  };

  return new Table({
    head: head[type],
    colWidths: colWidths[type],
  });
}

module.exports = { createTable };
