// create new order
import productModel from "../../../models/admin/createProducts/products.model.js";
import cartModel from "../../../models/user/cart/cartProduct.model.js";
import orderModel from "../../../models/user/orders/order.model.js";

export const orderController = async (req, res) => {
  const user = req.user;
  const { paymentType, mobile, shippingAddress, paymentStatus } = req.body;
  if (!user) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }
  // find cart products
  const cartProducts = await cartModel.find({ userId: user._id });
  if (!cartProducts) {
    res.status(404).json({
      message: "Please add product in you cart for order",
      success: true,
    });
  }
  // find products
  const products = await Promise.all(
    cartProducts.map(async (item) => {
      const findingProduct = await productModel.findById(item.productId);
      return {
        title: findingProduct.name,
        image: findingProduct.poster,
        subTotal: findingProduct.price * item.quantity,
        quantity: item.quantity,
        productId: item.productId,
        price: findingProduct.price,
      };
    }),
  );
  let totalPrice  = 0;
  products.map((item) => {
    totalPrice += item.subTotal
  });
  //create new order
  const orders = await orderModel.create({
    userId: user._id,
    products: products,
    paymentType: paymentType,
    mobile,
    shippingAddress,
    paymentStatus,
    totalPrice
  });
  return res.status(201).json({
    message: "Order created successfuly",
    success: true,
    orders,
  });
};
