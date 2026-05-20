"use client"
import { useEffect, useState } from 'react'
import Heading from '../common/Heading'
import { useTopRatedProduct } from './hook/setTopRatedProduct'
import { useSelector } from 'react-redux';
import { Product, TopRatedProduct, TopRatedState } from './types/type';
import ProductCard from '../common/ProductCart';
import Link from 'next/link';
function Section3() {
  const { getTopRated } = useTopRatedProduct();
  // calling api for set top rated products in redux store
  useEffect(() => {
    async function topRatedProducts() {
      await getTopRated();
    }
    topRatedProducts();
  }, []);
  // geeting top rated product from redux store
  const { products, loading, error, message } = useSelector((state: { topRatedProduct: TopRatedState }) => state.topRatedProduct);
  useEffect(() => {
    console.log(products, loading, error, message)
  }, [products]);

  return (
    <div className='px-4 md:px-6 lg:px-8 py-4 md:py-6'>
      <div className='flex items-center justify-between'>
        <Heading title='Tranding Products' />
        <Link href={"/trandingProducts"}>
          <button className=' transition duration-300 hover:text-white px-5 py-2 hover:bg-[#4EA674] border border-[#4EA674] font-medium text-[14px] rounded-full cursor-pointer'>View All</button>
        </Link>
      </div>
      {loading ? <div>Loading...</div> : error ? <div>{error}</div> : <div>
        <div className=' flex flex-wrap gap-6 items-center lg:py-8 md:py-6 py-4'>
          {
            products?.length > 0 && products?.map((item: TopRatedProduct, idx: number) => {
              return (<div key={idx} className=' '>
                <ProductCard productId={item._id} image={item.poster} title={item.name} description={item.description} rating={item.ratings[idx]?.rating} originalPrice={item.price}
                  discount={Number(((item.discountPrice / item.price) * 100).toFixed(2))}
                  reviewCount={item.ratings.length}
                  currentPrice={item.price - item.discountPrice}
                />
              </div>)
            })
          }
        </div>
      </div>}
    </div>
  )
}

export default Section3