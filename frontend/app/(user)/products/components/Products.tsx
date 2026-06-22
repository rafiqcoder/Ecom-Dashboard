"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "@/components/common/ProductCart";
import Loader from "@/components/common/Loader";
import { useProductsHook } from "./hooks/useProducts";
import { Product, ProductsFetchingInterface } from "@/global/types/type";

function Products() {
  const { getAllProductsHook } = useProductsHook();
  // get category product from redux store
  const { products, loading, message, success, error } = useSelector((state: { allProduct: ProductsFetchingInterface }) => state.allProduct)

  useEffect(() => {
    async function getProducts() {
      await getAllProductsHook();
    }
    if (!success) getProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  2xl:grid-cols-5 lg:gap-8 md:gap-6 gap-4 flex-wrap overflow-x-hidden items-center lg:py-8 md:py-6 py-4">
          {products.length > 0 &&
            products.map((product: Product, id: number) => (
              <div
                key={id}
                className=" transition duration-300 ease-in-out"
              >
                <ProductCard
                  productId={product._id}
                  image={product.poster}
                  title={product.name}
                  description={product.description}
                  rating={product?.ratings?.[0]?.rating}
                  reviewCount={
                    product?.ratings?.length > 0 && product?.ratings?.length
                  }
                  currentPrice={product.price - product.discountPrice}
                  originalPrice={product.discountPrice && product.price}
                  discount={
                    product.discountPrice &&
                    Number(
                      ((product.discountPrice / product.price) * 100).toFixed(
                        2,
                      ),
                    )
                  }
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Products;
