import { getProductByCategory } from "@/apis/productByCategory/getProductByCategory";
import { useDispatch } from "react-redux";
import {
  setMessage,
  setProducts,
  setLoading,
  setError,
} from "../toolkit/product.slice";

export function useCategory() {
  const dispatch = useDispatch();
  async function getProductCategory({ category }: { category: string }) {
    try {
      dispatch(setLoading(true));
      dispatch(setProducts([]));
      const data = await getProductByCategory({ category });
      if (data.success) {
        dispatch(setProducts(data.products));
        dispatch(setMessage(data.message));
        return;
      }
      dispatch(setMessage(data.message));
      return;
    } catch (error) {
      dispatch(setError("Something went wrong"));
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    getProductCategory,
  };
}
