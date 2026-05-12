import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
  },
  email: {
    type: String,
    required: [true, "Eamil is required"],
    unique: [true, "Email should be required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phone: {
    type: String,
    unique: [true, "Phone number is must be unique"],
    sparse: true,
  },
  varified: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: "",
  },
  profile: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgpUfLdB4jsJMgKbUYLOdNjr55992CPSsIwg1cFgx8BzDnJ5Ec-FNKEM&s",
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  lastSeen: {
    type: Date,
    default: null,
  },
  onlineStatus: {
    type: String,
    enum: ["online", "offline"],
    default: "online",
  },
  socketId: {
    type: String,
    default: null,
  },
});
const authModel = mongoose.model("auth", authSchema);
export default authModel;
