import productModel from "../../../models/admin/createProducts/products.model.js";
import uploadFile from "../../../services/storage.service.js";

// create new products
export const createNewProductController = async (req, res) => {
  const user = req.user;
  if (user.role !== "admin") {
    return res.status(406).json({
      message: "Not Acceptable",
      success: false,
      err: "Only admin can add new product",
    });
  }
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

  // create poster URL
  const imagesFile = req.file;
  const poster = await uploadFile({
    buffer: imagesFile.buffer,
    fileName: `${Date.now()}-${imagesFile.originalname}`,
    folder: "product-images",
  });

  //   const uploadImages = [];
  const posterURL = poster.url;

  const newProduct = await productModel.create({
    name,
    description,
    price,
    discountPrice,
    discountStart,
    discountEnd,
    stockQuantity,
    stockStatus,
    productCategory: productCategory.map((cat) => cat.toLowerCase()),
    productTag,
    poster: posterURL,
  });
  return res.status(201).json({
    message: "Product successfully created",
    success: true,
    newProduct,
  });
};
