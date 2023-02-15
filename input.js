const { EXIT_KEY, MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES_KEY } = require('./constants');

// stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// runs when the server receives input from the client's keyboard
const handleUserInput = (key) => {
  if (key === EXIT_KEY) process.exit();
  if (key === MOVE_UP_KEY) connection.write('Move: up');
  if (key === MOVE_LEFT_KEY) connection.write('Move: left');
  if (key === MOVE_DOWN_KEY) connection.write('Move: down');
  if (key === MOVE_RIGHT_KEY) connection.write('Move: right');
  for (const x in MESSAGES_KEY) {
    if (key === x) connection.write(`Say: ${MESSAGES_KEY[key]}`);
  }
};

module.exports = {
  setupInput
};