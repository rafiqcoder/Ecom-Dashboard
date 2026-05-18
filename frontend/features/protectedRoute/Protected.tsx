"use client";

import React, { useEffect, useCallback } from "react";
import { useAuth } from "../auth/hook/useAuth";

function Protected({ children }: { children: React.ReactNode }) {
  const { handleGetMe } = useAuth();

  const getCurrentUser = useCallback(async () => {
    try {
      await handleGetMe();
    } catch (error) {
      console.log(error);
    }
  }, [handleGetMe]);

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return <div>{children}</div>;
}

export default Protected;