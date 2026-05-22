"use client";
import { IoMenu } from "react-icons/io5";
import { MenuDataInterface } from "./types/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navber() {
  const menuData: MenuDataInterface = {
    leftData: {
      menu: {
        name: "Menu",
        icon: <IoMenu />,
      },
      link: [
        {
          name: "Explore",
          path: "/explore",
        },
        {
          name: "Deals",
          path: "/deals",
        },
        {
          name: "Saved",
          path: "/saved",
        },
      ],
    },
    rightData: {
      link: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Products",
          path: "/products",
        },
        {
          name: "About Us",
          path: "/about",
        },  
        {
          name: "Contact",
          path: "/contact",
        },
      ],
    },
  };
  const [pathName, setPathName] = useState("/");
  const paths = usePathname();
  useEffect(() => {
    setPathName(paths)
  }, [paths]);
  return (
    <div className=" w-full border-b border-[#0000001A] py-2 md:py-4 lg:py-6">
      <nav className=" flex items-center justify-between px-3 ">
        <div className=" flex items-center gap-3 md:gap-6">
          <div className=" flex items-center cursor-pointer border-r border-[#00000099] pr-3 gap-1 text-lg">
            <span>{menuData.leftData.menu.icon}</span>
            <p className="text-[14px] md:text-[15px]  font-normal">
              {menuData.leftData.menu.name}
            </p>
          </div>
          <div className=" flex font-medium items-center md:gap-6 lg:gap-8 gap-3">
            {menuData.leftData.link.map(({ name, path }, id) => {
              return (
                <Link href={path} key={id} className=" ">
                  <p
                    className={`text-[14px] transition duration-300 md:text-[15px] relative  hover:text-[#4EA674] ${path === pathName ? "border-b border-[#4EA674] text-[#4EA674]" : "borderAnimate"}`}
                  >
                    {name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <div className=" flex items-center md:gap-6 lg:gap-8 font-medium gap-3">
            {menuData.rightData.link.map(({ name, path }, id) => {
              return (
                <Link href={path} key={id} className=" ">
                  <p
                    className={`text-[14px] transition duration-300 md:text-[15px] relative  hover:text-[#4EA674] ${path === pathName ? "border-b border-[#4EA674] text-[#4EA674]" : "borderAnimate"}`}
                  >
                    {name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
