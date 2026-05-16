"use client";
import { initialInterface } from "@/features/auth/authSlice/types/type";
import { FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";

function ProfileIcon() {
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  return (
    <div>
      {user.success ? (
        <div className=" p-2 rounded-full transition duration-300 bg-[#5555553b] cursor-pointer hover:bg-[#EAF8E7]"><FaUser className=" text-[16px] " /></div>
      ) : (
        <button className="btn px-3 py-2">Login</button>
      )}
    </div>
  );
}

export default ProfileIcon;
