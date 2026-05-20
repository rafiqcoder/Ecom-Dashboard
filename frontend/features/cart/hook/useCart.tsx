import { addToCartProducts } from "@/apis/cart/cart";
import { useDispatch } from "react-redux"
import { setError, setLoading, setMessage, setProducts } from "../toolkit/cart.toolkit";

export const userCart = () => {
    const dispatch = useDispatch()

    // function to add to cart products
    async function addToCart({ productId }: { productId: string }) {
        try {
            dispatch(setLoading(true));
            const response = await addToCartProducts(productId);
            if (response.success) {
                dispatch(setProducts(response.products));
                dispatch(setMessage(response.message))
            }
        } catch (error: unknown) {
            dispatch(setError(error.response?.data?.message || "Something went wrong"));
        }
        finally {
            dispatch(setLoading(false));
        }
    }

    return {
        addToCart
    }
}