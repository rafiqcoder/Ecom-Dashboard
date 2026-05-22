"use client";
import { useEffect, useState } from "react";
import Heading from "../common/Heading";
import { useTopRatedProduct } from "./hook/setTopRatedProduct";
import { useDispatch, useSelector } from "react-redux";
import { Product, TopRatedProduct, TopRatedState } from "./types/type";
import ProductCard from "../common/ProductCart";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { setProductCarousel } from "./toolkit/carousel.slice";
import Loader from "../common/Loader";
function Section3() {
  const dispatch = useDispatch();
  const { getTopRated } = useTopRatedProduct();
  // calling api for set top rated products in redux store
  useEffect(() => {
    async function topRatedProducts() {
      await getTopRated();
    }
    topRatedProducts();
  }, []);
  // geeting top rated product from redux store
  const { products, loading, error, message } = useSelector(
    (state: { topRatedProduct: TopRatedState }) => state.topRatedProduct,
  );
  // make product carousel

  const [showingIdx, setShowingIdx] = useState<number>(0);
  useEffect(() => {
    dispatch(setProductCarousel(showingIdx));
  }, [showingIdx]);

  const carouNum = useSelector(
    (state: { carousel: { productCarouselIdx: number } }) =>
      state.carousel.productCarouselIdx,
  );

  return (
    <div className="px-4 relative md:px-6 lg:px-8 py-4 md:py-6 w-full overflow-x-hidden">
      <div className="flex items-center justify-between">
        <Heading title="Tranding Products" />

        <Link href={"/trandingProducts"}>
          <button className=" transition duration-300 hover:text-white px-5 py-2 hover:bg-[#4EA674] border border-[#4EA674] font-medium text-[14px] rounded-full cursor-pointer">
            View All
          </button>
        </Link>
      </div>
      {loading ? (
        <div className=" w-10 mx-auto h-[400px] flex items-center">
          <Loader />
        </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div className=" flex 2xl:grid-cols-5 overflow-x-hidden items-center lg:py-8 md:py-6 py-4">
            {products?.length > 0 &&
              products?.map((item: TopRatedProduct, idx: number) => {
                return (
                  idx <= 5 && (
                    <div
                      key={idx}
                      className="xl:w-[25%] px-4 shrink-0 lg:w-[30%] md:w-[50%] sm:w-[50%] w-full 2xl:w-[20%] transition duration-300 ease-in-out"
                      style={{ transform: `translateX(-${carouNum * 100}%)` }}
                    >
                      <ProductCard
                        productId={item._id}
                        image={item.poster}
                        title={item.name}
                        description={item.description}
                        rating={item.ratings?.[0]?.rating}
                        originalPrice={item.price}
                        discount={Number(
                          ((item.discountPrice / item.price) * 100).toFixed(2),
                        )}
                        reviewCount={item.ratings?.length}
                        currentPrice={item.price - item.discountPrice}
                      />
                    </div>
                  )
                );
              })}
          </div>
        </div>
      )}
      {/* arrows */}
      <div
        onClick={() =>
          setShowingIdx(showingIdx > 0 ? showingIdx - 1 : products.length - 1)
        }
        className=" absolute top-[50%] translate-y-[-50%] z-40 left-5 transition duration-300  md:px-2 px-1 lg:px-3 md:py-2 py-1 lg:py-3 bg-[#4EA674] text-black cursor-pointer rounded-full"
      >
        <FaArrowLeftLong className=" text-white " />
      </div>
      <div
        onClick={() =>
          setShowingIdx(showingIdx === products.length - 1 ? 0 : showingIdx + 1)
        }
        className=" absolute top-[50%] translate-y-[-50%] z-40 right-5 transition duration-300  md:px-2 px-1 lg:px-3 md:py-2 py-1 lg:py-3 bg-[#4EA674] text-black cursor-pointer rounded-full"
      >
        <FaArrowRightLong className=" text-white" />
      </div>
    </div>
  );
}

export default Section3;
