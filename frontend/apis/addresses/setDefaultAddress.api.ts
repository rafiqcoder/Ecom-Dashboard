import axios, { AxiosError } from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const setDefaultAddressApi = async (addressId: string) => {
  try {
    const response = await api.patch(`/set-default-address/${addressId}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};
