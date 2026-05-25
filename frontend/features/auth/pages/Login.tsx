"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import { useAuth } from "../hook/useAuth";
import { initialInterface } from "../authSlice/types/type";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  // geeting current user 
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  useEffect(() => {
    if (user.success === true) {
      router.push("/");
    }
  }, [user.success, router]);

  // next router
  // login api
  const { handleLogin } = useAuth();

  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    },
  );

  // Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    await handleLogin({ email: formData.email, password: formData.password });
  };

  return (
    <div className=" bg-[#1a1a1a] lg:h-screen relative min-h-screen px-5 py-8">
      <div
        className="text-xl md:text-2xl lg:text-3xl tracking-widest uppercase 
        md:absolute static top-[10%] left-[10%] 
        transform md:-translate-x-[10%] md:-translate-y-[10%] 
        font-semibold text-white"
      >
        <TypewriterComponent
          options={{
            strings: ["Great to See You Again ", "at Dealpart"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className=" md:absolute top-[50%] left-[50%] md:-translate-x-[50%] w-full px-5 md:px-0 md:py-0 py-6 md:-translate-y-[50%]">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center w-full items-center 
        [transform-style:preserve-3d] 
        transition-all duration-1000 
        peer-checked:[transform:rotateY(-180deg)]"
        >
          {/* Login Form */}
          <div
            className=" md:absolute w-full h-[400px] md:w-[500px] md:h-[500px] flex flex-col justify-center items-center gap-5 
          md:px-8 px-6 lg:px-14 md:py-4 py-3 lg:py-6 rounded-[15px]
          shadow-[inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
          >
            <div className="text-[25px] font-semibold pb-[10px] text-white">
              Sign In
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full min-h-[45px] text-white outline-none transition-all duration-300 px-[7px]
            bg-[#212121] rounded-[6px] border-2 border-[#212121]
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            placeholder:text-[#999]
            focus:scale-105
            focus:placeholder:opacity-0
            focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
            />

            {/* Password */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full min-h-[45px] text-white outline-none transition-all duration-300 px-[7px]
            bg-[#212121] rounded-[6px] border-2 border-[#212121]
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            placeholder:text-[#999]
            focus:scale-105
            focus:placeholder:opacity-0
            focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
            />

            <button
              type="submit"
              className="px-[35px] py-[10px] cursor-pointer bg-[#212121] rounded-[6px]
            border-2 border-[#212121] text-white text-[15px] font-bold
            transition-all duration-300
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            hover:scale-105
            hover:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
            >
              Signin
            </button>

            <span className="text-[13px] text-white">
              Don{"'"}t have an account?{" "}
              <Link
                href={"/register"}
                className="font-bold underline cursor-pointer"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
