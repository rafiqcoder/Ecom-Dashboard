import { useDispatch } from "react-redux";
import {
  setErrorState,
  setLoading,
  setUserState,
} from "../authSlice/auth.slice";
import { getMe, login, register } from "../services/auth.api";

export const useAuth = () => {
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
        return;
      } else {
        dispatch(setErrorState(data.message));
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
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
        return;
      } else {
        dispatch(setErrorState(data.message));
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
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
        return;
      } else {
        dispatch(setErrorState(data.message));
      }
    } catch (error: unknown) {
      dispatch(
        setErrorState(error.response?.data?.message || "Someting went wrong"),
      );
    } finally {
      dispatch(setLoading(false));
    }
  }

  return {
    handleRegister,
    handleLogin,
    handleGetMe,
  };
};
