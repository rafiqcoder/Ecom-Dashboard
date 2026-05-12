import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth/auth.route.js";
import productsRouter from "./routes/admin/products/product.route.js";
import updateProfileRouter from "./routes/auth/updateProfile.route.js";
import getAllUserRouter from "./routes/admin/users/getUser.route.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);
app.use("/", authRouter);
// update profile
app.use("/", updateProfileRouter);
// create new product and get products routes
app.use("/", productsRouter);
// get all users
app.use("/", getAllUserRouter);
export default app;
