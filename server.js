var http = require("http");
var app = http.createServer();

// Socket.io server listens to our app
var io = require("socket.io").listen(app);

io.on("connection", function(socket) {
  socket.emit("success", { message: "Server Accecpting Connections" });

  // This will send a message letting users know the server is
  // being sutdown.
  process.on("SIGINT", () => {
    io.emit("oops", { message: "Server Shut Down" });
    process.exit();
  });
});

app.listen(8910);
console.log("Server listening on 8910");
