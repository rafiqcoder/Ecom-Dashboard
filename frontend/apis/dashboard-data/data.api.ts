import "dotenv/config";
import axios from "axios";

const api = axios.create({
  baseURL: `http://localhost:8000`,
  withCredentials: true
});

export const getDashboardData = async () => {
  try {
    const res = await api.get(`/admin/dashboard/data`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// get weekly data
export const getWeeklyData = async () => {
  try {
    const res = await api.get(`/admin/dashboard/weeklyData`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
