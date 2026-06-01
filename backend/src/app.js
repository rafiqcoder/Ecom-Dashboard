import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRouter from "./routes/auth/auth.route.js";
import productsRouter from "./routes/admin/products/product.route.js";
import updateProfileRouter from "./routes/auth/updateProfile.route.js";
import getAllUserRouter from "./routes/admin/users/getUser.route.js";
import cartProductRouter from "./routes/user/cart/cartProduct.route.js";
import removeProductFromCartRouter from "./routes/user/cart/removeProduct.route.js";
import updateQuantityRouter from "./routes/user/cart/updateQuantity.route.js";
import orderRouter from "./routes/user/orders/order.route.js";
import updateOrderStatusRouter from "./routes/admin/users/order/updateOrderStatus.route.js";
import dashboardRoter from "./routes/admin/dashboard/dashboard.route.js";
import bestSellingProduct from "./routes/admin/dashboard/bestSellingProduct.route.js";
import ratingProductRouter from "./routes/admin/users/ratingProduct/ratingProduct.route.js";
import getAllOrderRouter from "./routes/admin/users/order/getAllOrder.route.js";
import getRatingProductRouter from "./routes/admin/users/ratingProduct/getTopRatedProduct.route.js";
import getOrderByIdRouter from "./routes/user/orders/getOrderById.route.js";
import addressRouter from "./routes/user/address/address.route.js";
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
// add to cart product routes
app.use("/", cartProductRouter);
// delete cart product
app.use("/", removeProductFromCartRouter);
// update product quantity
app.use("/", updateQuantityRouter);
// order router
app.use("/", orderRouter);
// update order status controller by admin
app.use("/", updateOrderStatusRouter);
// get all order router
app.use("/", getAllOrderRouter);
// dashboard router
app.use("/", dashboardRoter);
// getting best selling product router
app.use("/", bestSellingProduct);
// rating product by user
app.use("/", ratingProductRouter);
// get rating product by user
app.use("/", getRatingProductRouter);
// get order by id
app.use("/", getOrderByIdRouter);
// address router
app.use("/", addressRouter);
export default app;
