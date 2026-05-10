import uploadFile from "../../../services/storage.service.js";

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
    fileName: `${Date.now()}-${posterFile.originalname}`,
    folder: "product-images",
  });

  //   const uploadImages = [];
  const posterURL = poster.url;

  console.log(posterFile, name, description);
  // console.log(
  //   name,
  //   description,
  //   poster,
  //   price,
  //   discountEnd,
  //   discountStart,
  //   discountPrice,
  //   productCategory,
  //   productTag,
  // );
};
