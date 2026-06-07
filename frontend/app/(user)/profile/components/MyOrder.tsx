"use client";
import React, { useEffect, useState } from "react";
import { useOrders } from "../hook/useOrders";
import { useSelector } from "react-redux";
import Link from "next/link";
import { InitialInterface, OrderInterface } from "./types/type";
import Loader from "@/components/common/Loader";

function MyOrder() {
  // use hook
  const { getOrders } = useOrders();
  const {
    activeTab,
    myOrders: { products, message, error, loading, success },
  } = useSelector((state: { orders: InitialInterface }) => state.orders);

  console.log(products);

  useEffect(() => {
    async function fetchData() {
      await getOrders();
    }

    fetchData();
  }, []);

  // add order date
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // const month = Number(products?.[0]?.createdAt?.split("-")[1]);
  // const year = products?.createdAt?.split("-")[0]?.padStart(4, "0");
  return (
    loading ? <div className=" w-full h-[500px] flex items-center justify-center"><Loader/></div> : <div>
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">My Orders</h2>

        {products.length > 0 ? (
          <div className="space-y-4">
            {products.map((order, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <p className="text-sm" style={{ color: "#00000099" }}>
                      Order ID
                    </p>
                    <p className="font-bold text-gray-900">
                      {order._id.slice(0, 6)}...
                    </p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "#00000099" }}>
                      Date
                    </p>
                    <p className="font-semibold text-gray-900">
                      {months[Number(order?.createdAt?.split("-")[1]) - 1]}{" "}
                      {order?.createdAt?.split("-")[0]?.padStart(4, "0")}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "#00000099" }}>
                      Items
                    </p>
                    <p className="font-semibold text-gray-900">
                      {order?.products.length} items
                    </p>
                  </div>
                  <div>
                    <p className="text-sm" style={{ color: "#00000099" }}>
                      Status
                    </p>
                    <p
                      className="font-semibold px-3 py-1 rounded-full inline-block text-white text-sm"
                      style={{
                        backgroundColor:
                          order.orderStatus === "delivered"
                            ? "#4ea674"
                            : "#ff9800",
                      }}
                    >
                      {order.orderStatus}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm" style={{ color: "#00000099" }}>
                      Total
                    </p>
                    <p className="font-bold text-lg text-gray-900">
                      ${order.totalPrice}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <Link href={`/order/${order._id}`}>
                    <button
                      className="text-sm cursor-pointer hover:border-b border-[#4ea674] font-semibold transition"
                      style={{ color: "#4ea674" }}
                    >
                      View Details
                    </button>
                  </Link>
                  <button
                    className="text-sm cursor-pointer hover:border-b border-[#4ea674] font-semibold transition"
                    style={{ color: "#4ea674" }}
                  >
                    Track Order
                  </button>
                  <button
                    className="text-sm cursor-pointer hover:border-b border-[#4ea674] font-semibold transition"
                    style={{ color: "#4ea674" }}
                  >
                    Return Items
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p style={{ color: "#00000099" }}>No orders yet</p>
            <Link href="/products">
              <button
                className="mt-4 px-6 py-2 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: "#4ea674" }}
              >
                Start Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyOrder;
