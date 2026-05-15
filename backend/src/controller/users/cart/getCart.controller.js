// geeting cart product controller
import productModel from "../../../models/admin/createProducts/products.model.js";
import cartModel from "../../../models/user/cart/cartProduct.model.js";

export const getCartController = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      message: "This is not found",
      success: false,
    });
  }
  // find user product
  const products = await cartModel.find({ userId: user._id });
  if (products.length === 0) {
    return res.status(200).json({
      message: "Successfully fetch products",
      success: true,
      products,
    });
  }
  // store all product in a array
  const allProducts = await Promise.all(
    products.map(async (product) => {
      const pro = await productModel.findById(product.productId);
      if(!pro){
        return null;
      }
      return {
        ...pro.toObject(),
        quantity: product.quantity,
      };
    }),
  );

  return res.status(200).json({
    message: "Successfully fetch cart products",
    success: true,
    products: allProducts,
  });
};
