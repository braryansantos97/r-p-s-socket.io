// const http = require('http')
// const express = require("express");
// const socketio = require("socket.io");

// const PORT = process.env.PORT || 3000;
// const cors = require('cors');
// const app = express();
// const httpServer = http.Server(app)
// const io = socketio(httpServer);
// app.use(cors());
// app.use(express.json());
//
// let rooms = [];
// let usernames = [];
//
// io.on('connection', function(socket){
//
//   socket.on("join", function(room, username){
//     if (username != ""){
//       rooms[socket.id] = room;
//       usernames[socket.id] = username;
//       socket.leaveAll();
//       socket.join(room);
//       io.in(room).emit("recieve", "Server : " + username + " has entered the chat.");
//       socket.emit("join", room);
//       console.log(room);
//       console.log(username);
//     }
//   })
//
//   socket.on("send", function(message){
//     io.in(rooms[socket.id]).emit("recieve", usernames[socket.id] +" : " + message);
//     console.log(usernames);
//   });
//
//   socket.on("recieve", function(message){
//     socket.emit("recieve", message);
//     console.log(message);
//   });
// });
//
// httpServer.listen(PORT);
const express = require("express");
const PORT = process.env.PORT || 3000;
const socketio = require("socket.io");
const io = socketio();
const cors = require('cors');
const app = express();
const httpServer = http.Server(app);
app.all('/fetch', request, response, next) =>{
  response.header('Access-Control-Allow-Origin', '*');
  next();
}

io.on('connection', function(socket) {
  socket.on('send', function(message){
      io.emit('receive', message);
  });
});
io.listen(PORT);
