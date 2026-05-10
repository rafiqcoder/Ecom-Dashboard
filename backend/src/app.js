import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth/auth.route.js";
import productsRouter from "./routes/admin/products/product.route.js";
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
// create new product and get products routes
app.use("/", productsRouter);
export default app;
