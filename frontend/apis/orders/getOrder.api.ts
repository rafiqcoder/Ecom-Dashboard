import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
// get all order by user id
export const getUserOrder = async () => {
  try {
    const response = await api.get("/my-orders");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};

// get order details by id
export const getOrderDetailsById = async (orderId: string) => {
  try {
    const response = await api.get(`/order/${orderId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
  }
};
