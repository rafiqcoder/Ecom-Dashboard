"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Buttons from "../common/Buttons";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { carouselData } from "./types/type";
import { useDispatch, useSelector } from "react-redux";
import { setCarousel } from "./toolkit/carousel.slice";

function Section1() {
  const dispatch = useDispatch()
  const carouselData: carouselData[] = [
    {
      titleSm: "Discover the Latest Deals –",
      title: "Up to 50% Off!",
      btn: "Shop Now",
      path: "/products",
    },
    {
      titleSm: "Upgrade Your Style –",
      title: "Up to 70% Off Fashion Deals",
      btn: "Shop Collection",
      path: "/fashion",
    },
    {
      titleSm: "Latest Tech Arrivals –",
      title: "Smart Gadgets at Best Prices",
      btn: "Explore Now",
      path: "/electronics",
    },
    {
      titleSm: "Luxury Looks for Less –",
      title: "New Season, New Discounts",
      btn: "Discover More",
      path: "/new-arrivals",
    },
    {
      titleSm: "Step Into Street Style –",
      title: "Exclusive Sneaker Drops",
      btn: "Shop Sneakers",
      path: "/sneakers",
    },


  ]
  const [showingIdx, setShowingIdx] = useState<number>(0);
  useEffect(() => {
    dispatch(setCarousel(showingIdx));
  }, [showingIdx]);

  const carouNum = useSelector((state: { carousel: { carouselIdx: number } }) => state.carousel.carouselIdx);
  console.log(carouNum)
  return (
    <div className=" relative font-lato min-h-[60vh] h-[300px] lg:h-[60vh] rounded overflow-hidden w-full px-4 py-6">
      <div className="h-full overflow-x-hidden flex relative z-40 w-full items-center">
        {
          carouselData.map((item, idx) => {
            return (
              <div key={idx} className=" shrink-0 relative bottom-0  lg:bottom-16 left-[10%] lg:left-[20%] w-full transition-all duration-700 ease-in-out" style={{ transform: `translateX(-${carouNum * 100}%)` }}>
                <h3 className=" font-medium text-md sm:text-2xl text-xl md:text-3xl lg:text-4xl text-white">{item.titleSm}</h3>
                <h1 className=" font-semibold md:text-5xl sm:text-4xl text-3xl lg:text-6xl  text-white md:mt-2 mt-1 lg:mt-3">{item.title}</h1>
                <div className=" md:mt-7 mt-4 relative z-50">
                  <Link href={item.path} className=" ">
                    <Buttons>
                      {item.btn}
                    </Buttons>
                  </Link>
                </div>
              </div>
            );
          })
        }
      </div>

      {/* arrows */}
      <div onClick={() => setShowingIdx(showingIdx > 0 ? showingIdx - 1 : carouselData.length - 1)} className=" absolute top-[50%] translate-y-[-50%] z-40 left-5 transition duration-300 hover:bg-[#4EA674] md:px-2 px-1 lg:px-3 md:py-2 py-1 lg:py-3 bg-white text-black cursor-pointer rounded-full">
        <FaArrowLeftLong className=" " />
      </div>
      <div onClick={() => setShowingIdx(showingIdx === carouselData.length - 1 ? 0 : showingIdx + 1)} className=" absolute top-[50%] translate-y-[-50%] z-40 right-5 transition duration-300 hover:bg-[#4EA674] md:px-2 px-1 lg:px-3 md:py-2 py-1 lg:py-3 bg-white text-black cursor-pointer rounded-full">
        <FaArrowRightLong className=" " />
      </div>

      {/* backgrounds */}
      <div className=" absolute landingBgColor h-full w-[30%] z-20 left-0 top-0"></div>
      <div className="landingBg absolute w-[70%]  z-20 top-0 right-0 h-full"></div>
    </div>
  );
}
export default Section1;
