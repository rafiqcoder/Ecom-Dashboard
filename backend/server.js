import "dotenv/config";
import httpServer from "./src/socketIo/user.track.js";
import connectToDB from "./src/config/database.js";
connectToDB();
httpServer.listen(8000, () => {
  console.log("server run in port 8000");
});
