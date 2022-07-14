const { socketController } = require("../controllers");
module.exports = (io, socket) => {
  socket.use((infoArray, next) => {
    console.log(infoArray);

    next();
  });

  console.log(socket.handshake);

  socket.on("message:save", (data) =>
    socketController.sendMessage(io, socket, data)
  );

  socket.on("broadcast:all", (data) =>
    socketController.broadcastToAllUsers(io, socket, data)
  );

  socket.on("broadcast:not:me", (data) =>
    socketController.broadcastAvoidSender(io, socket, data)
  );
};
