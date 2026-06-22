"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import type { ProductCardProps } from "./types/type";
import { userCart } from "@/features/cart/hook/useCart";
import { useSelector } from "react-redux";
import { initialInterface } from "@/features/auth/authSlice/types/type";
import { useRouter } from "next/navigation";
import { CartSliceInterface } from "@/features/cart/toolkit/types/type";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({
  image = "/api/placeholder/400/350",
  title = "Radiant Glow Hydrating Serum",
  description = "Gentle yet effective, our Radiance Boosting Foaming......",
  rating,
  reviewCount,
  currentPrice,
  originalPrice,
  discount,
  productId,
}) => {
  const router = useRouter();

  const { addToCart } = userCart();

  // get user and check if user not login send hin in login page
  const user = useSelector((state: { auth: initialInterface }) => state.auth);
  const addToCartHandle = async () => {
    if (!user.success) {
      router.push("/login");
      return;
    }
    await addToCart({ productId });
  };
  const newProduct = useSelector(
    (state: { cart: CartSliceInterface }) => state.cart,
  );
  return (
    <div className="w-full md:h-[500px]">
      {/* Card Container */}
      <div className="bg-white h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Image Container */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-72 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain hover:scale-105 transition-transform duration-500"
          />

          {/* Discount Badge */}
          {discount && (
            <div className="absolute top-4 right-4 bg-green-100 rounded-full px-3 py-1 flex items-center gap-1">
              <GoClock size={14} style={{ color: "#4EA674" }} />
              <span
                className="text-sm font-semibold"
                style={{ color: "#4EA674" }}
              >
                Limited Offer
              </span>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 ">
          {/* Title */}
          <h2 className="text-lg font-bold text-black line-clamp-2">{title}</h2>

          {/* Description */}
          <p
            className="text-sm leading-relaxed line-clamp-2"
            style={{ color: "#00000099" }}
          >
            {description}
          </p>

          {/* Rating Section */}
          <div className="flex items-center gap-2">
            {rating && (
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) =>
                  rating > i ? (
                    <FaStar
                      key={i}
                      size={16}
                      className="fill-yellow-400"
                      style={{ color: "#FCD34D" }}
                    />
                  ) : (
                    <FaRegStar
                      key={i}
                      size={16}
                      className="fill-yellow-400"
                      style={{ color: "#FCD34D" }}
                    />
                  ),
                )}
              </div>
            )}
            {reviewCount && (
              <span
                className="text-xs font-medium"
                style={{ color: "#00000099" }}
              >
                ({reviewCount.toLocaleString()} reviews)
              </span>
            )}
          </div>

          {/* Pricing Section */}
          <div className=" border-t border-gray-100">
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold" style={{ color: "#4EA674" }}>
                ${currentPrice.toFixed(2)}
              </span>
              {originalPrice && (
                <span
                  className="text-sm font-medium line-through"
                  style={{ color: "#00000099" }}
                >
                  ${originalPrice?.toFixed(2)}
                </span>
              )}
              {discount && (
                <span
                  className="text-xs font-bold px-2 py-1 bg-green-50 rounded"
                  style={{ color: "#4EA674" }}
                >
                  {discount}% Off
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 text-[14px]">
            <button className="flex-1 transition duration-300 hover:border-b border-[#6467F2] cursor-pointer text-[#6467F2] text-center rounded-lg font-medium ">
              View Details
            </button>
            <button
              className="flex-1 cursor-pointer px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 shadow-md hover:shadow-lg"
              style={{ backgroundColor: "#4EA674" }}
              onClick={addToCartHandle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3d8859";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#4EA674";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {newProduct.loading ? "Loading..." : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
