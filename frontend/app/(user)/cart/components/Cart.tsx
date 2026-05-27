"use client";

import { userCart } from "@/features/cart/hook/useCart";
import { CartSliceInterface } from "@/features/cart/toolkit/types/type";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function CartPage() {
  // use cart for calling user cart hook
  const { getCartProduct, updateProductQuantity, removeFromCart } = userCart();

  // use selector to get cart products from redux store
  const { products, loading, error, success } = useSelector(
    (state: { cart: CartSliceInterface }) => state.cart,
  );
  useEffect(() => {
    async function fetchProducts() {
      await getCartProduct();
    }
    if (!success) {
      fetchProducts();
    }
  }, []);

  // increate product quantity
  const handleIncrement = async (id: string) => {
    await updateProductQuantity({ productId: id, quantityType: "increase" });
  };

  // decrease product quantity/
  const handleDecrement = (id: string) => {
    products.map(async (item) => {
      if (item._id === id) {
        item.quantity > 1
          ? await updateProductQuantity({
            productId: id,
            quantityType: "decrease",
          })
          : toast.error("minimum quantity is 1");
      }
    });
  };

  // remove product from cart
  const handleRemove = async (id: string) => {
    await removeFromCart({ productId: id });
  };

  // const subtotal = cartItems.reduce(

  // );

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Shopping Cart
        </h2>

        <div className="mt-8 lg:flex lg:items-start lg:gap-8">
          {/* Left Side */}
          <div className="w-full lg:max-w-4xl">
            <div className="space-y-6">
              {products.map((item) => (
                <div
                  key={item._id}
                  className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    {/* Image */}
                    <img
                      src={item.poster}
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
                          onClick={() => handleRemove(item._id)}
                          className="text-sm cursor-pointer text-red-500 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <button
                          onClick={() => handleDecrement(item._id)}
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
                          onClick={() => handleIncrement(item._id)}
                          className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="w-24 text-right">
                        <p className="font-bold text-gray-900 dark:text-white">
                          $
                          {(
                            (item.price - item.discountPrice) *
                            item.quantity
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
                  <span className="text-gray-500">Original Price</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {products
                      .reduce(
                        (total, product) =>
                          total +
                          (product.price - product.discountPrice) *
                          product.quantity,
                        0,
                      )
                      .toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    $
                    {products
                      .reduce(
                        (total, product) => total + product.quantity * 5,
                        0,
                      )
                      .toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Tax</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    $
                    {products
                      .reduce(
                        (total, product) => total + product.quantity * 2,
                        0,
                      )
                      .toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </span>

                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      $
                      {(
                        products.reduce(
                          (total, product) =>
                            total +
                            (product.price - product.discountPrice) *
                            product.quantity,
                          0,
                        ) +
                        products.reduce(
                          (total, product) => total + product.quantity * 5,
                          0,
                        ) +
                        products.reduce(
                          (total, product) => total + product.quantity * 2,
                          0,
                        )
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">
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
