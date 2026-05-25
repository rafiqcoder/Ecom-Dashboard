"use client"
import React, { useEffect } from 'react'
import { useOrders } from '../hook/useOrders';
import { useSelector } from 'react-redux';
import { ProductsFetchingInterface } from '@/global/types/type';

function MyOrder() {
  // use hook
  const { getOrders } = useOrders();

  const { activeTab, myOrders: { products, message, error, loading, success } } = useSelector((state: { orders: { activeTab: string; myOrders: ProductsFetchingInterface } }) => state.orders);

  useEffect(() => {
    async function fetchData() {
      await getOrders();
    }

    fetchData()
  }, [])
  return (
    <div>MyOrder</div>
  )
}

export default MyOrder