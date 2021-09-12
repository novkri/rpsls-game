const Express = require("express")();
const Http = require("http").Server(Express);
const Socketio = require("socket.io")(Http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const port = 3000;

let numUsers = 0;

Socketio.on("connection", socket => {
  console.log(`A user connected with socket id ${socket.id}`);
  socket.emit("success", "Server Accecpting Connections");

  socket.on("onSelect", data => {
    Socketio.emit("picked", data);
  });

  socket.on("restart", data => {
    numUsers--
    Socketio.emit('clientDisconnected', numUsers);
  });

  socket.on('newPlayer', () => {
    console.log('new-player: ', socket.id)
    numUsers++
    Socketio.emit('joined', numUsers);

    if (numUsers === 2) {
      Socketio.emit('startGame')
    }

  })
  socket.on("picked", data => {
    console.log("user1 picked: ", data);
  });

  socket.on("disconnect", () => {
    numUsers--
    if (numUsers < 0) {
      numUsers = 0
    }
    console.log(numUsers)
    console.log('disconnect')
    Socketio.emit('clientDisconnected', numUsers);
  })
});

Http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
