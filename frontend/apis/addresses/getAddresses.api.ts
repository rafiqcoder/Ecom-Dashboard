import axios, { AxiosError } from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export async function getAddressesApi() {
  try {
    const response = await api.get("/get-addresses");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
}
