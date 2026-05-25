import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const updateProfileImageApi = async (formData: FormData) => {
  try {
    const response = await api.patch("/update/profile", formData);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};
