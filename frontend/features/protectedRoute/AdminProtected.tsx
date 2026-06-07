"use client"
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { initialInterface } from "@/global/types/type";

function AdminProtected({ children }: { children: React.ReactNode }) {
  // getting user from redux store
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  // next router
  const router = useRouter();

  useEffect(() => {
    if(!user.success){
        router.push("/login")
    }
    if (user.success === true) {
      if (user.data?.role !== "admin") {
        router.push("/");
      }
    }
  }, [user.success, router]);
  return <div id="protection-div">{children}</div>;
}

export default AdminProtected;
