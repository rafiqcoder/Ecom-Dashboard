// add to cart product
import productModel from "../../../models/admin/createProducts/products.model.js";
import cartModel from "../../../models/user/cart/cartProduct.model.js";

export const addToCartController = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({
        message: "This user is not found",
        success: false,
      });
    }
    // get product id
    const productId = req.params?.productId;
    // check if product not exist
    const isProductExist = await productModel.findById(productId);
    if (!isProductExist) {
      return res.status(404).json({
        message: "This product doesn't exist",
        success: false,
      });
    }
    // check if product out of stock
    if(isProductExist.stockQuantity === 0){
      return res.status(400).json({
        message: "This product is out of stock",
        success: false,
      });
    }
    // check if product already exist
    const isProductAlreadyExist = await cartModel.findOne({ productId, userId: user._id });
    if (isProductAlreadyExist) {
      isProductAlreadyExist.quantity = isProductAlreadyExist.quantity + 1;
      await isProductAlreadyExist.save();
      res.status(201).json({
        message: "This product is exist in your cart",
        success: true,
        product: isProductAlreadyExist,
      });
      return;
    }
    // add new product to cart
    const newProduct = await cartModel.create({
      productId,
      userId: user._id,
      quantity: 1,
    });
    res.status(201).json({
      message: "Successfully added to cart",
      success: true,
      product: newProduct,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
};
