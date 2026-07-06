"use client";

import React, { useEffect, useCallback } from "react";
import { useAuth } from "../auth/hook/useAuth";
import { useSelector } from "react-redux";
import { initialInterface } from "@/global/types/type";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";

function Protected({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  // get current user
  const { handleGetMe } = useAuth();
  // getting user from redux store
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  // get current user function
  const getCurrentUser = useCallback(async () => {
    try {
      await handleGetMe();
    } catch (error) {
      console.log(error);
    }
  }, [handleGetMe]);

  useEffect(() => {
    getCurrentUser();
  }, []);

  useEffect(() => {
    // if (!user.success) return;
    if (user.success) {
      if (user.data.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    }
  }, [user]);

  if (user.loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader />{" "}
      </div>
    );
  }

  return <div>{children}</div>;
}

export default Protected;
