"use client";

import { useParams } from "next/navigation";
import { useCategory } from "../hook/useCategory";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CategoryProductInterface, Product } from "../toolkit/types/type";
import ProductCard from "@/components/common/ProductCart";
import Loader from "@/components/common/Loader";

function CategoryProduct() {
  const { getProductCategory } = useCategory();
  const category = useParams()?.category;

  useEffect(() => {
    async function getProducts() {
      await getProductCategory({ category: category as string });
    }
    getProducts();
  }, [category]);
  const data = useSelector(
    (state: { categoryProduct: CategoryProductInterface }) =>
      state.categoryProduct,
  );
console.log(data)
  return (
    <div>
      {data.loading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className=" flex 2xl:grid-cols-5 overflow-x-hidden items-center lg:py-8 md:py-6 py-4">
          {data.products.length > 0 &&
            data.products.map((product: Product, id: number) => (
              <div
                key={id}
                className="xl:w-[25%] px-4 shrink-0 lg:w-[30%] md:w-[50%] sm:w-[50%] w-full 2xl:w-[20%] transition duration-300 ease-in-out"
              >
                <ProductCard
                  productId={product._id}
                  image={product.poster}
                  title={product.name}
                  description={product.description}
                  rating={product?.ratings?.[0]?.rating}
                  reviewCount={product?.ratings?.length > 0 && product?.ratings?.length}
                  currentPrice={product.price}
                  originalPrice={product.discountPrice}
                  discount={product.discountPrice}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProduct;
