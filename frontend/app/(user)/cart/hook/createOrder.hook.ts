import { createOrderApi } from "@/apis/orders/createOrder.api";
import { useDispatch } from "react-redux";
import {
  setLoading,
  setError,
  setSuccess,
  setData,
  setMessage,
  resetState,
} from "../../profile/toolkit/profile.slice";
import toast from "react-hot-toast";
import { useOrders } from "../../profile/hook/useOrders";

export const createOrder = () => {
  const dispatch = useDispatch();
  const { getOrders } = useOrders();
  async function createOrderHook(order: {
    paymentType: string;
    paymentStatus: string;
    addressId: string | undefined;
    tax: number;
    shippingCost: number;
  }) {
    dispatch(setLoading(true));
    dispatch(setError(""));
    dispatch(setSuccess(false));
    dispatch(resetState());
    try {
      const response = await createOrderApi(order);
      console.log(response)
      if (response.success) {
        await getOrders();
        dispatch(setSuccess(true));
        dispatch(setMessage(response.message));
        toast.success(response.message);
      } else {
        dispatch(setError(response.message));
        dispatch(setSuccess(false));
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(setError("An error occurred"));
      dispatch(setSuccess(false));
      toast.error("An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return { createOrderHook };
};
