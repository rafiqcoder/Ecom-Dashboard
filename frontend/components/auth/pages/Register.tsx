"use client";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TypewriterComponent from "typewriter-effect";
import { initialInterface } from "../authSlice/types/type";
import { useAuth } from "../hook/useAuth";
import { useRouter } from "next/navigation";

const Register = () => {
  // check if register
  const router = useRouter();
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  useEffect(() => {
    if (user.success === true) {
      router.back();
    }
  }, [user.success]);

  // import useAuth
  const { handleRegister } = useAuth();

  const [loginAs, setLoginAs] = useState("");

  // register states
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    password: string;
    role: string;
  }>({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  // Handle Input Change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submit
  const [submit, setSubmit] = useState(false);
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.password === "" ||
      formData.role === ""
    ) {
      setSubmit(true);
      return;
    }

    const response = await handleRegister({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });
  };

  return (
    <div className=" bg-[#1a1a1a] lg:h-screen relative min-h-screen px-5 py-8">
      <div className=" text-xl md:text-2xl lg:text-3xl tracking-widest uppercase md:absolute static top-[10%] left-[10%] transform md:-translate-x-[10%] md:-translate-y-[10%] font-semibold text-white">
        <TypewriterComponent
          options={{
            strings: ["Sign Up to Continue ", "with Dealpart"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      {/* form */}
      <div className=" md:absolute top-[50%] left-[50%] md:-translate-x-[50%] w-full px-5 md:px-0 md:py-0 py-6 md:-translate-y-[50%]">
        <form
          onSubmit={handleSubmit}
          className="relative flex justify-center w-full items-center 
        [transform-style:preserve-3d] 
        transition-all duration-1000 
        peer-checked:[transform:rotateY(-180deg)]"
        >
          {/* Signup Form */}
          <div
            className=" md:absolute w-full md:w-[500px] md:h-[500px] flex flex-col justify-center items-center gap-2
          md:px-8 px-6 lg:px-14 md:py-4 py-3 lg:py-6 rounded-[15px]
          shadow-[inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
          >
            <div className="text-[25px] font-semibold pb-[10px] text-white">
              Sign Up
            </div>
            {/* name input */}
            <div className=" w-full">
              <input
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Name"
                className="w-full min-h-[45px] text-white outline-none transition-all duration-300 px-[7px]
            bg-[#212121] rounded-[6px] border-2 border-[#212121]
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            placeholder:text-[#999]
            focus:scale-105
            focus:placeholder:opacity-0
            focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
              />
              <p
                className={`text-[13px] font-medium text-red-700 mt-0.5 opacity-0 ${formData.name === "" && submit === true ? " opacity-100" : "opacity-0"}`}
              >
                Please provide Name
              </p>
            </div>
            {/* email input */}
            <div className=" w-full">
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full min-h-[45px] text-white outline-none transition-all duration-300 px-[7px]
            bg-[#212121] rounded-[6px] border-2 border-[#212121]
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            placeholder:text-[#999]
            focus:scale-105
            focus:placeholder:opacity-0
            focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
              />
              <p
                className={`text-[13px] font-medium text-red-700 mt-0.5 opacity-0 ${formData.email === "" && submit === true ? " opacity-100" : "opacity-0"}`}
              >
                Please provide Email
              </p>
            </div>
            {/* password input */}
            <div className=" w-full">
              <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
                className="w-full min-h-[45px] text-white outline-none transition-all duration-300 px-[7px]
            bg-[#212121] rounded-[6px] border-2 border-[#212121]
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            placeholder:text-[#999]
            focus:scale-105
            focus:placeholder:opacity-0
            focus:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
              />
              <p
                className={`text-[13px] font-medium text-red-700 mt-0.5 opacity-0 ${formData.password === "" && submit === true ? " opacity-100" : "opacity-0"}`}
              >
                Please provide Password
              </p>
            </div>
            {/* role selection */}
            <div className=" w-full">
              <div className=" w-full flex items-center lg:gap-8 md:gap-5 gap-3">
                <h3 className=" text-white text-[16px] font-medium">Role :</h3>
                <div className=" flex items-center justify-around gap-4">
                  <label className=" flex items-center gap-3">
                    <div>
                      <input
                        onChange={(e) => {
                          setLoginAs("user");
                          handleChange(e);
                        }}
                        name="role"
                        type="checkbox"
                        className="input"
                        value={"user"}
                        checked={loginAs === "user" ? true : false}
                      />
                      <span className="custom-checkbox"></span>
                    </div>
                    <p className=" text-gray-300 text-[14px] mb-1.5">User</p>
                  </label>
                  <label className=" flex items-center gap-3">
                    <div>
                      <input
                        onChange={(e) => {
                          setLoginAs("admin");
                          handleChange(e);
                        }}
                        value={"admin"}
                        name="role"
                        type="checkbox"
                        className="input"
                        checked={loginAs === "admin" ? true : false}
                      />
                      <span className="custom-checkbox"></span>
                    </div>
                    <p className=" text-gray-300 text-[14px] mb-1.5">Admin</p>
                  </label>
                </div>
              </div>
              <p
                className={`text-[13px] font-medium text-red-700 mt-0.5 opacity-0 ${formData.role === "" && submit === true ? " opacity-100" : "opacity-0"}`}
              >
                Please select Role
              </p>
            </div>

            <button
              type="submit"
              className="px-[35px] py-[10px] cursor-pointer bg-[#212121] rounded-[6px]
            border-2 border-[#212121] text-white text-[15px] font-bold
            transition-all duration-300
            shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6)]
            hover:scale-105
            hover:shadow-[6px_6px_10px_rgba(0,0,0,1),1px_1px_10px_rgba(255,255,255,0.6),inset_2px_2px_10px_rgba(0,0,0,1),inset_-1px_-1px_5px_rgba(255,255,255,0.6)]"
            >
              Signup
            </button>

            <span className="text-[13px] text-white mt-2">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="font-bold underline cursor-pointer"
              >
                Sign In
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
