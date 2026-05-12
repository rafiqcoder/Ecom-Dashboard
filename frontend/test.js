// socket io client test
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

socket.on("connect", () => {

  console.log("CONNECTED");

  // Send userId
  socket.emit("user-online", "6a01f1b43fdd2730fb4b1387");

});

socket.on("disconnect", () => {

  console.log("DISCONNECTED");

});