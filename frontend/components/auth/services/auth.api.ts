import axios from "axios";
import { registerParam } from "./types/type";
const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});
// register user
export const register = async ({
  name,
  email,
  password,
  role,
}: registerParam) => {
  const response = await api.post("/register", { name, email, password, role });
  return response.data;
};
// login user
export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};
// logout user
export const logout = async () => {
  const response = await api.post("/logout");
  return response.data;
};
// get current user
export const getMe = async () => {
  const response = await api.get("/get-me");
  return response.data;
};
