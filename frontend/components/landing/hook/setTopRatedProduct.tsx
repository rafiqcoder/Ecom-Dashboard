// hooks to getting top rated products data and update state.
import { useDispatch } from "react-redux";
import { setError, setLoading, setMessage, setTopRated } from "../toolkit/topRated.slice";
import { getTopRatedProducts } from "@/apis/products/topRatedProduct.api";

export const useTopRatedProduct = () => {
    const dispatch = useDispatch();
    async function getTopRated() {
        try {
            dispatch(setLoading(true));
            const response = await getTopRatedProducts();
            if (response.success) {
                dispatch(setTopRated(response.products));
                dispatch(setMessage(response.message))
            }
        } catch (error: unknown) {
            dispatch(setError(error.response?.data?.message || "Something went wrong"));
        }
        finally {
            dispatch(setLoading(false));
        }
    }
    return { getTopRated };
}