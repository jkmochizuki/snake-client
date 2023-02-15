const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: PLY");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
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

