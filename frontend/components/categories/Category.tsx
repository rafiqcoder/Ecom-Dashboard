"use client";

import Link from "next/link";
import type { CategoryType } from "./types/type";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Category() {
  const category: CategoryType[] = [
    { name: "Men", path: "/men" },
    { name: "Women", path: "/women" },
    { name: "Baby", path: "/baby" },
    { name: "Grocery & Essentials", path: "/grocery-essentials" },
    { name: "Streetwear", path: "/streetwear" },
    { name: "Shoes", path: "/shoes" },
    { name: "Accessories", path: "/accessories" },
    { name: "Beauty", path: "/beauty" },
    { name: "Electronics", path: "/electronics" },
    { name: "Industrial equipment", path: "/industrial-equipment" },
    { name: "Home & Kitchen", path: "/home-kitchen" },
    { name: "Sports & Outdoors", path: "/sports-outdoors" },
    { name: "Automotive", path: "/automotive" },
    { name: "Toys & Games", path: "/toys-games" },
    { name: "Health & Wellness", path: "/health-wellness" },
    { name: "Books & Stationery", path: "/books-stationery" },
    { name: "Jewelry & Watches", path: "/jewelry-watches" },
    { name: "Pet Supplies", path: "/pet-supplies" },
    { name: "Office Supplies", path: "/office-supplies" },
    { name: "Garden & Outdoor Living", path: "/garden-outdoor-living" },
    { name: "Tools & Home Improvement", path: "/tools-home-improvement" },
    { name: "Music & Instruments", path: "/music-instruments" },
    { name: "Luggage & Travel Gear", path: "/luggage-travel-gear" },
    { name: "Arts, Crafts & Sewing", path: "/arts-crafts-sewing" },
    { name: "Collectibles & Fine Art", path: "/collectibles-fine-art" },
  ];
  const path = usePathname();

  const [showingCate, setShowingCate] = useState(10);

  return (
    <div className=" max-w-[1600px] px-3 md:py-4 py-2">
      <div className="flex items-center flex-wrap space-x-6 md:space-x-8 lg:space-x-10 gap-2 md:gap-4">
        {category.map((cate, idx) => {
          return (
            idx <= showingCate && (
              <Link key={idx} href={"/products/category" + cate.path}>
                <div
                  className={`text-[14px] cursor-pointer transition duration-300 md:text-[15px] relative  hover:text-[#4EA674] ${"/products" + cate.path === path ? "border-b border-[#4EA674] text-[#4EA674]" : "borderAnimate text-[#023337] "}`}
                >
                  {cate.name}
                </div>
              </Link>
            )
          );
        })}
        <p
          onClick={() =>
            setShowingCate(
              category.length === showingCate ? 10 : category.length,
            )
          }
          className="text-[14px] cursor-pointer transition duration-300 md:text-[15px] relative text-[#6467F2] "
        >
          {showingCate === category.length ? "Show less" : "See more"}
        </p>
      </div>
    </div>
  );
}

export default Category;
