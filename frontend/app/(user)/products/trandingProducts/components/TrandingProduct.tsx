"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "@/components/common/ProductCart";
import Loader from "@/components/common/Loader";
import { Product, TrandingProductInterface } from "../types/type";
import { useTopRatedProduct } from "@/components/landing/hook/setTopRatedProduct";

function TrandingProduct() {
  const { getTopRated } = useTopRatedProduct();
  // get category product from redux store
  const { products, loading, error, success } = useSelector(
    (state: { topRatedProduct: TrandingProductInterface }) =>
      state.topRatedProduct,
  );
  // calling api for set top rated products in redux store
  useEffect(() => {
    async function topRatedProducts() {
      await getTopRated();
    }
    if (success === false) topRatedProducts();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className=" flex 2xl:grid-cols-5 overflow-x-hidden items-center lg:py-8 md:py-6 py-4">
          {products.length > 0 &&
            products.map((product: Product, id: number) => (
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

export default TrandingProduct;
