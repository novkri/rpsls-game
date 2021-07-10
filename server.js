const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const port = 3000;

Socketio.on("connection", socket => {
  console.log(`A user connected with socket id ${socket.id}`);
  socket.emit("success", "Server Accecpting Connections");

  //   // This will send a message letting users know the server is
  //   // being sutdown.
  //   process.on("SIGINT", () => {
  //     io.emit("oops", { message: "Server Shut Down" });
  //     process.exit();
  //   });
  //
  socket.on("customEmit", data => {
    Socketio.emit("picked", data);
  });

  socket.on("picked", data => {
    console.log("user1 picked: ", data);
  });
});

Http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
