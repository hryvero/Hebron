module.exports = {
  sendMessage: (io, socket, data) => {
    socket.emit("message:create", data);
  },

  broadcastToAllUsers: (io, socket, data) => {
    console.log("Brodcast emited");
    io.emit("broadcast", { broadcast: "ALL" });
  },

  broadcastAvoidSender: (io, socket) => {
    socket.broadcast.emit("broadcast:all:not:me", {});
  },
};
