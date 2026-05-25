import { getUserOrder } from "@/apis/orders/getOrder.api";
import { setError, setSuccess, setMessage, setLoading, setData, resetState } from "../toolkit/profile.slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

export const useOrders = () => {
    const dispatch = useDispatch();

    async function getOrders() {
        dispatch(setLoading(true));
        dispatch(setError(""));
        dispatch(setSuccess(false));
        dispatch(resetState());
        try {
            const response = await getUserOrder();
            console.log(response)
            if (response.success) {
                dispatch(setData(response.products));
                dispatch(setSuccess(true));
                dispatch(setMessage(response.message));
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

    return { getOrders };
}