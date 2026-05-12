import { createServer } from "http";
import { Server } from "socket.io";
import app from "../app.js";
import authModel from "../models/auth/auth.model.js";
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", async (socket) => {
  console.log("user connected", socket.id);

  socket.on("user-online", async (userId) => {
    try {
      const user = await authModel.findById(userId); // userId is user model object id
      if (!user) return;
      // tracking is user online
      user.onlineStatus = "online";

      // set socketid
      user.socketId = socket.id;
      // update last seen
      user.lastSeen = new Date();

      await user.save();
      console.log(`${user.name} is online`);
    } catch (error) {
      console.log("Has an error when connecting with socket io");
    }
  });
  socket.on("disconnect", async () => {
    try {
      console.log(`user disconnect`, socket.id);

      // find user by socket id
      const user = await authModel.findOne({ socketId: socket.id });
      if (!user) return;

      // set user to offline
      user.onlineStatus = "offline";
      // update last seen
      user.lastSeen = new Date();
      // remove socket id from user model
      user.socketId = null;

      await user.save();
      console.log(`${user.name} is offline`);
    } catch (error) {
      console.log("Has an error when disconnect with socket.io");
    }
  });
});

export default httpServer;
