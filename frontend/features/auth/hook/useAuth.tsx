import { useDispatch } from "react-redux";
import {
  setErrorState,
  setLoading,
  setMessage,
  setUserState,
} from "../authSlice/auth.slice";
import { getMe, login, logout, register } from "../services/auth.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export const useAuth = () => {
  // router
  const router = useRouter();
  // dispatch
  const dispatch = useDispatch();

  // register handling
  async function handleRegister({
    name,
    email,
    password,
    role,
  }: {
    name: string;
    email: string;
    password: string;
    role: string;
  }) {
    try {
      dispatch(setLoading(true));
      const data = await register({ name, email, password, role });
      if (data.success === true) {
        dispatch(setUserState(data.user));
        dispatch(setMessage(data.message));
        toast.success(data.message);
        return;
      } else {
        dispatch(setErrorState(data.message));
        dispatch(setMessage(data.message));
        toast.success(data.message);
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
      toast.error(error.response?.data?.message || "Someting went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  // login handle
  async function handleLogin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      dispatch(setLoading(true));
      const data = await login({ email, password });
      if (data.success === true) {
        dispatch(setUserState(data.user));
        toast.success(data.message);
        return;
      } else {
        dispatch(setErrorState(data.message));
        toast.success(data.message);
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
      toast.error(error.response?.data?.message || "Someting went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  // get-me
  async function handleGetMe() {
    try {
      dispatch(setLoading(true));
      const data = await getMe();
      if (data.success === true) {
        dispatch(setUserState(data.user));
        dispatch(setMessage(data.message));
        return;
      } else {
        dispatch(setErrorState(data.message));
        dispatch(setMessage(data.message));
        toast.error(data.message);
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }

  // logout handle
  async function handleLogout() {
    try {
      dispatch(setLoading(true));
      const data = await logout();
      if (data.success === true) {
        dispatch(setUserState(data.user));
        dispatch(setMessage(data.message));
        toast.success(data.message);
        return;
      } else {
        dispatch(setErrorState(data.message));
        dispatch(setMessage(data.message));
        toast.error(data.message);
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
      toast.error(error.response?.data?.message || "Someting went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    handleRegister,
    handleLogin,
    handleGetMe,
    handleLogout
  };
};
