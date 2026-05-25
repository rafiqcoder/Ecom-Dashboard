import orderModel from "../../../models/user/orders/order.model.js";

export const myOrderController = async (req, res) => {
    const user = req.user;

    // find order from model
    const products = await orderModel.find({ userId: user._id });
    if (!products) {
        return res.status(404).json({
            success: false,
            message: "No orders found"
        });
    }

    return res.status(200).json({
        success: true,
        message: "Orders found",
        products: products
    });

}