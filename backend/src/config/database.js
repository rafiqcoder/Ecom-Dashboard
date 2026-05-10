import mongoose from "mongoose";
const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("server connected with db"));
};
export default connectToDB;
