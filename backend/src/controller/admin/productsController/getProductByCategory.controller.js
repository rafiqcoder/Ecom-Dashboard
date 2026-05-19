import productModel from "../../../models/admin/createProducts/products.model.js";

export async function getProductControllerByCategory(req, res) {
    const user = req.user;
    const category = req.params?.category;
    if (!category) {
        return res.status(400).json({
            message: "Category is required",
            success: false,
            err: "Please provide a category to fetch the products",
        });
    }
    const products = await productModel.find({productCategory: category.toLowerCase()});
    if(!products || products.length === 0) {
        return res.status(404).json({
            message: "No products found",
            success: false,
            err: `No products found for category ${category}`,
        });
    }
    return res.status(200).json({
        message: "Products fetched successfully",
        success: true,
        products,
    });
}