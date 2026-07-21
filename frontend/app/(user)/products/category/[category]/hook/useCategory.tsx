import { getProductByCategory } from "@/apis/productByCategory/getProductByCategory";
import { useDispatch } from "react-redux";
import {
  setMessage,
  setProducts,
  setLoading,
  setError,
  setSuccess,
} from "../toolkit/product.slice";

export function useCategory() {
  const dispatch = useDispatch();
  async function getProductCategory({ category }: { category: string }) {
    try {
      dispatch(setLoading(true));
      dispatch(setProducts([]));
      const data = await getProductByCategory({ category });
      console.log(data)
      if (data.success) {
        dispatch(setProducts(data.products));
        dispatch(setMessage(data.message));
        return;
      }
      dispatch(setMessage(data.message));
      return;
    } catch (error) {
      dispatch(setSuccess(false))
      dispatch(setError("Something went wrong"));
      dispatch(setMessage("Products not available in this category"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    getProductCategory,
  };
}
