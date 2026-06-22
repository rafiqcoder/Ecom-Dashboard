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
    // this line prevent error "The operation was aborted due to timeout" in nextjs because 
    if(!user) return;
    if(!user.success){
        router.push("/login")
    }
    if (user.success === true) {
      if (user.data?.role !== "admin") {
        router.push("/");
      }
      else{
        router.push("/admin/dashboard")
      }
    }
  }, []);
  return <div id="protection-div">{children}</div>;
}

export default AdminProtected;
