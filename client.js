const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // listens for incoming messages
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interprets incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  connect
};