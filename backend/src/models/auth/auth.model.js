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
});
const authModel = mongoose.model("auth", authSchema);
export default authModel;
