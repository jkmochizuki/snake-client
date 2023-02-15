const net = require("net");
const { IP, PORT } = require('./constants');

// returns an object that can be used to interact with the server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write(`Name: JKM`);
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};

