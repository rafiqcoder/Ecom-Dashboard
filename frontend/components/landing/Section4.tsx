"use client"
import Link from 'next/link'
import Heading from '../common/Heading'
import Image from 'next/image';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css";
function Section4() {
  const cateProducts = [
    {
      img: "/categoryProductImages/fassion.png",
      text: "Fassion",
      path: "/fassion",
    },
    {
      img: "/categoryProductImages/grocery.png",
      text: "Grocery",
      path: "/grocery",
    },
    {
      text: "Electronics",
      path: "/electronics",
      img: "/categoryProductImages/electronic.png"
    },
    {
      text: "Home",
      path: "/home",
      img: "/categoryProductImages/home.png"
    },
    {
      text: "Toys",
      path: "/toys",
      img: "/categoryProductImages/toys.png"
    },
    {
      img: "/categoryProductImages/fassion.png",
      text: "Fassion",
      path: "/fassion",
    },
    {
      img: "/categoryProductImages/grocery.png",
      text: "Grocery",
      path: "/grocery",
    },
    {
      text: "Electronics",
      path: "/electronics",
      img: "/categoryProductImages/electronic.png"
    },
  ]
  // carousel responsive
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1500 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 800, min: 500 },
      items: 2
    },
    mobile2: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };
  return (
    <div className='px-4 md:px-6 lg:px-6 py-2 md:py-4'>
      <Heading title='Start explore now' />
      <div className=' py-6'>
        <Carousel responsive={responsive}>
          {
            cateProducts.map(({ text, img, path }, id) => {
              return (
                <div key={id} className='mx-4 border border-[#E5E7EB] h-[250px] rounded-md shrink-0 transition duration-300 imgShadow px-6 '>
                  <Link href={"/products" + path} className=' border-red-500 px-2 lg:px-4'>
                    <div className=' h-[140px] '>
                      <Image src={img} alt={text} height={300} width={180} className=' h-full mx-auto' />
                    </div>
                    <p className='mt-4 w-full text-center text-[15px] font-medium text-black'>{text}</p>
                  </Link>
                </div>
              )
            })
          }
        </Carousel>
      </div>
    </div>
  )
}

export default Section4