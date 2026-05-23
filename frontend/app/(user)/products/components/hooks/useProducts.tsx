import { getAllProducts } from "@/apis/products/getAllProducts";
import { setError, setLoading, setMessage, setProducts } from "../toolkit/allProducts.slice";
import { useDispatch } from "react-redux";

export function useProductsHook() {
  const dispatch = useDispatch();
  async function getAllProductsHook() {
    try {
      dispatch(setLoading(true));
      const response = await getAllProducts();
      if (response.success) {
        dispatch(setProducts(response.products));
        dispatch(setMessage(response.message));
        return;
      }
      dispatch(setMessage(response.message));
    } catch (error: unknown) {
      dispatch(setError(error.response?.data?.message || "Something went wrong"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    getAllProductsHook,
  };
}
