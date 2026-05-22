"use client";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";
import { initialInterface } from "@/features/auth/authSlice/types/type";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import Navber from "./Navber";
import Category from "../categories/Category";
import { CartSliceInterface } from "@/features/cart/toolkit/types/type";
import { useEffect } from "react";
import { userCart } from "@/features/cart/hook/useCart";

function Header() {
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  // use cart
  const { getCartProduct } = userCart()
  // get cart products
  useEffect(() => {
    async function getCart() {
      await getCartProduct();
    }
    getCart();
  }, [])
  const { products, loading, error, message } = useSelector((state: { cart: CartSliceInterface }) => state.cart);

  return (
    <div className=" w-full font-monserrat">
      <div className="">
        <div className=" py-5 border-b border-[#0000001A]">
          <header className="px-3 flex items-center justify-between">
            <div className=" flex items-center gap-1">
              <div className=" px-2 ">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={140}
                  height={300}
                />
              </div>
              <div className=" flex items-center gap-1 border-r border-l border-[#00000099] px-2">
                <FaLocationDot className="text-xl text-black md:text-2xl" />
                <div className=" text-black">
                  <p className="text-[12px] md:text-[13px] font-normal ">
                    Delivered to
                  </p>
                  <p className="text-[13px] md:text-[14px] font-medium">
                    Your Address
                  </p>
                </div>
              </div>
              <div className="px-2 flex items-center gap-1">
                <div className=" flex items-center gap-0.5">
                  <Image
                    src={"/images/americanFlag.webp"}
                    alt="flag"
                    width={25}
                    height={30}
                  />
                  <p>EN</p>
                </div>
                <MdKeyboardArrowDown className=" text-[15px] font-semibold" />
              </div>
            </div>

            <div className=" flex items-center gap-2 lg:gap-4">
              <div className=" flex items-center px-2 md:px-3 py-2 md:py-1.5 md:pl-6   bg-[#EAF8E7] rounded-full">
                <input
                  type="text"
                  className="text-[14px] font-medium outline-none"
                  placeholder="What you're looking for"
                />
                <div className="px-4 cursor-pointer md:px-6 py-1 flex items-center gap-1 text-[15px] md:text-[17px] bg-white rounded-full">
                  <FiSearch />
                  <span className="text-[14px] md:text-[15px] font-medium">
                    Search
                  </span>
                </div>
              </div>
              {/* profile icons */}
              <div>
                {user.success ? (
                  <div className=" p-2 rounded-full transition duration-300 bg-[#9b9b9b3b] cursor-pointer hover:bg-[#EAF8E7]">
                    <FaUser className="text-[14px] md:text-[15px] " />
                  </div>
                ) : (
                  <Link href={"/login"}>
                    <button className="btn px-3 py-2">Login</button>
                  </Link>
                )}
              </div>{" "}
              <Link href={"/cart"}>
                <div className=" flex items-center gap-1.5 relative">
                  {user.success && <span className=" absolute -top-4 bg-[#4EA674] rounded-full px-[7px] text-white text-[13px] py-[1px] -right-3">{products.length}</span>}
                  <FaShoppingCart className="text-lg" />
                  <span className="text-[15px] font-medium cursor-pointer">
                    Cart
                  </span>
                </div>
              </Link>
            </div>
          </header>
        </div>
        {/* middle navber */}
        <div className="">
          <Navber />
        </div>

        {/* category header */}
        <Category />
      </div>
    </div>
  );
}

export default Header;
