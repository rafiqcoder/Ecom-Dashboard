import axios, { AxiosError } from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

export const editProfileApi = async ({
  email,
  name,
  phone,
  gender,
}: {
  email?: string | undefined;
  name?: string | undefined;
  phone?: string | undefined;
  gender?: string | undefined;
}) => {
  try {
    const response = await api.patch("/update/profile", {
      email,
      name,
      phone,
      gender,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data);
    }
  }
};
