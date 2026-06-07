// create new order
import productModel from "../../../models/admin/createProducts/products.model.js";
import cartModel from "../../../models/user/cart/cartProduct.model.js";
import orderModel from "../../../models/user/orders/order.model.js";

export const orderController = async (req, res) => {
  const user = req.user;
  const { paymentType, addressId, paymentStatus, tax, shippingCost } = req.body;
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
        subTotal:
          (findingProduct.price - findingProduct.discountPrice) * item.quantity,
        quantity: item.quantity,
        productId: item.productId,
        price: findingProduct.price,
      };
    }),
  );
  let totalPrice = 0;
  products.map((item) => {
    totalPrice += item.subTotal;
  });
  //create new order
  const orders = await orderModel.create({
    userId: user._id,
    products: products,
    paymentType: paymentType,
    addressId,
    paymentStatus,
    totalPrice: Number(totalPrice) + Number(tax) + Number(shippingCost),
    tax,
    shippingCost,
  });
  // clear all cart products after complete order
  cartProducts.map(async (item) => {
    await cartModel.findByIdAndDelete(item._id);
  });

  return res.status(201).json({
    message: "Order created successfuly",
    success: true,
    data: orders,
  });
};
