import {
  addToCartProducts,
  getUserCart,
  removeProductFromCart,
  updateCartProductQuantity,
} from "@/apis/cart/cart";
import { useDispatch } from "react-redux";
import {
  setError,
  setLoading,
  setMessage,
  setProducts,
} from "../toolkit/cart.toolkit";
import { Product } from "@/components/landing/types/type";
import toast from "react-hot-toast";

export const userCart = () => {
  const dispatch = useDispatch();
  // get cart product
  async function getCartProduct() {
    try {
      dispatch(setLoading(true));
      const response: {
        message: string;
        success: boolean;
        products: Product[];
      } = await getUserCart();
      if (response.success) {
        dispatch(setProducts(response.products));
      }
      dispatch(setMessage(response.message));
    } catch (error: unknown) {
      dispatch(
        setError(error.response?.data?.message || "Something went wrong"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }
  // function to add to cart products
  async function addToCart({ productId }: { productId: string }) {
    try {
      dispatch(setLoading(true));
      const response = await addToCartProducts(productId);
      dispatch(setMessage(response.message));
      toast.success(response.message);
      await getCartProduct();
    } catch (error: unknown) {
      dispatch(
        setError(error.response?.data?.message || "Something went wrong"),
      );
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  // update product quantity
  async function updateProductQuantity({
    productId,
    quantityType,
  }: {
    productId: string;
    quantityType: "increase" | "decrease";
  }) {
    try {
      dispatch(setLoading(true));
      const response = await updateCartProductQuantity({
        productId,
        quantityType,
      });
      dispatch(setMessage(response.message));
      toast.success(response.message);
      await getCartProduct();
    } catch (error: unknown) {
      dispatch(
        setError(error.response?.data?.message || "Something went wrong"),
      );
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  // remove from cart
  async function removeFromCart({ productId }: { productId: string }) {
    try {
      dispatch(setLoading(true));
      const response = await removeProductFromCart(productId);
      dispatch(setMessage(response.message));
      toast.success(response.message);
      await getCartProduct();
    } catch (error: unknown) {
      dispatch(
        setError(error.response?.data?.message || "Something went wrong"),
      );
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    addToCart,
    getCartProduct,
    updateProductQuantity,
    removeFromCart,
  };
};
