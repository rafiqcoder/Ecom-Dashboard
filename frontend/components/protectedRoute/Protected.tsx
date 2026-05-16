"use client";
import React, { useEffect } from "react";
import { useAuth } from "../auth/hook/useAuth";
import { useSelector } from "react-redux";
import { initialInterface } from "../auth/authSlice/types/type";
import { useRouter } from "next/navigation";

function Protected({ children }: { children: React.ReactNode }) {
  //   const router = useRouter();
  const { handleGetMe } = useAuth();
  // get user from redux store
  //   const user = useSelector((state: { auth: initialInterface }) => state.auth);

  const getCurrentUser = async () => {
    try {
      await handleGetMe();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  //   useEffect(() => {
  //     if (user.success === false) {
  //       return router.push("/login");
  //     }
  //   }, [user.success, router]);
  return <div>{children}</div>;
}

export default Protected;
