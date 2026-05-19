import productModel from "../../../models/admin/createProducts/products.model.js";
import uploadFile from "../../../services/storage.service.js";

export const updateProductController = async (req, res) => {
  const user = req.user;
  // check if not admin
  if (user.role !== "admin") {
    return res.status(403).json({
      message: "No permission",
      success: false,
      err: "Only admin can update data",
    });
  }
  // product id
  const productId = req.params.productId;
  if (!productId) {
    return req.status(400).json({
      message: "Invalid product id",
      success: false,
      err: "Please provide product id for update product",
    });
  }
  // updated data
  const {
    name,
    description,
    price,
    discountPrice,
    discountStart,
    discountEnd,
    stockQuantity,
    stockStatus,
    // poster,
    // productImage,
    productCategory,
    productTag,
  } = req.body;
  // checking is product exist
  const isProduct = await productModel.findByIdAndUpdate(productId);
  if (!isProduct) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
      err: "This product doesn't exist with this id",
    });
  }
  const posterFile = req.file;
  // update data object
  let updatedDataObject = {
    name,
    description,
    price,
    discountPrice,
    discountStart,
    discountEnd,
    productCategory: productCategory.map((cat) => cat.toLowerCase()),
    productTag,
    stockQuantity,
    stockStatus,
  };
  // if update product image
  if (posterFile?.buffer) {
    const file = await uploadFile({
      buffer: posterFile.buffer,
      fileName: `${Date.now()}-${posterFile.originalname}`,
      folder: "product-images",
    });
    updatedDataObject.poster = file.url;
  }
  // update products
  const updatedProducts = await productModel.findByIdAndUpdate(
    productId,
    updatedDataObject,
  );

  return res.status(200).json({
    message: "Product update successfully",
    success: true,
    product: updatedProducts
  });
};
