import "dotenv/config";
import httpServer from "./src/socketIo/user.track.js";
import connectToDB from "./src/config/database.js";
connectToDB();
httpServer.listen(3000, () => {
  console.log("server run in port 3000");
});
