const { Socket } = require("socket.io-client");

const app = require("express")();
const server = require("http").createServer(app);
const options = {
  cors: true,
};
const io = require("socket.io")(server, options);

io.on("connection", (socket) => {
  console.log("user has connected");
  socket.on("chat message", (msg) => {
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

server.listen(3001, () => console.log("server listening on 3001"));
