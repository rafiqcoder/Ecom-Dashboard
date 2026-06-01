import axios, { AxiosError } from "axios";
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
export async function createAddressApi({
  name,
  phone,
  addressLine1,
  city,
  state,
  zipCode,
  country,
}: {
  name: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}) {
  try {
    const response = await api.post("/create-new-address", {
      name,
      phone,
      addressLine1,
      city,
      state,
      zipCode,
      country,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
}
