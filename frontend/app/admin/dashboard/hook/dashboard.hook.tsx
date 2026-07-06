import { getDashboardData, getWeeklyData } from "@/apis/dashboard-data/data.api";
import { useDispatch } from "react-redux";
import {
  setData,
  setLoading,
  setMessage,
  setWeaklyData,
  setWeaklyMessage,
} from "../toolkit/dashboard.toolkit";
import toast from "react-hot-toast";

export const useDashboard = () => {
  const dispatch = useDispatch();

  // get dashboard data
  const handleGetDashboardData = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getDashboardData();
      if (response.success) {
        dispatch(setData(response.data));
        dispatch(setMessage(response.message));
      }
    } catch (error) {
      toast.error("An error occurred");
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  // get weakly data
  const handleGetWeeklyData = async () => {
    dispatch(setLoading(true));
    try {
      const response = await getWeeklyData();
      if (response.success) {
        dispatch(setWeaklyData(response.data));
        dispatch(setWeaklyMessage(response.message));
      }
    } catch (error) {
      toast.error("An error occurred");
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return { handleGetDashboardData, handleGetWeeklyData };
};
