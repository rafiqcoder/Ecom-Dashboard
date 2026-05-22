import type { HeroSectionData } from "./types/type";
import Image from "next/image";
import Link from "next/link";
import Buttons from "../common/Buttons";

function Section2() {
  const heroSectionData: HeroSectionData = {
    fashionBanner: {
      title: "New Year! New Fashion",
      image: "/images/newFassion.png",
      buttonText: "Shop Now",
      path: "/products/fashion",
    },

    gamingAccessories: {
      title: "Gaming accessories",
      seeMore: "/gaming",

      items: [
        {
          id: 1,
          title: "Headsets",
          image: "/images/headset.png",
          path: "/products/headsets",
        },
        {
          id: 2,
          title: "Mouse",
          image: "/images/Mouse.png",
          path: "/products/mouse",
        },
        {
          id: 3,
          title: "Controller",
          image: "/images/controller.png",
          path: "/products/controller",
        },
        {
          id: 4,
          title: "Chair",
          image: "/images/GamingChair.png",
          path: "/products/gaming-chair",
        },
      ],
    },

    promoBanners: [
      {
        id: 1,
        title: "BE THE WINNER",
        subtitle: "Gaming Laptop",
        price: "$1990",
        image: "/images/gamingLaptop.png",
        buttonText: "More Details",
        path: "/products/laptop",
      },

      {
        id: 2,
        title: "Redmi Y3",
        subtitle: "New! Blue",
        image: "/images/smartphone.png",
        buttonText: "Shop Now",
        path: "/products/redmi-y3",
      },

      {
        id: 3,
        title: "Philips 4K Ambilight TV",
        price: "$750.99",
        image: "/images/tv.png",
        buttonText: "Shop Now",
        path: "/products/philips-tv",
      },
    ],
  };
  return (
    <div className=" lg:absolute -top-24 z-40 w-full font-lato pb-6 py-5">
      <div className=" px-6 md:px-10 lg:px-14 grid md:grid-cols-2 grid-cols-1 xl:grid-cols-3 lg:gap-8 md:gap-6 gap-4">
        <div className="imgShadow rounded-md lg:p-6 md:p-4 p-2 bg-white ">
          <h1 className=" text-black font-medium text-lg lg:text-xl">
            {heroSectionData.fashionBanner.title}
          </h1>
          <h2>{heroSectionData.fashionBanner.subtitle}</h2>
          <div className=" relative py-2 w-full ">
            <Image
              className=" rounded-md w-full h-full"
              width={400}
              height={500}
              src={heroSectionData.fashionBanner.image}
              alt=""
            />
            <div className=" absolute -bottom-2.5 left-[50%] translate-x-[-50%] z-40">
              <Link href={heroSectionData.fashionBanner.path} className=" ">
                <Buttons className="">
                  {heroSectionData.fashionBanner.buttonText}
                </Buttons>
              </Link>
            </div>
          </div>
        </div>
        <div className="imgShadow rounded-md lg:p-4 md:p-3 p-2 bg-white">
          <div className=" flex items-center justify-between">
            <h1 className=" text-black font-medium text-lg lg:text-xl">
              {heroSectionData.gamingAccessories.title}
            </h1>
            <Link href={"products" + heroSectionData.gamingAccessories.seeMore}>
              <h2 className="text-[12px] cursor-pointer md:text-[13px] text-[#6467F2] border-b border-[#6467F2]">
                See more
              </h2>
            </Link>
          </div>
          <div className=" mt-3 md:mt-5  grid grid-cols-2 items-center justify-center gap-3 h-[85%]">
            {heroSectionData.gamingAccessories.items.map((item, index) => (
              <div
                key={index}
                className=" p-3 md:p-4 imgShadow rounded-md h-[100%]"
              >
                <div className="h-[65px]">
                  <Image
                    className=" mx-auto"
                    width={60}
                    height={100}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <h2 className=" text-[15px] font-medium">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className=" rounded-md">
          <div className="grid grid-cols-2 items-center gap-3 md:grid-cols-2">
            <div className=" w-full">
              <Image
                className="w-full rounded-lg"
                src={heroSectionData.promoBanners[0].image}
                width={200}
                height={200}
                alt="img"
              />
            </div>
            <div className=" w-full">
              <Image
                className="w-full rounded-lg"
                src={heroSectionData.promoBanners[1].image}
                width={200}
                height={200}
                alt="img"
              />
            </div>
          </div>
          <div className=" flex w-full bg-white imgShadow rounded-md lg:mt-4 mt-2">
            <div className="">
              <Image
                className="w-full rounded-md"
                src={heroSectionData.promoBanners[2].image}
                width={250}
                height={200}
                alt="img"
              />
            </div>
            <div className=" lg:mt-4 mt-2 relative">
              <div className="w-fit relative mb-2 lg:mb-4">
                <Image
                  src={"/images/discountImg.png"}
                  alt="discount img"
                  height={140}
                  width={70}
                />
                <span className="text-[10px] w-full text-white text-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                  $250 Off
                </span>
              </div>
              <h1 className=" text-black font-medium text-lg lg:text-xl">
                {heroSectionData.promoBanners[2].title}
              </h1>
              <p className="text-lg font-medium">
                {heroSectionData.promoBanners[2].price}
              </p>
              <Link href={heroSectionData.promoBanners[2].path}>
                <Buttons className="mt-2 ml-4 md:ml-6">Shop Now</Buttons>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Section2;
