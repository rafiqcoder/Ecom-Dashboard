"use client"

import { userCart } from "@/features/cart/hook/useCart";
import { CartSliceInterface } from "@/features/cart/toolkit/types/type";
import { useEffect, useState } from "react"
import { useSelector } from "react-redux";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'PC system All in One APPLE iMac (2023)',
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg",
    price: 1499,
    quantity: 2,
  },
  {
    id: 2,
    name: "Apple Watch Series 8",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg",
    price: 598,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 16"',
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg",
    price: 1799,
    quantity: 1,
  },
  {
    id: 4,
    name: 'Tablet APPLE iPad Pro 12.9"',
    image:
      "https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg",
    price: 699,
    quantity: 1,
  },
];

function CartPage() {
  const [cartItems, setCartItems] =
    useState<CartItem[]>(initialCartItems);

  const handleIncrement = (id: number) => {
    
  };

  const handleDecrement = (id: number) => {
    
  };

  const handleRemove = (id: number) => {
    
  };

  // const subtotal = cartItems.reduce(
    
  // );



  return (
    <section className="bg-white py-8 dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Shopping Cart
        </h2>

        <div className="mt-8 lg:flex lg:items-start lg:gap-8">
          {/* Left Side */}
          <div className="w-full lg:max-w-4xl">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-contain"
                    />

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>

                      <div className="mt-4 flex items-center gap-4">
                        <button className="text-sm text-gray-500 hover:text-black dark:hover:text-white">
                          Add to Favorites
                        </button>

                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <button
                          onClick={() =>
                            handleDecrement(item.id)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100"
                        >
                          -
                        </button>

                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="w-12 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white"
                        />

                        <button
                          onClick={() =>
                            handleIncrement(item.id)
                          }
                          className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-24 text-right">
                        <p className="font-bold text-gray-900 dark:text-white">
                          $
                          {(
                            item.price * item.quantity
                          ).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="mt-8 w-full max-w-md space-y-6 lg:mt-0">
            {/* Order Summary */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Order Summary
              </h3>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Original Price
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    $400
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Shipping
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    $10
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Tax
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    $30
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </span>

                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      $440
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Continue Shopping
                </a>
              </div>
            </div>

            {/* Voucher */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <form className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Do you have a voucher or gift card?
                  </label>

                  <input
                    type="text"
                    placeholder="Enter voucher code"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartPage;